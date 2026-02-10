import { createHash } from "crypto";
import { eq, sql } from "drizzle-orm";
import { Resend } from "resend";
import { db } from "@/db/client";
import { waitlistSignups } from "@/db/schema";
import { getWelcomeEmailHtml } from "@/lib/emails/welcome-email";
import { getRequiredEnv } from "@/lib/server-env";
import type { WaitlistSuccessResult } from "@/lib/waitlist/types";

const resend = new Resend(getRequiredEnv("RESEND_API_KEY"));
const TEAM_NOTIFICATION_EMAIL =
  process.env.WAITLIST_NOTIFICATION_EMAIL || "info@vextralimited.com";

export const WAITLIST_MESSAGES = {
  subscribed_new: "You're on the list. We'll be in touch soon.",
  already_subscribed:
    "You're already on the waitlist. Confirmation was already sent.",
  subscribed_pending_email:
    "You're already on the waitlist. Confirmation email is pending.",
} as const;

// Resend error like for the user
type ResendErrorLike = {
  statusCode?: number | null;
  message?: string | null;
};

// Build idempotency key for the user
function buildIdempotencyKey(namespace: string, value: string): string {
  const hash = createHash("sha256").update(value).digest("hex");
  return `${namespace}-${hash}`;
}

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
    return {
      status: "already_subscribed",
      message: WAITLIST_MESSAGES.already_subscribed,
    };
  }

  if (existingSignup?.welcomeEmailStatus === "failed") {
    // If a previous welcome attempt failed, try once more on duplicate submit.
    const retryResult = await retryFailedWelcomeEmail({
      signupId: existingSignup.id,
      normalizedEmail,
    });

    if (retryResult) {
      return {
        status: "already_subscribed",
        message:
          "You're already on the waitlist. We've re-sent your confirmation email.",
      };
    }
  }

  return {
    status: "subscribed_pending_email",
    message: WAITLIST_MESSAGES.subscribed_pending_email,
  };
}

// Send team notification for the user
async function sendTeamNotification(email: string): Promise<void> {
  const notifyResult = await resend.emails.send({
    from: "Vextra Waitlist <waitlist@vextralimited.com>",
    to: TEAM_NOTIFICATION_EMAIL,
    subject: "New Vextra Waitlist Signup",
    html: `
      <h2>New waitlist signup</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Signed up:</strong> ${new Date().toLocaleString()}</p>
    `,
  });

  if (notifyResult.error) {
    console.error(
      "[Waitlist Service] Team notification failed:",
      notifyResult.error,
    );
  }
}

async function retryFailedWelcomeEmail({
  signupId,
  normalizedEmail,
}: {
  signupId: string;
  normalizedEmail: string;
}): Promise<boolean> {
  const contactResult = await resend.contacts.create({
    email: normalizedEmail,
    unsubscribed: false,
  });

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

  const retryWelcomeResult = await resend.emails.send(
    {
      from: "Vextra <hello@vextralimited.com>",
      to: normalizedEmail,
      subject: "You're on the Vextra waitlist!",
      html: await getWelcomeEmailHtml(),
    },
    {
      idempotencyKey: buildIdempotencyKey(
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
  const contactResult = await resend.contacts.create({
    email: normalizedEmail,
    unsubscribed: false,
  });

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
  const welcomeResult = await resend.emails.send(
    {
      from: "Vextra <hello@vextralimited.com>",
      to: normalizedEmail,
      subject: "You're on the Vextra waitlist!",
      html: await getWelcomeEmailHtml(),
    },
    {
      idempotencyKey: buildIdempotencyKey(
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
    await sendTeamNotification(normalizedEmail);

    return {
      status: "subscribed_pending_email",
      message: "You're on the waitlist. Confirmation email is pending.",
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
  await sendTeamNotification(normalizedEmail);

  return {
    status: "subscribed_new",
    message: WAITLIST_MESSAGES.subscribed_new,
  };
}
