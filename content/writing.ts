import { assetPath } from "./assets";
import type { BookPart, VisualAsset } from "./types";

export const book = {
  title: "One Honest Conversation",
  subtitle: "A Journey Through Curiosity, Relationship, and Experience.",
  hero: {
    src: assetPath("/images/book/one-honest-conversation.png"),
    alt: "Book cover for One Honest Conversation.",
    width: 1400,
    height: 1000,
  } satisfies VisualAsset,
  synopsis: [
    "One Honest Conversation begins with a photon and slowly opens into science, consciousness, relationships, art, silence, memory, attention, and the strange beauty of being alive.",
    "Written as a philosophical dialogue between a human mind and an artificial one, the book follows curiosity as it moves from physics and perception toward meaning, creativity, the self, and the space between observer and subject.",
    "The published paperback runs 504 pages and is presented publicly as a journey through curiosity, relationship, and experience.",
  ],
  parts: [
    {
      label: "Part I",
      title: "Removing Filters",
      description:
        "A movement toward clearer seeing, where certainty is treated carefully and curiosity is allowed to stay alive.",
    },
    {
      label: "Part II",
      title: "Relationships",
      description:
        "A study of how meaning appears between things: observer and observed, mountain and climber, human and artificial thought.",
    },
    {
      label: "Part III",
      title: "Experience",
      description:
        "A return to the lived texture of perception, language, art, humility, and the limits of explanation.",
    },
  ] satisfies BookPart[],
  selectedLines: [
    "Never sacrifice curiosity for cleverness.",
    "Nothing meaningful can be forced.",
    "I arrived with the intuition. The conversation helped me recognize its shape. The sentence simply emerged.",
    "The mountain is shared. The relationship isn't.",
  ],
  behindTheBook:
    "The Third Mind remains an important concept inside the work, but the public book is presented as One Honest Conversation: a record of inquiry, relation, and emergence.",
  authorNote:
    "The book is not trying to win an argument. It is trying to remain honest inside a question long enough for the question to become more precise.",
  links: [
    {
      label: "Official book site",
      href: "https://onehonestconversation.com/",
    },
    {
      label: "Paperback on Amazon",
      href: "https://www.amazon.com/One-Honest-Conversation-Relationship-Experience/dp/B0H854WQY2/ref=tmm_pap_swatch_0",
    },
    {
      label: "Amazon editions",
      href: "https://www.amazon.com/One-Honest-Conversation-Relationship-Experience/dp/B0H854WQY2",
    },
  ],
};
