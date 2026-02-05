export type SocialLink =
  | {
      key: "linkedin" | "x" | "instagram";
      label: "LinkedIn" | "X" | "Instagram";
      href: string;
      status: "live";
    }
  | {
      key: "whatsapp";
      label: "WhatsApp";
      status: "soon";
    };

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/company/vextrahq",
    status: "live",
  },
  { key: "x", label: "X", href: "https://x.com/vextrahq", status: "live" },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/vextrahq",
    status: "live",
  },
  { key: "whatsapp", label: "WhatsApp", status: "soon" },
];
