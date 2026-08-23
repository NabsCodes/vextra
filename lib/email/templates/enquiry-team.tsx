import { Text } from "@react-email/components";
import { EmailDetailSection } from "@/lib/email/components/email-detail-section";
import { EmailShell } from "@/lib/email/components/email-shell";
import { emailType } from "@/lib/email/styles";

export type EnquiryTeamEmailProps = {
  name: string;
  email: string;
  company: string;
  serviceLabel: string;
  serviceDetails: string;
  message: string;
};

export function EnquiryTeamEmailTemplate(props: EnquiryTeamEmailProps) {
  return (
    <EmailShell
      preview={`Project enquiry from ${props.name}: ${props.serviceLabel}`}
      eyebrow="Project enquiry"
      audience="internal"
    >
      <Text className="email-display" style={emailType.display}>
        New project enquiry
      </Text>
      <Text style={emailType.lead}>
        {`${props.name} wants to talk about a project with Vextra.`}
      </Text>
      <EmailDetailSection
        fields={[
          { label: "Name", value: props.name },
          {
            label: "Email",
            value: props.email,
            href: `mailto:${props.email}`,
          },
          ...(props.company.trim()
            ? [{ label: "Company", value: props.company.trim() }]
            : []),
          { label: "Interest", value: props.serviceLabel },
          ...(props.serviceDetails.trim()
            ? [{ label: "What they need", value: props.serviceDetails.trim() }]
            : []),
          { label: "Message", value: props.message },
        ]}
      />
    </EmailShell>
  );
}
