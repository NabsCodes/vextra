import { createHash } from "crypto";
import { Resend } from "resend";
import { getEnquiryTeamEmailHtml } from "@/lib/emails/enquiry-team-email";
import {
  ENQUIRY_SERVICE_LABELS,
  type EnquiryService,
} from "@/lib/enquiry/options";
import { getRequiredEnv } from "@/lib/server-env";

const resend = new Resend(getRequiredEnv("RESEND_API_KEY"));
const TEAM_NOTIFICATION_EMAIL =
  process.env.ENQUIRY_NOTIFICATION_EMAIL ||
  process.env.WAITLIST_NOTIFICATION_EMAIL ||
  "info@vextralimited.com";

function buildIdempotencyKey(namespace: string, value: string): string {
  const hash = createHash("sha256").update(value).digest("hex");
  return `${namespace}-${hash}`;
}

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
  const idempotencyKey = buildIdempotencyKey(
    "vextra-project-enquiry",
    `${email}|${service}|${serviceDetails}|${message.slice(0, 120)}|${submittedAt.slice(0, 13)}`,
  );

  const html = await getEnquiryTeamEmailHtml({
    name,
    email,
    company,
    serviceLabel,
    serviceDetails: service === "other" ? serviceDetails : "",
    message,
  });

  const result = await resend.emails.send(
    {
      from: "Vextra Enquiries <hello@vextralimited.com>",
      to: TEAM_NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `Project enquiry: ${serviceLabel} — ${name}`,
      html,
    },
    { idempotencyKey },
  );

  if (result.error) {
    console.error("[Enquiry Service] Team email failed:", result.error);
    return { ok: false };
  }

  return { ok: true };
}
