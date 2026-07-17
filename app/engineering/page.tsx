import type { Metadata } from "next";
import { FullBleedImage } from "@/components/FullBleedImage";
import { MotionReveal } from "@/components/MotionReveal";
import { NewTabLink } from "@/components/NewTabLink";
import { SectionHeading } from "@/components/SectionHeading";
import { assetPath } from "@/content/assets";
import { engineeringPrinciples, engineeringProfile } from "@/content/engineering";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Software engineering, architecture, technical leadership, and professional experience by Aleksandar Tomovski.",
};

const engineeringImage = {
  src: assetPath("/images/engineering/systems-placeholder.png"),
  alt: "Replaceable engineering visual placeholder for system structure and product thinking.",
  width: 1600,
  height: 1000,
};

export default function EngineeringPage() {
  return (
    <>
      <section className="page-hero content-band engineering-hero">
        <div>
          <p className="eyebrow">Engineering</p>
          <h1>{engineeringProfile.subtitle}</h1>
          <p>{engineeringProfile.summary}</p>
        </div>
        <FullBleedImage image={engineeringImage} priority />
      </section>

      <section className="content-band">
        <SectionHeading
          eyebrow="How Aleksandar thinks"
          title="The work is technical, but the judgment is human."
          intro="This page keeps the private projects private and organizes the public engineering story around decisions, ownership, and trust."
        />
        <div className="principle-grid">
          {engineeringPrinciples.map((principle) => (
            <MotionReveal className="principle-item" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="content-band practice-section">
        <SectionHeading
          eyebrow="Practice"
          title="Capabilities that support the thinking."
        />
        <ul className="practice-list">
          {engineeringProfile.practices.map((practice) => (
            <li key={practice}>{practice}</li>
          ))}
        </ul>
      </section>

      <section className="content-band two-column-band">
        <MotionReveal>
          <p className="eyebrow">Professional profile</p>
          <h2>Public engineering story first. Personal products later.</h2>
        </MotionReveal>
        <MotionReveal className="prose-column">
          <p>{engineeringProfile.publicNote}</p>
          <p>
            The strongest public signal right now is the professional profile:
            senior .NET work, architecture, technical leadership, mentoring,
            delivery, production ownership, and the reputation of someone who
            gets difficult work across the line.
          </p>
          <div className="resource-links">
            <NewTabLink href={engineeringProfile.profileUrl}>
              View LinkedIn profile
            </NewTabLink>
          </div>
        </MotionReveal>
      </section>
    </>
  );
}
