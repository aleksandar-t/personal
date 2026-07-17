import type { Metadata } from "next";
import { EditorialQuote } from "@/components/EditorialQuote";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutCopy, signatureQuote, siteIdentity } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Aleksandar Tomovski and the relationship between technical and artistic thinking.",
};

const identityThreads = [
  {
    title: "Engineering career",
    text: "More than 15 years of software engineering, architecture, leadership, mentoring, and responsibility for systems that need to keep working after the elegant meeting ends.",
  },
  {
    title: "Photography practice",
    text: "A practice that began in nature and mountain heights, moved through city streets, and found a recurring stage in ballet, theatre, portraiture, and the quiet relation inside the frame.",
  },
  {
    title: "Filmmaking",
    text: "A cinematic extension of the same attention: time, movement, performance, absence, and the question of whether a gesture changes when no one is there to receive it.",
  },
  {
    title: "Writing",
    text: "A philosophical dialogue shaped by curiosity, consciousness, AI, art, relationship, experience, and the refusal to reduce a living question to a convenient answer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero content-band about-hero">
        <div>
          <p className="eyebrow">About</p>
          <h1>{siteIdentity.alternate}</h1>
        </div>
        <div className="prose-column">
          {aboutCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="content-band">
        <SectionHeading
          eyebrow="One identity"
          title="Observing carefully, removing noise, recognizing structure."
        />
        <div className="identity-grid">
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
          <p className="eyebrow">Mentoring and leadership</p>
          <h2>Creating enough room for better thinking.</h2>
        </MotionReveal>
        <MotionReveal className="prose-column">
          <p>
            Mentoring, interviewing, code review, and engineering standards are
            not separate from creative work. They are forms of attention toward
            people, decisions, and the conditions under which a team can become
            less noisy, more honest, and more capable of owning the work together.
          </p>
        </MotionReveal>
      </section>

      <section className="quote-band">
        <EditorialQuote lines={signatureQuote} />
      </section>
    </>
  );
}
