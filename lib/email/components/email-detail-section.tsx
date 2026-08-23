import { Link, Section, Text } from "@react-email/components";
import { emailColors, emailSansFamily } from "@/lib/email/styles";

export type EmailDetailField = {
  label: string;
  value: string;
  href?: string;
};

export function EmailDetailSection({ fields }: { fields: EmailDetailField[] }) {
  return (
    <Section style={styles.card}>
      {fields.map((field) => (
        <Section
          key={field.label}
          className="email-detail-row"
          style={styles.row}
        >
          <Text style={styles.label}>{field.label}</Text>
          {field.href ? (
            <Link href={field.href} style={styles.link}>
              {field.value}
            </Link>
          ) : (
            <Text style={styles.value}>{field.value}</Text>
          )}
        </Section>
      ))}
    </Section>
  );
}

const styles = {
  card: {
    overflow: "hidden" as const,
    backgroundColor: emailColors.field,
    border: `1px solid ${emailColors.border}`,
    borderRadius: "10px",
  },
  row: {
    padding: "10px 12px",
    borderBottom: `1px solid ${emailColors.border}`,
  },
  label: {
    margin: "0 0 3px",
    color: emailColors.muted,
    fontFamily: emailSansFamily,
    fontSize: "10px",
    fontWeight: "600",
    letterSpacing: "0.08em",
    lineHeight: "1.3",
    textTransform: "uppercase" as const,
  },
  value: {
    margin: "0",
    color: emailColors.charcoal,
    fontFamily: emailSansFamily,
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "1.5",
    whiteSpace: "pre-wrap" as const,
    wordBreak: "break-word" as const,
  },
  link: {
    color: emailColors.link,
    fontFamily: emailSansFamily,
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "1.5",
    textDecoration: "underline",
    wordBreak: "break-word" as const,
  },
};
