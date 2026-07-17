import type { Metadata } from "next";
import { FullBleedImage } from "@/components/FullBleedImage";
import { MotionReveal } from "@/components/MotionReveal";
import { SmartLink } from "@/components/SmartLink";
import { SectionHeading } from "@/components/SectionHeading";
import { assetPath } from "@/content/assets";
import { engineeringPrinciples, engineeringProfile } from "@/content/engineering";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Software engineering, architecture, technical leadership, and professional experience by Aleksandar Tomovski.",
};

const engineeringImage = {
  src: assetPath("/images/engineering/systems-architecture.png"),
  alt: "Abstract systems visual for software architecture, pressure, and product change.",
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
          intro="The public engineering story is organized around decisions, ownership, delivery, and trust — not a premature product catalogue."
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
          <h2>A public profile built on calm ownership under pressure.</h2>
        </MotionReveal>
        <MotionReveal className="prose-column">
          <p>{engineeringProfile.publicNote}</p>
          <p>
            The strongest public signal is the professional pattern: senior .NET
            work, architecture, technical leadership, mentoring, production
            ownership, and recommendations that point to dedication, analytical
            depth, deadline awareness, and the ability to get difficult work
            across the line.
          </p>
          <div className="resource-links">
            <SmartLink href={engineeringProfile.profileUrl}>
              View LinkedIn profile
            </SmartLink>
          </div>
        </MotionReveal>
      </section>
    </>
  );
}
