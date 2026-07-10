export type VisualAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  note: string;
  placeholder?: boolean;
};

export type WorldKey = "photography" | "film" | "writing" | "engineering";

export type HomeWorld = {
  key: WorldKey;
  title: string;
  eyebrow: string;
  href: string;
  description: string;
  featured: string;
  image: VisualAsset;
};

export type Artwork = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  year?: string;
  medium?: string;
  metadata?: string;
};

export type PhotoCollection = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string[];
  hero: VisualAsset;
  artworks: Artwork[];
  context?: string;
};

export type FilmProject = {
  title: string;
  slug: string;
  logline: string;
  hero: VisualAsset;
  links: Array<{
    label: string;
    href: string;
    note: string;
  }>;
  synopsis: string[];
  directorNote: string[];
  video: {
    title: string;
    watchUrl: string;
    embedUrl: string;
  };
  credits: Array<{
    role: string;
    name: string;
    placeholder?: boolean;
  }>;
  stills: VisualAsset[];
  review: {
    reviewer: string;
    rating: string;
    source: string;
    summary: string[];
    pullQuote: string;
  };
  festivalStatus: string;
};

export type VideoProject = {
  title: string;
  slug: string;
  year: string;
  format: string;
  role: string;
  href: string;
  description: string;
};

export type BookPart = {
  label: string;
  title: string;
  description: string;
};

export type TechnicalProject = {
  name: string;
  summary: string;
  problem: string;
  productIdea: string;
  technicalDirection: string[];
  architecturalPrinciple: string;
  status: string;
  links: Array<{
    label: string;
    href: string;
    placeholder?: boolean;
  }>;
};
