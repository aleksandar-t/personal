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
    src: assetPath("/images/profile/aleksandar-hero.png"),
    alt: "Atmospheric visual introducing Aleksandar Tomovski's personal universe.",
    width: 1800,
    height: 1200,
    caption: "A personal universe built from code, light, movement, and language.",
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
      "Photography that began in nature and mountain heights, moved through city streets, and found its strongest pulse around ballet, theatre, body, costume, shadow, and the charged intimacy before performance.",
    featured: "Featured collection: Behind the Curtains",
    image: {
      src: assetPath("/images/photography/behind-the-curtains/hero.png"),
      alt: "Visual atmosphere for the Behind the Curtains photography collection.",
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
      "The Paradox and related video work use dance, theatre, rehearsal rooms, and the missing audience to ask what changes when art is made without a witness.",
    featured: "Featured film: The Paradox",
    image: {
      src: assetPath("/images/film/the-paradox/hero.png"),
      alt: "Cinematic visual atmosphere for The Paradox.",
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
      "One Honest Conversation begins with a photon and opens into a philosophical dialogue about consciousness, AI, art, relationships, perception, and experience.",
    featured: "Featured book: One Honest Conversation",
    image: {
      src: assetPath("/images/book/one-honest-conversation.png"),
      alt: "Book artwork for One Honest Conversation.",
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
      "Public professional work in software architecture, senior .NET engineering, technical leadership, mentoring, and systems that have to become clearer under pressure.",
    featured: "Public profile: LinkedIn",
    image: {
      src: assetPath("/images/engineering/systems-architecture.png"),
      alt: "Abstract systems visual representing software architecture and product thinking.",
      width: 1600,
      height: 1000,
    },
  },
];

export const aboutCopy = [
  "I was born in 1985 in Skopje. From the outside, my public life can look like several separate tracks placed next to each other: software engineering, photography, film, and writing. From the inside, it is one habit repeated in different mediums: look carefully, remove noise, understand the structure, and keep the human part visible.",
  "Professionally, I am a software engineer with more than 15 years of senior .NET/backend experience. The work has meant C#/.NET services, APIs, data and messaging systems, integrations, cloud delivery, production ownership, technical leadership, mentoring, code review, deadlines, and the responsibility of making systems easier for other people to understand and change.",
  "Photography began for me in nature and mountain heights, moved through city streets, and eventually settled near ballet, theatre, costume, body, shadow, vulnerability, and the private seconds around performance. That work has grown into international salons and exhibitions, Master IAAP / MIAAP, SIAAP, AFIAP, Master of Photography recognition, more than 200 awards, jury work, and solo exhibitions including Behind the Curtains, 1001 Stories, Above the Curtains, Beyond Body, and Naked. You. Me.",
  "The Paradox carries the same attention into film: a one-minute Black Swan piece about performance, absence, and whether recording is the same as witnessing. One Honest Conversation carries it into writing: a dialogue that begins with a photon and expands toward consciousness, AI, art, relationships, perception, and experience.",
];
