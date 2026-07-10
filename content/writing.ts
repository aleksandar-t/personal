import type { BookPart, VisualAsset } from "./types";

export const book = {
  title: "One Honest Conversation",
  subtitle: "A Journey Through Curiosity, Relationship, and Experience.",
  hero: {
    src: "/images/book/one-honest-conversation.png",
    alt: "Replaceable book cover placeholder for One Honest Conversation.",
    width: 1400,
    height: 1000,
  } satisfies VisualAsset,
  synopsis: [
    "One Honest Conversation is an unusual philosophical journey that emerged from a conversation between one biological and one artificial way of thinking.",
    "It begins with a photon and gradually opens into observation, time, space, gravity, perception, language, consciousness, relationships, experience, meaning, art, artificial intelligence, curiosity, and humility.",
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
      label: "Purchase link placeholder",
      href: "#purchase-placeholder",
      placeholder: true,
    },
    {
      label: "Download / preview placeholder",
      href: "#preview-placeholder",
      placeholder: true,
    },
    {
      label: "Release notification placeholder",
      href: "#release-placeholder",
      placeholder: true,
    },
  ],
};
