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
        Someone wants to discuss a project or partnership with Vextra.
      </Text>
      <EmailDetailSection
        fields={[
          { label: "Name", value: props.name },
          {
            label: "Email",
            value: props.email,
            href: `mailto:${props.email}`,
          },
          { label: "Company", value: props.company || "Not provided" },
          { label: "Service interest", value: props.serviceLabel },
          ...(props.serviceDetails
            ? [{ label: "What they need", value: props.serviceDetails }]
            : []),
          { label: "Project details", value: props.message },
        ]}
      />
    </EmailShell>
  );
}
