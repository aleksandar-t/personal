import { assetPath } from "./assets";
import type { FilmProject, VideoProject } from "./types";

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
  links: [
    {
      label: "Watch on YouTube",
      href: "https://www.youtube.com/watch?v=_2E8QuuNgIE",
      note: "The Paradox | One Minute Short Film",
    },
    {
      label: "IMDb",
      href: "https://www.imdb.com/title/tt14683450/?ref_=fn_i_35",
      note: "IMDb title page",
    },
    {
      label: "More video projects",
      href: "https://www.youtube.com/@aleksandartomovski7829",
      note: "Aleksandar Tomovski on YouTube",
    },
  ],
  video: {
    title: "The Paradox | One Minute Short Film",
    watchUrl: "https://www.youtube.com/watch?v=_2E8QuuNgIE",
    embedUrl: "https://www.youtube-nocookie.com/embed/_2E8QuuNgIE",
  },
  synopsis: [
    "A ballerina performs as the Black Swan in an empty theatre, her breath and movement held inside the quiet of an absent audience.",
    "The film connects a present-day stage reality, artists performing and rehearsing in empty theatres, with the older philosophical problem of existence without observation.",
    "It does not reduce that absence to loneliness or spectacle. It asks what kind of relationship exists between the artist, the act, the observer, and the absence of observation.",
  ],
  directorNote: [
    "The Paradox is not only asking whether art exists without an audience.",
    "It is exploring what changes when the work is made, witnessed, missed, remembered, or left in the room after the room has gone quiet.",
  ],
  credits: [
    { role: "Director", name: "Aleksandar Tomovski" },
    { role: "Performer", name: "Marija Kichevska" },
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
  review: {
    reviewer: "Sayantan Mukherjee",
    rating: "8/10",
    source: "The Paradox: A Review",
    pullQuote:
      "sharp, simple and direct",
    summary: [
      "The review frames The Paradox through the familiar question of whether a falling tree makes a sound when no one is there to hear it, then connects that thought experiment to observation, perception, and quantum behavior.",
      "It notes the monochrome palette, the empty theatre, the Black Swan performance, and the way the film turns a recording device into an insufficient substitute for a true observer.",
      "The review also reads the film through the Covid-era reality of stage artists rehearsing and performing without live audiences.",
    ],
  },
  festivalStatus:
    "Festival selections, screenings, and additional public reviews will be added here when they are public.",
};

export const futureFilms = [
  "These works move between film, documentary observation, dance, theatre, photography, and performance.",
  "Future short films, experiments, studies, and cinematic notes can grow from the same place as photography and writing.",
];

export const otherVideoProjects: VideoProject[] = [
  {
    title: "Photo Presentation | Malinski Photo Festival",
    slug: "malinski-photo-festival",
    year: "2023",
    format: "Photography presentation",
    role: "Photography / presentation",
    href: "https://www.youtube.com/watch?v=dF0OhZA8keM",
    description:
      "A festival presentation bringing together three solo photography exhibitions: Behind the Curtains, 1001 Story, and Above the Curtains, shown for Malinski Photo Festival in Kumanovo.",
  },
  {
    title: "One Thousand and One Stories",
    slug: "one-thousand-and-one-stories",
    year: "2021",
    format: "Performance rehearsal film",
    role: "Video by Aleksandar Tomovski",
    href: "https://www.youtube.com/watch?v=GBiEgVPMW9Q",
    description:
      "A rehearsal document around Scheherazade by Nikolai Rimsky-Korsakov, performed by the orchestra of the Macedonian National Opera and Ballet.",
  },
  {
    title: "AURORA — The Making Of Bolero Ballet",
    slug: "aurora-making-of-bolero-ballet",
    year: "2020",
    format: "Documentary / behind the scenes",
    role: "Video and photographic documentation",
    href: "https://www.youtube.com/watch?v=Ru6ehcSnBAA",
    description:
      "A behind-the-curtains documentary about the making of Bolero by the Macedonian National Opera and Ballet during pandemic restrictions: heat, masks, rehearsal, devotion, and resilience.",
  },
  {
    title: "METANOIA",
    slug: "metanoia",
    year: "2020",
    format: "Dance portrait",
    role: "Video portrait",
    href: "https://www.youtube.com/watch?v=s8YKL5Kyj78",
    description:
      "A compact performer story about transformation, acceptance, determination, and the emotional force behind a dancer's movement.",
  },
];
