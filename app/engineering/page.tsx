import type { Metadata } from "next";
import { FullBleedImage } from "@/components/FullBleedImage";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechnicalProjectSummary } from "@/components/TechnicalProjectSummary";
import {
  engineeringPrinciples,
  engineeringProfile,
  technicalProjects,
} from "@/content/engineering";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Software engineering, architecture, leadership, and product work by Aleksandar Tomovski.",
};

const engineeringImage = {
  src: "/images/engineering/systems-placeholder.png",
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
          intro="This page avoids the keyword wall by organizing engineering around decisions and ownership."
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

      <section className="content-band">
        <SectionHeading
          eyebrow="Selected products"
          title="Personal products and foundations"
          intro="Each project is described by problem, product idea, technical direction, and architectural principle."
        />
        <div className="technical-projects">
          {technicalProjects.map((project) => (
            <TechnicalProjectSummary key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
