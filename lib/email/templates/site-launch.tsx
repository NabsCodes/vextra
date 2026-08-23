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

export function SiteLaunchEmailTemplate() {
  return (
    <EmailShell
      preview="The fuller Vextra site is live. Explore the studio, follow what comes next, and start a project."
      audience="subscriber"
    >
      <Section style={styles.launchBand}>
        <Text style={styles.launchEyebrow}>
          <span style={styles.launchMark}>01</span>
          <span className="email-launch-line" style={styles.launchLine}>
            &nbsp;
          </span>
          Now live
        </Text>
      </Section>

      <Text className="email-display" style={emailType.display}>
        The fuller site is live.
      </Text>
      <Text style={emailType.lead}>
        Thanks for waiting. The fuller Vextra site is ready: a studio home built
        to carry work, team, projects, careers, blogs, and much more as we keep
        publishing.
      </Text>
      <Text style={{ ...emailType.text, margin: "0 0 24px" }}>
        Explore what is live today, then tell us what you need built next.
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
  launchBand: {
    margin: "0 0 18px",
    padding: "0 0 14px",
    borderBottom: `1px solid ${emailColors.border}`,
  },
  launchEyebrow: {
    margin: "0",
    color: emailColors.muted,
    fontFamily: emailSansFamily,
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.12em",
    lineHeight: "1.4",
    textTransform: "uppercase" as const,
  },
  launchMark: {
    color: emailColors.accent,
    marginRight: "10px",
  },
  launchLine: {
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
