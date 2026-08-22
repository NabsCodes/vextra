export type SocialLink = {
  key: "linkedin" | "x" | "instagram";
  label: "LinkedIn" | "X" | "Instagram";
  href: string;
};

export const siteContent = {
  company: {
    name: "Vextra Limited",
    tagline: "Built to Work",
    established: "2025",
    description:
      "Custom software for teams worldwide, rooted in Nigeria and Africa.",
  },
  contact: {
    email: "info@vextralimited.com",
    emailHref: "mailto:info@vextralimited.com",
    phone: "+234 812 235 3161",
    phoneHref: "tel:+2348122353161",
  },
  navigation: {
    projectCta: "Start a Project",
  },
  footer: {
    projectTitle: "Have a project in mind?",
    projectDescription:
      "If you need dependable execution for a web, mobile, or custom software project, let's talk.",
  },
} as const;

export const socialLinks: SocialLink[] = [
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
