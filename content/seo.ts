import { siteContent, socialLinks } from "@/content/site";

export const SITE_URL = "https://vextralimited.com";

export type SeoRoute = {
  path: "/" | "/contact" | "/privacy";
  title: string;
  description: string;
  indexable: true;
  priority: number;
};

export const seoContent = {
  site: {
    name: siteContent.company.name,
    defaultTitle: "Vextra Limited - Built to Work",
    titleTemplate: "%s | Vextra Limited",
    description:
      "Dependable digital products that work. We design and build web apps, mobile apps, and custom software for teams worldwide, with deep execution experience across Nigeria and Africa.",
    socialDescription:
      "Dependable digital products that work. Web apps, mobile apps, and custom software for teams worldwide.",
    twitterCreator: "@vextrahq",
    keywords: [
      "Vextra",
      "Vextra Limited",
      "software development",
      "web app development",
      "mobile app development",
      "custom software",
      "software engineering",
      "api integrations",
      "Nigeria",
      "Africa",
      "digital products",
      "product engineering",
      "technology",
      "global technology partner",
    ],
  },
  routes: {
    home: {
      path: "/",
      title: "Vextra Limited - Built to Work",
      description:
        "Dependable digital products that work. Vextra designs and builds web apps, mobile apps, custom software, and APIs for teams worldwide.",
      indexable: true,
      priority: 1,
    },
    contact: {
      path: "/contact",
      title: "Start a Project",
      description:
        "Start a conversation with Vextra about a web application, mobile product, custom software system, API integration, or partnership.",
      indexable: true,
      priority: 0.8,
    },
    privacy: {
      path: "/privacy",
      title: "Privacy Policy",
      description:
        "Learn how Vextra Limited collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
      indexable: true,
      priority: 0.3,
    },
  } satisfies Record<string, SeoRoute>,
} as const;

export const indexableRoutes = Object.values(seoContent.routes).filter(
  (route) => route.indexable,
);

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteContent.company.name,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      email: siteContent.contact.email,
      telephone: siteContent.contact.phone,
      sameAs: socialLinks.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: siteContent.company.name,
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
  ],
} as const;
