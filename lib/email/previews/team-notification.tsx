import { TeamNotificationEmailTemplate } from "@/lib/email/templates/team-notification";

export default function TeamNotificationEmailPreview() {
  return (
    <TeamNotificationEmailTemplate
      subscriberEmail="ada@example.com"
      signedUpAtLocal="August 21, 2026 at 4:30 PM GMT+1"
      signedUpAtUtc="August 21, 2026 at 3:30 PM UTC"
    />
  );
}
