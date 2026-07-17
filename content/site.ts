import { assetPath } from "./assets";
import type { HomeWorld, NavItem, VisualAsset } from "./types";

export const siteIdentity = {
  name: "Aleksandar Tomovski",
  roleLine: "Software Engineer. Photographer. Filmmaker. Writer.",
  statement:
    "One way of seeing, expressed through structure, light, movement, and language.",
  alternate:
    "I build systems, frame stages, make films about observation, and write into the questions.",
  principle: "Never sacrifice curiosity for cleverness.",
  closing: "Until the next state.",
  heroImage: {
    src: assetPath("/images/profile/aleksandar-hero-placeholder.png"),
    alt: "Replaceable hero image placeholder for one of Aleksandar Tomovski's strongest photographs.",
    width: 1800,
    height: 1200,
    caption: "Replace this with a strong personal photograph.",
  } satisfies VisualAsset,
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Photography", href: "/photography" },
  { label: "Film", href: "/film" },
  { label: "Writing", href: "/writing" },
  { label: "Engineering", href: "/engineering" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const manifesto = [
  "The same question keeps changing costume.",
  "In engineering, it becomes structure: systems that can be understood, owned, and changed without drama.",
  "In photography, it becomes attention: mountain height, city street, backstage silence, body, gesture, light.",
  "In film, it becomes time: a performer alone on a dark stage, and the strange pressure of an absent observer.",
  "In writing, it becomes dialogue: a photon, a human mind, an artificial one, and the humility to keep asking.",
  "The medium changes. The relationship remains.",
];

export const signatureQuote = [
  "I arrived with the intuition.",
  "The conversation helped me recognize its shape.",
  "The sentence simply emerged.",
];

export const homeWorlds: HomeWorld[] = [
  {
    key: "photography",
    title: "Photography",
    eyebrow: "Light and removal",
    href: "/photography",
    description:
      "Photography that began in nature and mountain heights, moved through city streets, and now often returns to women, ballet, theatre, costume, light, and the intimacy before performance.",
    featured: "Featured collection: Behind the Curtains",
    image: {
      src: assetPath("/images/photography/behind-the-curtains/hero.png"),
      alt: "Replaceable placeholder for the Behind the Curtains photography collection.",
      width: 1600,
      height: 1100,
    },
  },
  {
    key: "film",
    title: "Film",
    eyebrow: "Movement and absence",
    href: "/film",
    description:
      "The Paradox and related video work use dance, theatre, rehearsal, and empty rooms to ask what changes when art is made without a witness.",
    featured: "Featured film: The Paradox",
    image: {
      src: assetPath("/images/film/the-paradox/hero.png"),
      alt: "Replaceable cinematic placeholder for The Paradox.",
      width: 1600,
      height: 900,
    },
  },
  {
    key: "writing",
    title: "Writing",
    eyebrow: "Language and questions",
    href: "/writing",
    description:
      "One Honest Conversation begins with a photon and becomes a philosophical dialogue about consciousness, AI, art, relationships, perception, and experience.",
    featured: "Featured book: One Honest Conversation",
    image: {
      src: assetPath("/images/book/one-honest-conversation.png"),
      alt: "Replaceable book image placeholder for One Honest Conversation.",
      width: 1400,
      height: 1000,
    },
  },
  {
    key: "engineering",
    title: "Engineering",
    eyebrow: "Structure and change",
    href: "/engineering",
    description:
      "Public professional work in software architecture, technical leadership, mentoring, and systems that have to become clearer under pressure.",
    featured: "Public profile: LinkedIn",
    image: {
      src: assetPath("/images/engineering/systems-placeholder.png"),
      alt: "Replaceable engineering visual placeholder for systems architecture.",
      width: 1600,
      height: 1000,
    },
  },
];

export const aboutCopy = [
  "I am Aleksandar Tomovski: born in Skopje, a software engineer by profession, and a photographer, filmmaker, and writer in the remaining hours where the same questions refuse to clock out.",
  "The public biography looks like several lives placed side by side. From inside it, the pattern is simpler: observe carefully, remove noise, recognize structure, and make enough room for an honest relationship to appear.",
  "In engineering, that relationship is between people, systems, pressure, and change. In photography, it is between body, light, shadow, vulnerability, and the person allowed to remain human inside the frame. In film, it is between performance and witness. In writing, it is between curiosity and the answer that has not earned the right to arrive yet.",
];
