export type Service = {
  slug: string;
  name: string;
  description: string;
};

/** Slugs reserve the approved future routes; pages are intentionally not linked yet. */
export const services = [
  {
    slug: "residential-construction-renovation",
    name: "Residential construction & renovation",
    description: "Construction and renovation for residential spaces.",
  },
  {
    slug: "commercial-construction-renovation",
    name: "Commercial construction & renovation",
    description: "Construction and renovation for commercial spaces.",
  },
  {
    slug: "painting",
    name: "Interior & exterior painting",
    description: "Painting for interior and exterior surfaces.",
  },
  {
    slug: "roof-restoration",
    name: "Roof restoration",
    description: "Restoration work for existing roofs.",
  },
  {
    slug: "guttering",
    name: "Guttering",
    description: "Gutter installation, repair and replacement.",
  },
  {
    slug: "tiling",
    name: "Tiling",
    description: "Tiling for kitchens, bathrooms and living areas.",
  },
  {
    slug: "rendering",
    name: "Wall rendering",
    description: "Rendering for wall surfaces.",
  },
  {
    slug: "carpentry",
    name: "General carpentry",
    description: "Carpentry for structural and finishing work.",
  },
] as const satisfies readonly Service[];
