export const emailColors = {
  canvas: "#f2f5f4",
  card: "#ffffff",
  charcoal: "#2f3a3f",
  body: "#536168",
  muted: "#7d898e",
  subtle: "#9aa3a7",
  border: "#e2e7e5",
  field: "#f7f9f8",
  accent: "#16b8a6",
  accentSoft: "#dff7f2",
  link: "#087f73",
} as const;

export const emailSansFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export const emailLayout = {
  canvas: {
    margin: "0",
    padding: "32px 16px",
    backgroundColor: emailColors.canvas,
    fontFamily: emailSansFamily,
  },
  card: {
    width: "100%",
    maxWidth: "560px",
    margin: "0 auto",
    overflow: "hidden" as const,
    backgroundColor: emailColors.card,
    border: `1px solid ${emailColors.border}`,
    borderRadius: "8px",
  },
  body: {
    padding: "28px 24px 32px",
    backgroundColor: emailColors.card,
  },
} as const;

export const emailType = {
  display: {
    margin: "0 0 8px",
    color: emailColors.charcoal,
    fontFamily: emailSansFamily,
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "-0.025em",
    lineHeight: "1.2",
  },
  lead: {
    margin: "0 0 22px",
    color: emailColors.body,
    fontFamily: emailSansFamily,
    fontSize: "15px",
    lineHeight: "1.65",
  },
  text: {
    margin: "0 0 16px",
    color: emailColors.body,
    fontFamily: emailSansFamily,
    fontSize: "14px",
    lineHeight: "1.65",
  },
} as const;

export const emailMobileStyles = `
  @media only screen and (max-width: 480px) {
    .email-body { padding: 24px 18px 28px !important; }
    .email-logo { width: 132px !important; height: auto !important; }
    .email-display { font-size: 22px !important; line-height: 1.25 !important; }
    .email-detail-row { padding: 9px 10px !important; }
  }
`;

export const PREVIEW_PADDING = "\u00A0".repeat(80);
