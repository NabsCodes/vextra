import { Hr, Link, Section, Text } from "@react-email/components";
import { socialLinks } from "@/content/site";
import { EmailShell } from "@/lib/email/components/email-shell";
import { emailColors, emailSansFamily, emailType } from "@/lib/email/styles";

export function WelcomeEmailTemplate() {
  return (
    <EmailShell
      preview="You're on the Vextra launch list. We'll email you when the fuller site is live."
      audience="subscriber"
    >
      <Text className="email-display" style={emailType.display}>
        You&apos;re on the list.
      </Text>
      <Text style={emailType.lead}>
        Thanks for joining us. We&apos;re building the fuller Vextra studio
        site, and you&apos;ll get one email the moment it launches.
      </Text>
      <Text style={emailType.text}>
        In the meantime, follow along for new work, studio updates, and what
        we&apos;re shipping next.
      </Text>

      <Hr style={styles.divider} />

      <Section style={styles.socialsWrap}>
        <Text style={styles.socialLabel}>Follow along</Text>
        {socialLinks.map((social, index) => (
          <span key={social.href}>
            {index > 0 ? <span style={styles.dot}>·</span> : null}
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
    margin: "4px 0 2px",
  },
  socialsWrap: {
    textAlign: "center" as const,
    padding: "18px 0 2px",
  },
  socialLabel: {
    margin: "0 0 10px",
    color: emailColors.subtle,
    fontFamily: emailSansFamily,
    fontSize: "10px",
    fontWeight: "600",
    letterSpacing: "0.16em",
    lineHeight: "1.4",
    textTransform: "uppercase" as const,
  },
  socialLink: {
    color: emailColors.link,
    fontFamily: emailSansFamily,
    fontSize: "13px",
    fontWeight: "500",
    margin: "0 7px",
    textDecoration: "none",
  },
  dot: {
    color: emailColors.subtle,
    fontFamily: emailSansFamily,
    fontSize: "13px",
  },
};
