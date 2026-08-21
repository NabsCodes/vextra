export const ENQUIRY_SERVICE_VALUES = [
  "web_app",
  "mobile_app",
  "custom_software",
  "apis_integrations",
  "partnership",
  "other",
] as const;

export type EnquiryService = (typeof ENQUIRY_SERVICE_VALUES)[number];

export const ENQUIRY_SERVICE_LABELS: Record<EnquiryService, string> = {
  web_app: "Web App",
  mobile_app: "Mobile App",
  custom_software: "Custom Software",
  apis_integrations: "APIs & Integrations",
  partnership: "Partnership",
  other: "Other / Not sure yet",
};

export const ENQUIRY_SERVICE_OPTIONS = ENQUIRY_SERVICE_VALUES.map((value) => ({
  value,
  label: ENQUIRY_SERVICE_LABELS[value],
}));
