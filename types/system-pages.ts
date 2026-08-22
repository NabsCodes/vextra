export type SystemPageCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type SystemPageLink = {
  label: string;
  href: string;
};

export type NotFoundContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctas: readonly SystemPageCta[];
  popularEyebrow: string;
  popularLinks: readonly SystemPageLink[];
};

export type SystemPagesContent = {
  notFound: NotFoundContent;
};
