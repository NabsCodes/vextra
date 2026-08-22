import "server-only";

import { sendEmail } from "@/lib/email/delivery";
import { buildEnquiryTeamEmail } from "@/lib/email/enquiry-team";
import { buildEmailIdempotencyKey } from "@/lib/email/resend";
import {
  ENQUIRY_SERVICE_LABELS,
  type EnquiryService,
} from "@/lib/enquiry/options";
const TEAM_NOTIFICATION_EMAIL =
  process.env.ENQUIRY_NOTIFICATION_EMAIL ||
  process.env.WAITLIST_NOTIFICATION_EMAIL ||
  "info@vextralimited.com";

export async function submitProjectEnquiry({
  name,
  email,
  company,
  service,
  serviceDetails,
  message,
}: {
  name: string;
  email: string;
  company: string;
  service: EnquiryService;
  serviceDetails: string;
  message: string;
}): Promise<{ ok: true } | { ok: false }> {
  const serviceLabel = ENQUIRY_SERVICE_LABELS[service];
  const submittedAt = new Date().toISOString();
  const idempotencyKey = buildEmailIdempotencyKey(
    "vextra-project-enquiry",
    `${email}|${service}|${serviceDetails}|${message.slice(0, 120)}|${submittedAt.slice(0, 13)}`,
  );

  const emailContent = await buildEnquiryTeamEmail({
    name,
    email,
    company,
    serviceLabel,
    serviceDetails: service === "other" ? serviceDetails : "",
    message,
  });

  const result = await sendEmail(
    {
      from: "Vextra Enquiries <hello@vextralimited.com>",
      to: TEAM_NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `Project enquiry: ${serviceLabel} — ${name}`,
      html: emailContent.html,
      text: emailContent.text,
    },
    { idempotencyKey },
  );

  if (result.error) {
    console.error("[Enquiry Service] Team email failed:", result.error);
    return { ok: false };
  }

  return { ok: true };
}
