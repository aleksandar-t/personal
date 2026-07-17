import type { Metadata } from "next";
import { EditorialQuote } from "@/components/EditorialQuote";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutCopy, signatureQuote } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Aleksandar Tomovski and the relationship between technical and artistic thinking.",
};

const identityThreads = [
  {
    title: "Software engineer",
    text: "Senior .NET/backend engineering, APIs, architecture, data, messaging, integrations, cloud delivery, code review, mentoring, and production ownership across systems that have to keep working after the meeting ends.",
  },
  {
    title: "Photography",
    text: "A practice that started with mountain light and city streets, then moved closer to ballet, theatre, costume, the body, vulnerability, and the quiet seconds before performance becomes public.",
  },
  {
    title: "Filmmaker",
    text: "Director of The Paradox, a one-minute Black Swan short built around performance, absence, recording, and whether a gesture changes when the live witness disappears.",
  },
  {
    title: "Writing",
    text: "Author of One Honest Conversation, a philosophical dialogue that starts with a photon and moves through consciousness, AI, art, relationships, perception, and lived experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero content-band about-hero">
        <div>
          <p className="eyebrow">About</p>
          <h1>I am Aleksandar Tomovski.</h1>
        </div>
        <div className="prose-column">
          {aboutCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="content-band">
        <SectionHeading
          eyebrow="What that means in practice"
          title="Software systems, stage light, moving image, and language."
        />
        <div className="identity-list">
          {identityThreads.map((thread) => (
            <MotionReveal className="identity-thread" key={thread.title}>
              <h3>{thread.title}</h3>
              <p>{thread.text}</p>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="content-band two-column-band">
        <MotionReveal>
          <p className="eyebrow">How I work with people</p>
          <h2>Own the problem, explain the trade-offs, keep the deadline visible.</h2>
        </MotionReveal>
        <MotionReveal className="prose-column">
          <p>
            My public professional recommendations repeatedly point to
            dedication, professionalism, depth of knowledge, deadline
            orientation, analytical capability, energy, and a natural ability
            to manage people.
          </p>
          <p>
            That matters because engineering is rarely just code. It is also
            communication, judgment, trust, and leaving the next person with a
            system they can actually understand.
          </p>
        </MotionReveal>
      </section>

      <section className="quote-band">
        <EditorialQuote lines={signatureQuote} />
      </section>
    </>
  );
}
