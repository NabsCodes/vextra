import "server-only";

import { eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { waitlistSignups } from "@/db/schema";
import { createEmailContact, sendEmail } from "@/lib/email/delivery";
import { buildEmailIdempotencyKey } from "@/lib/email/resend";
import { buildTeamNotificationEmail } from "@/lib/email/team-notification";
import { buildWelcomeEmail } from "@/lib/email/welcome";
import {
  getDuplicateWaitlistResult,
  WAITLIST_MESSAGES,
} from "@/lib/form-results";
import type { WaitlistSuccessResult } from "@/types/waitlist";
const TEAM_NOTIFICATION_EMAIL =
  process.env.WAITLIST_NOTIFICATION_EMAIL || "info@vextralimited.com";
const TEAM_NOTIFICATION_TIMEZONE =
  process.env.WAITLIST_NOTIFICATION_TIMEZONE || "Africa/Lagos";
const TEAM_NOTIFICATION_LOCALE =
  process.env.WAITLIST_NOTIFICATION_LOCALE || "en-NG";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Resend error like for the user
type ResendErrorLike = {
  statusCode?: number | null;
  message?: string | null;
};

// Check if the error is a duplicate resend error for the user
function isDuplicateResendError(
  error: ResendErrorLike | null | undefined,
): boolean {
  if (!error) return false;

  const message = (error.message || "").toLowerCase();
  return error.statusCode === 409 || message.includes("already exists");
}

// Mark duplicate submission for the user
async function markDuplicateSubmission(
  normalizedEmail: string,
): Promise<WaitlistSuccessResult> {
  const [existingSignup] = await db
    .update(waitlistSignups)
    .set({
      duplicateCount: sql<number>`${waitlistSignups.duplicateCount} + 1`,
      updatedAt: new Date(),
      lastSubmittedAt: new Date(),
    })
    .where(eq(waitlistSignups.normalizedEmail, normalizedEmail))
    .returning({
      id: waitlistSignups.id,
      welcomeEmailStatus: waitlistSignups.welcomeEmailStatus,
    });

  if (existingSignup?.welcomeEmailStatus === "sent") {
    return getDuplicateWaitlistResult({ welcomeEmailStatus: "sent" });
  }

  if (existingSignup?.welcomeEmailStatus === "failed") {
    // If a previous welcome attempt failed, try once more on duplicate submit.
    const retryResult = await retryFailedWelcomeEmail({
      signupId: existingSignup.id,
      normalizedEmail,
    });

    if (retryResult) {
      return getDuplicateWaitlistResult({
        welcomeEmailStatus: "failed",
        retrySucceeded: true,
      });
    }
  }

  return getDuplicateWaitlistResult({
    welcomeEmailStatus: existingSignup?.welcomeEmailStatus,
  });
}

// Send team notification with retry and DB tracking
async function sendTeamNotification(
  email: string,
  signupId: string,
): Promise<boolean> {
  const MAX_ATTEMPTS = 2;
  const RETRY_DELAY_MS = 1000;
  const [signup] = await db
    .select({
      teamNotificationStatus: waitlistSignups.teamNotificationStatus,
      createdAt: waitlistSignups.createdAt,
    })
    .from(waitlistSignups)
    .where(eq(waitlistSignups.id, signupId))
    .limit(1);

  if (!signup) {
    console.error(
      `[Waitlist Service] Team notification skipped: signup not found (${signupId})`,
    );
    return false;
  }

  if (signup.teamNotificationStatus === "sent") {
    return true;
  }

  const notificationEmail = await buildTeamNotificationEmail({
    subscriberEmail: email,
    signupId,
    signedUpAt: signup.createdAt,
    teamTimeZone: TEAM_NOTIFICATION_TIMEZONE,
    teamLocale: TEAM_NOTIFICATION_LOCALE,
  });
  const idempotencyKey = buildEmailIdempotencyKey(
    "vextra-waitlist-team-notification",
    signupId,
  );

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const notifyResult = await sendEmail(
      {
        from: "Vextra Launch List <waitlist@vextralimited.com>",
        to: TEAM_NOTIFICATION_EMAIL,
        subject: "New Vextra Launch List Signup",
        html: notificationEmail.html,
        text: notificationEmail.text,
      },
      { idempotencyKey },
    );

    if (!notifyResult.error) {
      await db
        .update(waitlistSignups)
        .set({
          teamNotificationStatus: "sent",
          teamNotificationSentAt: new Date(),
          teamNotificationProviderId: notifyResult.data?.id || null,
          updatedAt: new Date(),
        })
        .where(eq(waitlistSignups.id, signupId));

      return true;
    }

    console.error(
      `[Waitlist Service] Team notification failed (attempt ${attempt}/${MAX_ATTEMPTS}):`,
      notifyResult.error,
    );

    if (attempt < MAX_ATTEMPTS) {
      await delay(RETRY_DELAY_MS);
    }
  }

  await db
    .update(waitlistSignups)
    .set({
      teamNotificationStatus: "failed",
      updatedAt: new Date(),
    })
    .where(eq(waitlistSignups.id, signupId));

  console.error(
    `[Waitlist Service] Team notification permanently failed for: ${email}`,
  );
  return false;
}

async function retryFailedWelcomeEmail({
  signupId,
  normalizedEmail,
}: {
  signupId: string;
  normalizedEmail: string;
}): Promise<boolean> {
  const contactResult = await createEmailContact(normalizedEmail);

  if (contactResult.error && !isDuplicateResendError(contactResult.error)) {
    console.error(
      "[Waitlist Service] Contact re-sync failed during welcome retry:",
      contactResult.error,
    );
  } else if (contactResult.data?.id) {
    await db
      .update(waitlistSignups)
      .set({
        resendContactId: contactResult.data.id,
        updatedAt: new Date(),
      })
      .where(eq(waitlistSignups.id, signupId));
  }

  const welcomeEmail = await buildWelcomeEmail();
  const retryWelcomeResult = await sendEmail(
    {
      from: "Vextra <hello@vextralimited.com>",
      to: normalizedEmail,
      subject: "You're on the Vextra launch list!",
      html: welcomeEmail.html,
      text: welcomeEmail.text,
    },
    {
      idempotencyKey: buildEmailIdempotencyKey(
        "vextra-waitlist-welcome-retry",
        signupId,
      ),
    },
  );

  if (retryWelcomeResult.error) {
    console.error(
      "[Waitlist Service] Welcome retry failed:",
      retryWelcomeResult.error,
    );

    await db
      .update(waitlistSignups)
      .set({
        welcomeEmailStatus: "failed",
        updatedAt: new Date(),
      })
      .where(eq(waitlistSignups.id, signupId));

    return false;
  }

  await db
    .update(waitlistSignups)
    .set({
      welcomeEmailStatus: "sent",
      welcomeEmailSentAt: new Date(),
      welcomeEmailProviderId: retryWelcomeResult.data?.id || null,
      updatedAt: new Date(),
    })
    .where(eq(waitlistSignups.id, signupId));

  // Notify team about the successful retry
  await sendTeamNotification(normalizedEmail, signupId);

  return true;
}

export async function submitWaitlistSignup({
  rawEmail,
  normalizedEmail,
  source = "landing_page",
}: {
  rawEmail: string;
  normalizedEmail: string;
  source?: string;
}): Promise<WaitlistSuccessResult> {
  const now = new Date();

  // Insert waitlist signup — raw email for auditability, normalized for dedup
  const inserted = await db
    .insert(waitlistSignups)
    .values({
      email: rawEmail,
      normalizedEmail,
      source,
      welcomeEmailStatus: "pending",
      createdAt: now,
      updatedAt: now,
      lastSubmittedAt: now,
    })
    .onConflictDoNothing({ target: waitlistSignups.normalizedEmail })
    .returning({ id: waitlistSignups.id });

  // Check if the signup is a duplicate for the user
  if (inserted.length === 0) {
    return markDuplicateSubmission(normalizedEmail);
  }

  // Get the signup ID for the user
  const signupId = inserted[0].id;

  // Create contact for the user
  const contactResult = await createEmailContact(normalizedEmail);

  // Check if the contact creation failed for the user
  if (contactResult.error) {
    if (!isDuplicateResendError(contactResult.error)) {
      console.error(
        "[Waitlist Service] Contact creation failed:",
        contactResult.error,
      );
    }
  } else if (contactResult.data?.id) {
    // Update the waitlist signup with the contact ID for the user
    await db
      .update(waitlistSignups)
      .set({
        resendContactId: contactResult.data.id,
        updatedAt: new Date(),
      })
      .where(eq(waitlistSignups.id, signupId));
  }

  // Send welcome email for the user
  const welcomeEmail = await buildWelcomeEmail();
  const welcomeResult = await sendEmail(
    {
      from: "Vextra <hello@vextralimited.com>",
      to: normalizedEmail,
      subject: "You're on the Vextra launch list!",
      html: welcomeEmail.html,
      text: welcomeEmail.text,
    },
    {
      idempotencyKey: buildEmailIdempotencyKey(
        "vextra-waitlist-welcome",
        signupId,
      ),
    },
  );

  // Check if the welcome email failed for the user
  if (welcomeResult.error) {
    console.error(
      "[Waitlist Service] Welcome email failed:",
      welcomeResult.error,
    );

    // Update the waitlist signup with the welcome email status for the user
    await db
      .update(waitlistSignups)
      .set({
        welcomeEmailStatus: "failed",
        updatedAt: new Date(),
      })
      .where(eq(waitlistSignups.id, signupId));

    // Send team notification for the user
    await sendTeamNotification(normalizedEmail, signupId);

    return {
      status: "subscribed_pending_email",
      message: "You're on the launch list. Confirmation email is pending.",
    };
  }

  // Update the waitlist signup with the welcome email status for the user
  await db
    .update(waitlistSignups)
    .set({
      welcomeEmailStatus: "sent",
      welcomeEmailSentAt: new Date(),
      welcomeEmailProviderId: welcomeResult.data?.id || null,
      updatedAt: new Date(),
    })
    .where(eq(waitlistSignups.id, signupId));

  // Send team notification for the user
  await sendTeamNotification(normalizedEmail, signupId);

  return {
    status: "subscribed_new",
    message: WAITLIST_MESSAGES.subscribed_new,
  };
}
