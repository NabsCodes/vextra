import type { SystemPagesContent } from "@/types/system-pages";

export const systemPagesContent: SystemPagesContent = {
  notFound: {
    eyebrow: "404 — Off route",
    title: "This page isn't part of the current build.",
    description:
      "The URL may have moved, been renamed, or never existed. Head home, start a project, or jump to one of the pages we publish today.",
    ctas: [
      { label: "Back to home", href: "/", variant: "primary" },
      {
        label: "Start a Project",
        href: "/contact",
        variant: "secondary",
      },
    ],
    popularEyebrow: "Or browse",
    popularLinks: [
      { label: "Home", href: "/" },
      { label: "Start a Project", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};
