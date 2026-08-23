import { Text } from "@react-email/components";
import { EmailDetailSection } from "@/lib/email/components/email-detail-section";
import { EmailShell } from "@/lib/email/components/email-shell";
import { emailType } from "@/lib/email/styles";

export type TeamNotificationEmailProps = {
  subscriberEmail: string;
  signedUpAtLocal: string;
  signedUpAtUtc: string;
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
        Someone just joined the website launch list.
      </Text>
      <EmailDetailSection
        fields={[
          {
            label: "Email",
            value: props.subscriberEmail,
            href: `mailto:${props.subscriberEmail}`,
          },
          {
            label: "Signed up",
            value: props.signedUpAtLocal,
          },
          {
            label: "UTC",
            value: props.signedUpAtUtc,
          },
        ]}
      />
    </EmailShell>
  );
}
