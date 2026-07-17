import { assetPath } from "./assets";
import type { PhotoCollection } from "./types";

export const photographyIntro = {
  title: "Photography",
  subtitle: "From mountain light to theatre silence: attention before spectacle.",
  description:
    "Aleksandar's photography began in mountain light and city streets, then moved toward ballet, theatre, costume, body, shadow, and the charged quiet before performance.",
  links: [
    {
      label: "Instagram portfolio",
      href: "https://www.instagram.com/tomovski.photography/",
    },
    {
      label: "IAAP profile",
      href: "https://theiaap.com/profile/7373/",
    },
  ],
};

export const photoCollections: PhotoCollection[] = [
  {
    slug: "behind-the-curtains",
    title: "Behind the Curtains",
    subtitle: "Rehearsal, powder, curtains, movement, and the quiet around performance.",
    context:
      "The collection is intimate, theatrical, and observational. It belongs to the world behind ballet and opera performance: preparation, fatigue, powder, rehearsal, touch, and the instant before the curtain turns a body into spectacle.",
    intro: [
      "Behind the Curtains looks toward the spaces around performance: preparation, touch, fatigue, powder, waiting, and the charged quiet before a body enters the visible world.",
      "The work is less interested in spectacle than in the fragile relationship between presence and readiness.",
    ],
    hero: {
      src: assetPath("/images/photography/behind-the-curtains/hero.png"),
      alt: "Backstage atmosphere for the Behind the Curtains collection.",
      width: 1600,
      height: 1100,
    },
    artworks: [],
  },
  {
    slug: "naked-you-me",
    title: "Naked. You. Me.",
    subtitle: "An exhibition about exposure, relation, vulnerability, and the honesty of looking.",
    intro: [
      "Naked. You. Me. is presented as an intimate exhibition about the female form, grace, vulnerability, light, shadow, emotion, and the private dialogue between author and subject.",
      "The work asks the viewer to stay with exposure as relation, not display: the body as presence, the room as witness, and light as the line between privacy and revelation.",
    ],
    hero: {
      src: assetPath("/images/photography/naked-you-me/hero.png"),
      alt: "Intimate visual atmosphere for the Naked. You. Me. exhibition.",
      width: 1500,
      height: 1000,
    },
    artworks: [],
  },
  {
    slug: "paradox",
    title: "Paradox",
    subtitle: "Observation, performance, and the question of the absent audience.",
    intro: [
      "Paradox connects the photographic and cinematic sides of Aleksandar's work through the body of a ballerina, a dark stage, and the pressure of an absent audience.",
      "It holds theatre, performance, and the observer in a single unresolved relationship: if no one receives the gesture, where does the gesture live?",
    ],
    hero: {
      src: assetPath("/images/photography/paradox/hero.png"),
      alt: "Theatre and ballerina visual atmosphere for the Paradox collection.",
      width: 1600,
      height: 950,
    },
    artworks: [],
  },
  {
    slug: "selected-works",
    title: "Selected Works",
    subtitle: "Mountain light, street fragments, portraits, stage silence, and necessary accidents.",
    intro: [
      "Selected Works gathers photographs connected by attention rather than category: mountain, street, portrait, stage, silence, and the occasional accident that becomes necessary.",
      "The photographs move between formats and atmospheres without asking for a single costume.",
    ],
    hero: {
      src: assetPath("/images/photography/selected-works/hero.png"),
      alt: "Visual atmosphere for selected photographic works.",
      width: 1550,
      height: 1050,
    },
    artworks: [],
  },
];

export function getPhotoCollection(slug: string) {
  return photoCollections.find((collection) => collection.slug === slug);
}
