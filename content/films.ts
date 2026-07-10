import { assetPath } from "./assets";
import type { FilmProject } from "./types";

export const primaryFilm: FilmProject = {
  title: "The Paradox",
  slug: "the-paradox",
  logline:
    "A one-minute film exploring observation, performance, existence, and the relationship between an artist and an absent audience.",
  hero: {
    src: assetPath("/images/film/the-paradox/hero.png"),
    alt: "Replaceable cinematic hero placeholder for The Paradox.",
    width: 1600,
    height: 900,
  },
  videoPlaceholder:
    "Video embed placeholder. Replace this area with the final hosted film, trailer, or private screener embed.",
  synopsis: [
    "A ballerina performs as the Black Swan in an empty theatre.",
    "The film does not reduce that absence to loneliness or spectacle. It asks what kind of relationship exists between the artist, the act, the observer, and the absence of observation.",
  ],
  directorNote: [
    "The Paradox is not only asking whether art exists without an audience.",
    "It is exploring what changes when the work is made, witnessed, missed, remembered, or left in the room after the room has gone quiet.",
  ],
  credits: [
    { role: "Director", name: "Aleksandar Tomovski" },
    { role: "Performer", name: "To be added", placeholder: true },
    { role: "Cinematography", name: "To be added", placeholder: true },
    { role: "Music / Sound", name: "To be added", placeholder: true },
    { role: "Additional credits", name: "To be added", placeholder: true },
  ],
  stills: [
    {
      src: assetPath("/images/film/the-paradox/empty-theatre.png"),
      alt: "Replaceable still placeholder showing an empty theatre.",
      width: 1500,
      height: 900,
    },
    {
      src: assetPath("/images/film/the-paradox/black-swan.png"),
      alt: "Replaceable still placeholder for the Black Swan performance.",
      width: 1100,
      height: 1400,
    },
    {
      src: assetPath("/images/film/the-paradox/stage-shadow.png"),
      alt: "Replaceable still placeholder for movement and shadow on stage.",
      width: 1400,
      height: 950,
    },
  ],
  festivalStatus:
    "Festival selections, screenings, reviews, and awards will be added here when they are public.",
};

export const futureFilms = [
  "A quiet placeholder for future short films.",
  "A place for experiments, studies, and cinematic notes that grow out of photography and writing.",
];
