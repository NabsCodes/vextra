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

function formatSignedUpAt(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "UTC",
    timeZoneName: "short",
  }).format(date);
}

function formatSignedUpAtForTeam({
  date,
  locale,
  timeZone,
}: {
  date: Date;
  locale: string;
  timeZone: string;
}): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone,
      timeZoneName: "short",
    }).format(date);
  } catch {
    return formatSignedUpAt(date);
  }
}

function TeamNotificationEmail({
  subscriberEmail,
  signupId,
  signedUpAt,
  teamTimeZone,
  teamLocale,
}: {
  subscriberEmail: string;
  signupId: string;
  signedUpAt: Date;
  teamTimeZone: string;
  teamLocale: string;
}) {
  const signedUpAtPretty = formatSignedUpAtForTeam({
    date: signedUpAt,
    locale: teamLocale,
    timeZone: teamTimeZone,
  });
  const signedUpAtUtc = formatSignedUpAt(signedUpAt);
  const signedUpAtIso = signedUpAt.toISOString();

  return (
    <Html lang="en">
      <Head />
      <Preview>New waitlist signup: {subscriberEmail}</Preview>
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
              New Waitlist Signup
            </Heading>
            <Text style={styles.text}>
              A new subscriber has joined the Vextra waitlist.
            </Text>

            <Section style={styles.card}>
              <Text style={styles.rowLabel}>Subscriber Email</Text>
              <Text style={styles.rowValue}>{subscriberEmail}</Text>

              <Text style={styles.rowLabel}>Signed Up ({teamTimeZone})</Text>
              <Text style={styles.rowValue}>{signedUpAtPretty}</Text>

              <Text style={styles.rowLabel}>Signed Up (UTC)</Text>
              <Text style={styles.rowValue}>{signedUpAtUtc}</Text>

              <Text style={styles.rowLabel}>Signup ID</Text>
              <Text style={{ ...styles.rowValue, margin: 0 }}>{signupId}</Text>
            </Section>

            <Hr style={{ borderColor: "#e7ebed", margin: "24px 0 12px" }} />
            <Text style={{ ...styles.text, margin: 0, fontSize: "12px" }}>
              Timestamp ISO: {signedUpAtIso}
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

export async function getTeamNotificationEmailHtml({
  subscriberEmail,
  signupId,
  signedUpAt,
  teamTimeZone,
  teamLocale,
}: {
  subscriberEmail: string;
  signupId: string;
  signedUpAt: Date;
  teamTimeZone: string;
  teamLocale: string;
}) {
  return render(
    <TeamNotificationEmail
      subscriberEmail={subscriberEmail}
      signupId={signupId}
      signedUpAt={signedUpAt}
      teamTimeZone={teamTimeZone}
      teamLocale={teamLocale}
    />,
  );
}
