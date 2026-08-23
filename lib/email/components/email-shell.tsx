import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";
import { siteContent } from "@/content/site";
import {
  emailColors,
  emailLayout,
  emailMobileStyles,
  emailSansFamily,
  PREVIEW_PADDING,
} from "@/lib/email/styles";

const SITE_URL = "https://vextralimited.com";
/** White wordmark — only on charcoal / dark surfaces. */
const LOGO_ON_DARK = `${SITE_URL}/secondary-logo-02.png`;
/** Charcoal wordmark — only on white / light surfaces. */
const LOGO_ON_LIGHT = `${SITE_URL}/full-color-logo.png`;

export function EmailShell({
  preview,
  eyebrow,
  audience,
  children,
}: {
  preview: string;
  eyebrow: string;
  audience: "internal" | "subscriber";
  children: ReactNode;
}) {
  const isInternal = audience === "internal";

  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <style>{emailMobileStyles}</style>
      </Head>
      <Preview>
        {preview}
        {PREVIEW_PADDING}
      </Preview>
      <Body style={emailLayout.canvas}>
        <Container style={emailLayout.card}>
          {isInternal ? (
            <>
              <Section style={styles.lightLogoBand} align="center">
                <Img
                  src={LOGO_ON_LIGHT}
                  alt={siteContent.company.name}
                  width="140"
                  height="38"
                  className="email-logo"
                  style={styles.logo}
                />
              </Section>
              <Section style={styles.internalBand}>
                <Text style={styles.internalEyebrow}>{eyebrow}</Text>
              </Section>
            </>
          ) : (
            <Section style={styles.subscriberHeader} align="center">
              <Img
                src={LOGO_ON_DARK}
                alt={siteContent.company.name}
                width="140"
                height="38"
                className="email-logo"
                style={styles.logo}
              />
              <Text style={styles.tagline}>{siteContent.company.tagline}</Text>
            </Section>
          )}

          <Section className="email-body" style={emailLayout.body}>
            {children}
          </Section>

          <Section style={isInternal ? styles.internalFooter : styles.footer}>
            <Text style={styles.footerText}>
              {siteContent.company.name} ·{" "}
              <Link href={SITE_URL} style={styles.footerLink}>
                vextralimited.com
              </Link>
            </Text>
            <Text style={styles.footerSubtle}>
              {isInternal
                ? "Internal notification · Do not forward externally"
                : `© ${new Date().getFullYear()} ${siteContent.company.name}. ${siteContent.company.tagline}.`}
            </Text>
          </Section>
        </Container>

        {!isInternal ? (
          <Text style={styles.disclaimer}>
            You received this email because you signed up for the Vextra website
            launch list.
          </Text>
        ) : null}
      </Body>
    </Html>
  );
}

const styles = {
  lightLogoBand: {
    padding: "20px 22px 18px",
    textAlign: "center" as const,
    backgroundColor: emailColors.card,
    borderBottom: `1px solid ${emailColors.border}`,
  },
  subscriberHeader: {
    padding: "28px 24px",
    textAlign: "center" as const,
    backgroundColor: emailColors.charcoal,
  },
  logo: { display: "block", margin: "0 auto" },
  tagline: {
    margin: "10px 0 0",
    color: "rgba(255,255,255,0.65)",
    fontFamily: emailSansFamily,
    fontSize: "11px",
    letterSpacing: "0.18em",
    lineHeight: "1.4",
    textTransform: "uppercase" as const,
  },
  internalBand: {
    padding: "10px 20px 11px",
    backgroundColor: emailColors.field,
    borderBottom: `1px solid ${emailColors.border}`,
  },
  internalEyebrow: {
    margin: "0",
    paddingLeft: "9px",
    color: emailColors.muted,
    borderLeft: `2px solid ${emailColors.accent}`,
    fontFamily: emailSansFamily,
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.08em",
    lineHeight: "1.4",
    textTransform: "uppercase" as const,
  },
  footer: {
    padding: "20px 22px 22px",
    textAlign: "center" as const,
    backgroundColor: emailColors.charcoal,
  },
  internalFooter: {
    padding: "14px 20px 16px",
    textAlign: "center" as const,
    backgroundColor: emailColors.field,
    borderTop: `1px solid ${emailColors.border}`,
  },
  footerText: {
    margin: "0 0 5px",
    color: emailColors.muted,
    fontFamily: emailSansFamily,
    fontSize: "12px",
    lineHeight: "1.5",
  },
  footerSubtle: {
    margin: "0",
    color: emailColors.subtle,
    fontFamily: emailSansFamily,
    fontSize: "11px",
    lineHeight: "1.5",
  },
  footerLink: { color: emailColors.accent, textDecoration: "none" },
  disclaimer: {
    margin: "18px 0 0",
    textAlign: "center" as const,
    color: emailColors.subtle,
    fontFamily: emailSansFamily,
    fontSize: "11px",
    lineHeight: "1.5",
  },
};
