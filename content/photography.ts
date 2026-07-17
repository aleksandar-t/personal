import { assetPath } from "./assets";
import type { PhotoCollection } from "./types";

export const photographyIntro = {
  title: "Photography",
  subtitle: "From mountain light to theatre silence: attention before spectacle.",
  description:
    "Aleksandar Tomovski is a Skopje-born software engineer, photographer, and filmmaker. His public photography biography traces the work from nature and mountain heights into city streets and everyday life, then toward women, ballet, theatre, costumes, acting, dance, and the delicate space where light, shadow, gesture, and vulnerability meet. The public record also includes international salons and group exhibitions, FIAP / IAAP distinctions, Master of Photography recognition through the National Photo Union of Macedonia, jury work, and solo exhibitions such as Behind the Curtains, 1001 Stories, Above the Curtains, Beyond Body, and Naked. You. Me.",
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
    artworks: [
      {
        title: "Curtain Edge",
        src: assetPath("/images/photography/behind-the-curtains/curtain-edge.png"),
        alt: "Quiet backstage moment near the edge of a theatre curtain.",
        width: 900,
        height: 1300,
        caption: "A body waits near the edge of visibility, before the room asks for performance.",
        metadata: "Backstage study",
      },
      {
        title: "Powder Before Light",
        src: assetPath("/images/photography/behind-the-curtains/powder-before-light.png"),
        alt: "Preparation moment shaped by powder, hands, and theatre light.",
        width: 1400,
        height: 950,
        caption: "Preparation becomes its own choreography before the audience sees anything.",
        metadata: "Preparation study",
      },
      {
        title: "Rehearsal Shadow",
        src: assetPath("/images/photography/behind-the-curtains/rehearsal-shadow.png"),
        alt: "Monochrome rehearsal movement study in shadow.",
        width: 1200,
        height: 1200,
        caption: "Movement remains visible even when the body is half-withheld by shadow.",
      },
      {
        title: "Waiting Room",
        src: assetPath("/images/photography/behind-the-curtains/waiting-room.png"),
        alt: "Quiet backstage waiting moment before entrance.",
        width: 1300,
        height: 900,
        caption: "The silence before entrance is not empty; it is concentration becoming form.",
      },
    ],
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
    artworks: [
      {
        title: "Room Study",
        src: assetPath("/images/photography/naked-you-me/room-study.png"),
        alt: "Gallery room study for Naked. You. Me.",
        width: 1400,
        height: 900,
        caption: "A room becomes part of the body of work: distance, silence, and gaze held together.",
      },
      {
        title: "Distance",
        src: assetPath("/images/photography/naked-you-me/distance.png"),
        alt: "Relational photographic study about distance and attention.",
        width: 1100,
        height: 1100,
        caption: "The space between author and subject is not erased; it is made visible.",
      },
      {
        title: "Surface",
        src: assetPath("/images/photography/naked-you-me/surface.png"),
        alt: "Vertical intimate photographic study of surface, light, and vulnerability.",
        width: 900,
        height: 1250,
        caption: "Light touches the surface without pretending to own what it reveals.",
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
      alt: "Theatre and ballerina visual atmosphere for the Paradox collection.",
      width: 1600,
      height: 950,
    },
    artworks: [
      {
        title: "Black Swan Study",
        src: assetPath("/images/photography/paradox/black-swan-study.png"),
        alt: "Ballerina study connected to The Paradox.",
        width: 900,
        height: 1300,
        caption: "A single figure carries the weight of a full room that is no longer there.",
      },
      {
        title: "Empty Theatre",
        src: assetPath("/images/photography/paradox/empty-theatre.png"),
        alt: "Empty theatre study about absence and observation.",
        width: 1500,
        height: 900,
        caption: "Theatre does not become neutral when the audience disappears.",
      },
      {
        title: "After Movement",
        src: assetPath("/images/photography/paradox/after-movement.png"),
        alt: "Motion study after a dance performance.",
        width: 1200,
        height: 1100,
        caption: "The visible gesture ends; the question it leaves behind keeps moving.",
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
      alt: "Visual atmosphere for selected photographic works.",
      width: 1550,
      height: 1050,
    },
    artworks: [
      {
        title: "Window",
        src: assetPath("/images/photography/selected-works/window.png"),
        alt: "Quiet selected work with a window motif.",
        width: 1300,
        height: 900,
        caption: "A threshold where looking out and looking inward briefly become the same action.",
      },
      {
        title: "Figure",
        src: assetPath("/images/photography/selected-works/figure.png"),
        alt: "Vertical selected work centered on a human figure.",
        width: 900,
        height: 1300,
        caption: "The figure is less an object than a pressure inside the frame.",
      },
      {
        title: "Threshold",
        src: assetPath("/images/photography/selected-works/threshold.png"),
        alt: "Square selected work about threshold and transition.",
        width: 1100,
        height: 1100,
        caption: "A small border becomes enough to change the emotional weather of the image.",
      },
    ],
  },
];

export function getPhotoCollection(slug: string) {
  return photoCollections.find((collection) => collection.slug === slug);
}
