import { TeamNotificationEmailTemplate } from "@/lib/email/templates/team-notification";

export default function TeamNotificationEmailPreview() {
  return (
    <TeamNotificationEmailTemplate
      subscriberEmail="ada@example.com"
      signupId="preview-signup-01"
      signedUpAtLocal="August 21, 2026 at 4:30 PM GMT+1"
      signedUpAtUtc="August 21, 2026 at 3:30 PM UTC"
      signedUpAtIso="2026-08-21T15:30:00.000Z"
      teamTimeZone="Africa/Lagos"
    />
  );
}
