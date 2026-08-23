import { Hr, Link, Section, Text } from "@react-email/components";
import { socialLinks } from "@/content/site";
import { EmailShell } from "@/lib/email/components/email-shell";
import { emailColors, emailSansFamily, emailType } from "@/lib/email/styles";

export function WelcomeEmailTemplate() {
  return (
    <EmailShell
      preview="You're on the Vextra website launch list."
      eyebrow="You're on the list"
      audience="subscriber"
    >
      <Text className="email-display" style={emailType.display}>
        You&apos;re on the list
      </Text>
      <Text style={emailType.lead}>
        Thanks for joining the Vextra website launch list. We&apos;ll send one
        email when the fuller site is live.
      </Text>
      <Text style={emailType.text}>
        In the meantime, follow us for updates and behind-the-scenes work.
      </Text>

      <Hr style={styles.divider} />

      <Section style={styles.socialsWrap}>
        {socialLinks.map((social, index) => (
          <span key={social.href}>
            {index > 0 ? <span style={styles.dot}>•</span> : null}
            <Link href={social.href} style={styles.socialLink}>
              {social.label}
            </Link>
          </span>
        ))}
      </Section>
    </EmailShell>
  );
}

const styles = {
  divider: {
    borderColor: emailColors.border,
    borderTop: `1px solid ${emailColors.border}`,
    margin: "8px 0 6px",
  },
  socialsWrap: {
    textAlign: "center" as const,
    padding: "16px 0 0",
  },
  socialLink: {
    color: emailColors.charcoal,
    fontFamily: emailSansFamily,
    fontSize: "13px",
    margin: "0 8px",
    textDecoration: "none",
  },
  dot: {
    color: emailColors.subtle,
    fontFamily: emailSansFamily,
    fontSize: "13px",
  },
};
