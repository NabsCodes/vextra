import {
  Button,
  Column,
  Hr,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { siteContent, socialLinks } from "@/content/site";
import { EmailShell } from "@/lib/email/components/email-shell";
import { emailColors, emailSansFamily, emailType } from "@/lib/email/styles";

const SITE_URL = "https://vextralimited.com";
const CONTACT_URL = `${SITE_URL}/contact`;

export function GeneralEmailTemplate() {
  return (
    <EmailShell
      preview="Update from Vextra Limited."
      audience="subscriber"
      disclaimer="You received this email from Vextra Limited."
    >
      <Section style={styles.eyebrowBand}>
        <Text style={styles.eyebrow}>
          <span style={styles.eyebrowMark}>01</span>
          <span className="email-launch-line" style={styles.eyebrowLine}>
            &nbsp;
          </span>
          Studio update
        </Text>
      </Section>

      <Text className="email-display" style={emailType.display}>
        An update from Vextra
      </Text>
      <Text style={emailType.lead}>
        Thanks for staying connected with the studio. Here is the latest from
        our team.
      </Text>
      <Text style={{ ...emailType.text, margin: "0 0 24px" }}>
        We will keep sharing new work, studio news, and what we are building
        next. If you have a project in mind, we would like to hear from you.
      </Text>

      <Section style={styles.ctaPanel}>
        <Row>
          <Column
            className="email-cta-column email-cta-column-first"
            style={styles.ctaColumnLeft}
          >
            <Button
              className="email-cta-button"
              href={SITE_URL}
              style={styles.primaryButton}
            >
              Visit the site
            </Button>
            <div className="email-cta-spacer" style={styles.ctaSpacer}>
              &nbsp;
            </div>
          </Column>
          <Column
            className="email-cta-column email-cta-column-last"
            style={styles.ctaColumnRight}
          >
            <Button
              className="email-cta-button"
              href={CONTACT_URL}
              style={styles.secondaryButton}
            >
              {siteContent.navigation.projectCta}
            </Button>
          </Column>
        </Row>
      </Section>

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
  eyebrowBand: {
    margin: "0 0 18px",
    padding: "0 0 14px",
    borderBottom: `1px solid ${emailColors.border}`,
  },
  eyebrow: {
    margin: "0",
    color: emailColors.muted,
    fontFamily: emailSansFamily,
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.12em",
    lineHeight: "1.4",
    textTransform: "uppercase" as const,
  },
  eyebrowMark: {
    color: emailColors.accent,
    marginRight: "10px",
  },
  eyebrowLine: {
    display: "inline-block",
    width: "28px",
    borderBottom: `2px solid ${emailColors.accent}`,
    verticalAlign: "middle",
    marginRight: "10px",
    lineHeight: "1px",
    fontSize: "1px",
  },
  ctaPanel: {
    padding: "4px 0 0",
  },
  ctaSpacer: {
    display: "none",
    height: "0",
    lineHeight: "0",
    fontSize: "1px",
  },
  ctaColumnLeft: {
    width: "50%",
    paddingRight: "6px",
    verticalAlign: "top" as const,
  },
  ctaColumnRight: {
    width: "50%",
    paddingLeft: "6px",
    verticalAlign: "top" as const,
  },
  primaryButton: {
    display: "inline-block",
    boxSizing: "border-box" as const,
    width: "100%",
    margin: "0",
    padding: "13px 14px",
    backgroundColor: emailColors.accent,
    color: emailColors.charcoal,
    borderRadius: "8px",
    fontFamily: emailSansFamily,
    fontSize: "13px",
    fontWeight: "600",
    lineHeight: "1.2",
    textAlign: "center" as const,
    textDecoration: "none",
  },
  secondaryButton: {
    display: "inline-block",
    boxSizing: "border-box" as const,
    width: "100%",
    margin: "0",
    padding: "13px 14px",
    backgroundColor: emailColors.charcoal,
    color: "#ffffff",
    borderRadius: "8px",
    fontFamily: emailSansFamily,
    fontSize: "13px",
    fontWeight: "600",
    lineHeight: "1.2",
    textAlign: "center" as const,
    textDecoration: "none",
  },
  divider: {
    borderColor: emailColors.border,
    borderTop: `1px solid ${emailColors.border}`,
    margin: "24px 0 2px",
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
