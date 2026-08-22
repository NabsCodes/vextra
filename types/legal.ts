export type LegalTextPart =
  string | { type: "link"; label: string; href: string } | { type: "break" };

export type LegalBlock =
  | { type: "paragraph"; parts: LegalTextPart[] }
  | { type: "subheading"; text: string }
  | {
      type: "list";
      items: Array<{ label?: string; parts: LegalTextPart[] }>;
    };

export type LegalSectionContent = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: LegalSectionContent[];
};
