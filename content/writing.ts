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
    "One Honest Conversation begins with a photon and slowly opens into consciousness, perception, AI, art, relationships, silence, memory, attention, and the strange beauty of being alive.",
    "Written as a philosophical dialogue between a human mind and an artificial one, the book follows curiosity as it moves from physics toward meaning, creativity, the self, and the space between observer and subject.",
    "The public book is presented as a journey through curiosity, relationship, and experience: not a collection of final answers, but a quiet room where better questions can appear.",
  ],
  parts: [
    {
      label: "Part I",
      title: "Removing Filters",
      description:
        "A movement toward clearer seeing, where inherited certainty loosens and curiosity is allowed to stay alive.",
    },
    {
      label: "Part II",
      title: "Relationships",
      description:
        "A study of how meaning appears between things: observer and observed, mountain and climber, human mind and artificial thought.",
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
    "The public book is not presented as a manifesto of answers. It is a record of two forms of thought staying with a question long enough for the question to become more honest.",
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
