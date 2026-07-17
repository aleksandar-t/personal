import { assetPath } from "./assets";
import type { FilmProject, VideoProject } from "./types";

export const primaryFilm: FilmProject = {
  title: "The Paradox",
  slug: "the-paradox",
  logline:
    "A one-minute Black Swan performance in an empty theatre, shaped around the paradox of whether an artwork fully exists when no one is there to witness it.",
  hero: {
    src: assetPath("/images/film/the-paradox/hero.png"),
    alt: "Cinematic theatre atmosphere for The Paradox.",
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
    "Using the idea of observed reality as a cinematic pressure point, The Paradox places a ballerina alone on a dark stage in a Black Swan variation.",
    "The film connects that philosophical problem to the pandemic-era reality of stage artists rehearsing and performing without live audiences: art being made in rooms where the usual witness has disappeared.",
    "It does not reduce absence to loneliness or spectacle. It asks a cleaner and more dangerous question: if a perfect minute happens in space and time and no observer receives it, where does it live?",
  ],
  directorNote: [
    "The Paradox begins where stage art and quantum metaphor touch: the observer changes the room, and absence changes it again.",
    "The camera records the performance, but the film keeps asking whether recording is the same as witnessing.",
    "That uncertainty is the point.",
  ],
  credits: [
    { role: "Director", name: "Aleksandar Tomovski" },
    { role: "Performer", name: "Marija Kichevska" },
    { role: "Voice-over", name: "Andrew Cook" },
  ],
  stills: [],
  review: {
    reviewer: "Sayantan Mukherjee",
    rating: "8/10",
    source: "The Paradox: A Review",
    pullQuote:
      "sharp, simple and direct",
    summary: [
      "The review frames The Paradox through the familiar question of whether a falling tree makes a sound when no one is there to hear it, then connects that thought experiment to observation, perception, and quantum behavior.",
      "Public review material notes the monochrome palette, the empty theatre, the Black Swan performance, Marija Kichevska's movement, and the way the film turns a recording device into an insufficient substitute for a true observer.",
      "The review also reads the film through the Covid-era reality of stage artists rehearsing and performing without live audiences.",
    ],
  },
  festivalStatus:
    "Public IMDb festival pages list awards and recognitions for The Paradox including Best Micro Short Drama at Berlin Flash Film Festival, Super Short Film at Art Film Awards, Best Dance Performance at Stockholm City Film Festival, One Minute Film at Calcutta International Cult Film Festival, and additional one-minute / super-short recognitions.",
};

export const filmDirection = [
  "These works move between film, documentary observation, dance, theatre, photography, and performance.",
  "The continuing direction is not volume for its own sake, but a sharper language for rooms, bodies, rehearsal, witness, and absence.",
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
    title: "AURORA - The Making Of Bolero Ballet",
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
