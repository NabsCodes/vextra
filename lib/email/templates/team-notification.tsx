import { Text } from "@react-email/components";
import { EmailDetailSection } from "@/lib/email/components/email-detail-section";
import { EmailShell } from "@/lib/email/components/email-shell";
import { emailType } from "@/lib/email/styles";

export type TeamNotificationEmailProps = {
  subscriberEmail: string;
  signupId: string;
  signedUpAtLocal: string;
  signedUpAtUtc: string;
  signedUpAtIso: string;
  teamTimeZone: string;
};

export function TeamNotificationEmailTemplate(
  props: TeamNotificationEmailProps,
) {
  return (
    <EmailShell
      preview={`New launch list signup: ${props.subscriberEmail}`}
      eyebrow="Launch list"
      audience="internal"
    >
      <Text className="email-display" style={emailType.display}>
        New launch-list signup
      </Text>
      <Text style={emailType.lead}>
        A new subscriber joined the Vextra website launch list.
      </Text>
      <EmailDetailSection
        fields={[
          {
            label: "Subscriber email",
            value: props.subscriberEmail,
            href: `mailto:${props.subscriberEmail}`,
          },
          {
            label: `Signed up (${props.teamTimeZone})`,
            value: props.signedUpAtLocal,
          },
          { label: "Signed up (UTC)", value: props.signedUpAtUtc },
          { label: "Timestamp ISO", value: props.signedUpAtIso },
          { label: "Signup ID", value: props.signupId },
        ]}
      />
    </EmailShell>
  );
}
