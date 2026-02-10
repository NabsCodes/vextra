import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";

const LOGO_URL = "https://vextralimited.com/secondary-logo-02.png";

const styles = {
  body: {
    margin: "0",
    padding: "40px 20px",
    backgroundColor: "#f8f8f6",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    WebkitFontSmoothing: "antialiased" as const,
  },
  container: {
    maxWidth: "520px",
    margin: "0 auto",
    borderRadius: "14px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    border: "1px solid #edf0ee",
  },
  header: {
    backgroundColor: "#2f3a3f",
    textAlign: "center" as const,
    padding: "28px 24px",
  },
  logo: {
    display: "block",
    margin: "0 auto",
  },
  tagline: {
    margin: "10px 0 0",
    fontSize: "11px",
    letterSpacing: "0.18em",
    color: "rgba(255,255,255,0.65)",
    textTransform: "uppercase" as const,
  },
  content: {
    padding: "34px 32px 30px",
  },
  title: {
    margin: "0 0 12px",
    color: "#1f2c31",
    fontSize: "24px",
    lineHeight: "1.25",
    letterSpacing: "-0.02em",
    fontWeight: "700",
  },
  text: {
    margin: "0 0 16px",
    color: "#4d5f66",
    fontSize: "15px",
    lineHeight: "1.7",
  },
  socialsWrap: {
    textAlign: "center" as const,
    padding: "22px 0 6px",
  },
  socialLink: {
    color: "#1f2c31",
    fontSize: "13px",
    margin: "0 8px",
    textDecoration: "none",
  },
  dot: {
    color: "#c6ccd0",
    fontSize: "13px",
  },
  footer: {
    textAlign: "center" as const,
    backgroundColor: "#f8f8f6",
    padding: "22px 24px",
  },
  footerText: {
    margin: "0 0 6px",
    color: "#88959b",
    fontSize: "12px",
    lineHeight: "1.4",
  },
  footerSubtle: {
    margin: "0",
    color: "#88959b",
    fontSize: "11px",
    lineHeight: "1.4",
  },
  brandLink: {
    color: "#14b8a6",
    textDecoration: "none",
  },
};

function WelcomeEmail() {
  return (
    <Html lang="en">
      <Head />
      <Preview>You&apos;re on the Vextra waitlist.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Img
              src={LOGO_URL}
              alt="Vextra Limited"
              width="140"
              height="38"
              style={styles.logo}
            />
            <Text style={styles.tagline}>Built to work</Text>
          </Section>

          <Section style={styles.content}>
            <Heading as="h2" style={styles.title}>
              You&apos;re on the list
            </Heading>
            <Text style={styles.text}>
              Thanks for joining the Vextra waitlist. We&apos;re building
              dependable digital products for Nigeria and Africa, and we&apos;ll
              notify you as soon as we launch.
            </Text>
            <Text style={styles.text}>
              In the meantime, follow us for updates and behind-the-scenes
              content.
            </Text>

            <Hr style={{ borderColor: "#e7ebed", margin: "24px 0 14px" }} />

            <Section style={styles.socialsWrap}>
              <Link
                href="https://linkedin.com/company/vextrahq"
                style={styles.socialLink}
              >
                LinkedIn
              </Link>
              <span style={styles.dot}>•</span>
              <Link href="https://x.com/vextrahq" style={styles.socialLink}>
                X (Twitter)
              </Link>
              <span style={styles.dot}>•</span>
              <Link
                href="https://instagram.com/vextrahq"
                style={styles.socialLink}
              >
                Instagram
              </Link>
            </Section>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>Vextra Limited • Est. 2025</Text>
            <Text style={styles.footerSubtle}>
              <Link href="https://vextralimited.com" style={styles.brandLink}>
                vextralimited.com
              </Link>
            </Text>
          </Section>
        </Container>

        <Text
          style={{
            margin: "18px 0 0",
            textAlign: "center",
            color: "#98a4aa",
            fontSize: "11px",
          }}
        >
          You received this email because you signed up for the Vextra Website
          Waitlist.
        </Text>
      </Body>
    </Html>
  );
}

export async function getWelcomeEmailHtml() {
  return render(<WelcomeEmail />);
}
