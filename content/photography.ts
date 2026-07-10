import { assetPath } from "./assets";
import type { PhotoCollection } from "./types";

export const photographyIntro = {
  title: "Photography",
  subtitle: "Art for art's sake, with attention before spectacle.",
  description:
    "Aleksandar Tomovski is a photographer and filmmaker from Skopje, North Macedonia. His public photography profile presents him as an Artist at FIAP, Master at IAAP, Master of Photography at NPUM, and an internationally published, award-winning photographer. The work moves between theatre, portraiture, staged absence, and quiet observation.",
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
      "The collection is intimate, theatrical, and observational. It carries a subtle historical awareness of backstage painting and dance studies without treating reference as imitation.",
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
    subtitle: "An exhibition about exposure, relation, and the honesty of looking.",
    intro: [
      "Naked. You. Me. is presented here as an exhibition space rather than a resume line.",
      "The page is ready for final curatorial text, installation views, and selected works.",
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
      "Paradox connects the photographic and cinematic sides of Aleksandar's work.",
      "It holds the body, the theatre, and the observer in a single unresolved relationship.",
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
      "Selected Works is a home for images that do not need to announce a series before they can speak.",
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
