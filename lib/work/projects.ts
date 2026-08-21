export type SelectedProject = {
  id: string;
  coordinate: string;
  category: string;
  name: string;
  description: string;
  surface: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  placeholder: boolean;
};

/**
 * Selected work for the teaser homepage.
 * Screenshots under public/work/ are development placeholders until
 * approved UI captures are provided. Do not treat placeholder art as live work.
 */
export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    id: "wardwise",
    coordinate: "01",
    category: "Civic System / Web Platform",
    name: "WardWise",
    description:
      "A ward-level operations platform for public teams coordinating local work, visibility, and accountability across communities.",
    surface: "Web Platform",
    role: "Product design and full-stack engineering",
    imageSrc: "/work/wardwise-placeholder.svg",
    imageAlt:
      "WardWise interface placeholder — replace with an approved UI capture before publish",
    placeholder: true,
  },
  {
    id: "zamfara-bpp",
    coordinate: "02",
    category: "Public Procurement / Operations",
    name: "Zamfara BPP",
    description:
      "Contractor and MDA portals for state procurement operations — registration, applications, and day-to-day workflow.",
    surface: "Portal System",
    role: "Product engineering for contractor and MDA portals",
    imageSrc: "/work/zamfara-bpp-placeholder.svg",
    imageAlt:
      "Zamfara BPP interface placeholder — replace with an approved UI capture before publish",
    placeholder: true,
  },
  {
    id: "iproduce-africa",
    coordinate: "03",
    category: "Marketplace / Operations",
    name: "iProduce Africa",
    description:
      "A marketplace platform connecting African producers with buyers and the operational tools needed for real-world trade.",
    surface: "Web Platform",
    role: "Design and engineering for the producer marketplace",
    imageSrc: "/work/iproduce-placeholder.svg",
    imageAlt:
      "iProduce Africa interface placeholder — replace with an approved UI capture before publish",
    placeholder: true,
  },
];
