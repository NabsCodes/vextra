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
    maxWidth: "560px",
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
    margin: "0 0 8px",
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
  card: {
    border: "1px solid #e7ebed",
    borderRadius: "10px",
    backgroundColor: "#fbfcfc",
    padding: "16px",
  },
  rowLabel: {
    margin: "0 0 4px",
    color: "#7a8a90",
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
  rowValue: {
    margin: "0 0 14px",
    color: "#1f2c31",
    fontSize: "14px",
    lineHeight: "1.55",
    fontWeight: "600",
  },
  message: {
    margin: "0",
    color: "#1f2c31",
    fontSize: "14px",
    lineHeight: "1.7",
    whiteSpace: "pre-wrap" as const,
  },
  footer: {
    textAlign: "center" as const,
    backgroundColor: "#f8f8f6",
    padding: "22px 24px",
  },
  footerText: {
    margin: "0",
    color: "#88959b",
    fontSize: "11px",
    lineHeight: "1.5",
  },
  brandLink: {
    color: "#14b8a6",
    textDecoration: "none",
  },
};

function EnquiryTeamEmail({
  name,
  email,
  company,
  serviceLabel,
  serviceDetails,
  message,
}: {
  name: string;
  email: string;
  company: string;
  serviceLabel: string;
  serviceDetails: string;
  message: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        Project enquiry from {name}: {serviceLabel}
      </Preview>
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
              New Project Enquiry
            </Heading>
            <Text style={styles.text}>
              Someone wants to talk about a project or partnership with Vextra.
            </Text>

            <Section style={styles.card}>
              <Text style={styles.rowLabel}>Name</Text>
              <Text style={styles.rowValue}>{name}</Text>

              <Text style={styles.rowLabel}>Email</Text>
              <Text style={styles.rowValue}>{email}</Text>

              <Text style={styles.rowLabel}>Company</Text>
              <Text style={styles.rowValue}>{company || "Not provided"}</Text>

              <Text style={styles.rowLabel}>Service Interest</Text>
              <Text style={styles.rowValue}>{serviceLabel}</Text>

              {serviceDetails ? (
                <>
                  <Text style={styles.rowLabel}>What they need</Text>
                  <Text style={styles.rowValue}>{serviceDetails}</Text>
                </>
              ) : null}

              <Text style={styles.rowLabel}>Message</Text>
              <Text style={styles.message}>{message}</Text>
            </Section>

            <Hr style={{ borderColor: "#e7ebed", margin: "24px 0 12px" }} />
            <Text style={{ ...styles.text, margin: 0, fontSize: "12px" }}>
              Reply directly to {email} to continue the conversation.
            </Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              <Link href="https://vextralimited.com" style={styles.brandLink}>
                vextralimited.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export async function getEnquiryTeamEmailHtml(props: {
  name: string;
  email: string;
  company: string;
  serviceLabel: string;
  serviceDetails: string;
  message: string;
}) {
  return render(<EnquiryTeamEmail {...props} />);
}
