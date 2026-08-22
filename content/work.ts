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
};

/**
 * Selected work for the teaser homepage. Each image is the product's approved
 * public share artwork, not a private product-interface capture.
 */
export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    id: "wardwise",
    coordinate: "01",
    category: "Civic Technology / Field Operations",
    name: "WardWise",
    description:
      "A ward-level operations platform for public teams coordinating local work, visibility, and accountability across communities.",
    surface: "Campaign Operations Platform",
    role: "Product design and full-stack engineering",
    imageSrc: "/work/wardwise-share.jpg",
    imageAlt: "WardWise public share image",
  },
  {
    id: "q-das-global",
    coordinate: "02",
    category: "ICT Services / Corporate Site",
    name: "Q-DAS Global",
    description:
      "A corporate website for an ICT solutions provider, bringing software, managed services, infrastructure, and support into one clear public presence.",
    surface: "Corporate Website",
    role: "Website design and engineering",
    imageSrc: "/work/q-das-share.jpg",
    imageAlt: "Q-DAS Global public share image",
  },
  {
    id: "iproduce-africa",
    coordinate: "03",
    category: "Agribusiness / Marketplace",
    name: "iProduce Africa",
    description:
      "A marketplace platform connecting African producers with buyers and the operational tools needed for real-world trade.",
    surface: "Web Platform",
    role: "Design and engineering for the producer marketplace",
    imageSrc: "/work/iproduce-africa-share.jpg",
    imageAlt: "iProduce Africa public share image",
  },
];
