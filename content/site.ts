import { assetPath } from "./assets";
import type { HomeWorld, NavItem, VisualAsset } from "./types";

export const siteIdentity = {
  name: "Aleksandar Tomovski",
  roleLine: "Software Engineer. Photographer. Filmmaker. Writer.",
  statement:
    "One way of seeing, expressed through code, light, movement, and language.",
  alternate:
    "I build systems, frame moments, make films, and write questions into books.",
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
  "I have never experienced these disciplines as separate worlds.",
  "Engineering taught me to look for structure.",
  "Photography taught me to remove distraction.",
  "Film taught me to shape experience through time.",
  "Writing taught me to remain inside a question.",
  "Different instruments. The same way of seeing.",
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
      "Artistic photography rooted in observation, intimacy, theatre, silence, and the exact moment where distraction falls away.",
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
      "Short cinematic work that treats time, performance, and observation as living relationships rather than answers.",
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
      "A philosophical book shaped through curiosity, relationship, experience, and the unusual meeting of human and artificial thought.",
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
      "Software architecture, technical leadership, mentoring, and systems built to become clearer under pressure.",
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
  "I am Aleksandar Tomovski, a software engineer, photographer, filmmaker, and writer from Skopje.",
  "The disciplines look different from the outside. From where I stand, they are variations of the same work: observing carefully, removing noise, recognizing structure, and creating enough space for something honest to emerge.",
  "In engineering, that means systems that can be understood, owned, and changed. In photography, it means letting the frame become quiet enough for the relationship to appear. In film, it means shaping attention through time. In writing, it means remaining faithful to the question before rushing toward the clever answer.",
];
