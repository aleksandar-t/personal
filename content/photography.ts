import { assetPath } from "./assets";
import type { PhotoCollection } from "./types";

export const photographyIntro = {
  title: "Photography",
  subtitle: "From mountain light to theatre silence: attention before spectacle.",
  description:
    "Aleksandar Tomovski is a Skopje-born software engineer, photographer, and filmmaker. His public photography biography traces the work from nature and mountain heights into city streets and everyday life, then toward women, ballet, theatre, costumes, acting, dance, and the delicate space where light, shadow, gesture, and vulnerability meet. Public profiles also present him as an Artist at FIAP, Master at IAAP, Master of Photography at NPUM, and an internationally published, award-winning photographer.",
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
      alt: "Replaceable hero placeholder for the Behind the Curtains collection.",
      width: 1600,
      height: 1100,
    },
    artworks: [
      {
        title: "Curtain Edge",
        src: assetPath("/images/photography/behind-the-curtains/curtain-edge.png"),
        alt: "Replaceable portrait placeholder showing a quiet backstage curtain moment.",
        width: 900,
        height: 1300,
        caption: "A placeholder for a vertical backstage photograph.",
        metadata: "Replace with title, year, medium, and print information.",
      },
      {
        title: "Powder Before Light",
        src: assetPath("/images/photography/behind-the-curtains/powder-before-light.png"),
        alt: "Replaceable landscape placeholder for a preparation moment before performance.",
        width: 1400,
        height: 950,
        caption: "A placeholder for preparation, powder, and light.",
        metadata: "Replace with artwork metadata when the image is added.",
      },
      {
        title: "Rehearsal Shadow",
        src: assetPath("/images/photography/behind-the-curtains/rehearsal-shadow.png"),
        alt: "Replaceable monochrome placeholder for a rehearsal movement study.",
        width: 1200,
        height: 1200,
        caption: "A placeholder for movement observed from the edge.",
      },
      {
        title: "Waiting Room",
        src: assetPath("/images/photography/behind-the-curtains/waiting-room.png"),
        alt: "Replaceable image placeholder for a quiet backstage waiting moment.",
        width: 1300,
        height: 900,
        caption: "A placeholder for the silence before entrance.",
      },
    ],
  },
  {
    slug: "naked-you-me",
    title: "Naked. You. Me.",
    subtitle: "An exhibition about exposure, relation, vulnerability, and the honesty of looking.",
    intro: [
      "Naked. You. Me. is presented as an intimate exhibition about the female form, grace, vulnerability, light, shadow, emotion, and the private dialogue between author and subject.",
      "The page can later hold installation views, final curatorial text, and selected works without turning the project into a blunt resume entry.",
    ],
    hero: {
      src: assetPath("/images/photography/naked-you-me/hero.png"),
      alt: "Replaceable hero placeholder for the Naked. You. Me. exhibition.",
      width: 1500,
      height: 1000,
    },
    artworks: [
      {
        title: "Room Study",
        src: assetPath("/images/photography/naked-you-me/room-study.png"),
        alt: "Replaceable gallery placeholder for Naked. You. Me.",
        width: 1400,
        height: 900,
        caption: "A placeholder for an exhibition work or installation view.",
      },
      {
        title: "Distance",
        src: assetPath("/images/photography/naked-you-me/distance.png"),
        alt: "Replaceable square placeholder for a relational photographic study.",
        width: 1100,
        height: 1100,
        caption: "A placeholder for a work about relation and distance.",
      },
      {
        title: "Surface",
        src: assetPath("/images/photography/naked-you-me/surface.png"),
        alt: "Replaceable vertical placeholder for an intimate photographic work.",
        width: 900,
        height: 1250,
        caption: "A placeholder for an intimate vertical work.",
      },
    ],
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
      alt: "Replaceable hero placeholder for the Paradox photographic collection.",
      width: 1600,
      height: 950,
    },
    artworks: [
      {
        title: "Black Swan Study",
        src: assetPath("/images/photography/paradox/black-swan-study.png"),
        alt: "Replaceable placeholder for a ballerina study connected to The Paradox.",
        width: 900,
        height: 1300,
        caption: "A placeholder for a still or photographic study.",
      },
      {
        title: "Empty Theatre",
        src: assetPath("/images/photography/paradox/empty-theatre.png"),
        alt: "Replaceable placeholder for an empty theatre photograph.",
        width: 1500,
        height: 900,
        caption: "A placeholder for theatre, absence, and observation.",
      },
      {
        title: "After Movement",
        src: assetPath("/images/photography/paradox/after-movement.png"),
        alt: "Replaceable placeholder for motion after a dance performance.",
        width: 1200,
        height: 1100,
        caption: "A placeholder for movement after the visible gesture.",
      },
    ],
  },
  {
    slug: "selected-works",
    title: "Selected Works",
    subtitle: "A flexible space for photographs that belong together by attention, not category.",
    intro: [
      "Selected Works is a home for images that do not need to announce a series before they can speak: mountain, street, portrait, stage, silence, and the occasional accident that becomes necessary.",
      "The structure supports portrait, landscape, square, monochrome, and color images without forcing them into identical boxes.",
    ],
    hero: {
      src: assetPath("/images/photography/selected-works/hero.png"),
      alt: "Replaceable hero placeholder for selected photographic works.",
      width: 1550,
      height: 1050,
    },
    artworks: [
      {
        title: "Window",
        src: assetPath("/images/photography/selected-works/window.png"),
        alt: "Replaceable selected work placeholder with a quiet window motif.",
        width: 1300,
        height: 900,
        caption: "A placeholder for a selected work.",
      },
      {
        title: "Figure",
        src: assetPath("/images/photography/selected-works/figure.png"),
        alt: "Replaceable vertical selected work placeholder.",
        width: 900,
        height: 1300,
        caption: "A placeholder for a vertical selected work.",
      },
      {
        title: "Threshold",
        src: assetPath("/images/photography/selected-works/threshold.png"),
        alt: "Replaceable square selected work placeholder.",
        width: 1100,
        height: 1100,
        caption: "A placeholder for a square selected work.",
      },
    ],
  },
];

export function getPhotoCollection(slug: string) {
  return photoCollections.find((collection) => collection.slug === slug);
}
