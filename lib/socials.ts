export type SocialLink = {
  key: "linkedin" | "x" | "instagram";
  label: "LinkedIn" | "X" | "Instagram";
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/company/vextrahq",
  },
  { key: "x", label: "X", href: "https://x.com/vextrahq" },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/vextrahq",
  },
];
