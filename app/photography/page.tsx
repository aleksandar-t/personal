import type { Metadata } from "next";
import { FullBleedImage } from "@/components/FullBleedImage";
import { MotionReveal } from "@/components/MotionReveal";
import { SmartLink } from "@/components/SmartLink";
import { SectionHeading } from "@/components/SectionHeading";
import { photographyRecognition } from "@/content/awards";
import { photoCollections, photographyIntro } from "@/content/photography";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Photography collections and artistic context by Aleksandar Tomovski.",
};

export default function PhotographyPage() {
  const featured = photoCollections[0];

  return (
    <>
      <section className="page-hero content-band">
        <div>
          <p className="eyebrow">Photography</p>
          <h1>{photographyIntro.title}</h1>
          <p>{photographyIntro.subtitle}</p>
        </div>
        <div>
          <p>{photographyIntro.description}</p>
          <div className="resource-links">
            {photographyIntro.links.map((link) => (
              <SmartLink key={link.label} href={link.href}>
                {link.label}
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band split-feature">
        <MotionReveal>
          <FullBleedImage image={featured.hero} priority />
        </MotionReveal>
        <MotionReveal className="feature-copy">
          <p className="eyebrow">Featured collection</p>
          <h2>{featured.title}</h2>
          <p>{featured.subtitle}</p>
          <p>{featured.intro[0]}</p>
          <SmartLink className="text-link" href={`/photography/${featured.slug}`}>
            View the collection
          </SmartLink>
        </MotionReveal>
      </section>

      <section className="content-band">
        <SectionHeading
          eyebrow="Collections"
          title="Bodies of work"
          intro="The sections are organized around the real shape of the practice: backstage intimacy, exposed relation, theatre absence, and selected images joined by attention rather than category."
        />
        <div className="collection-list">
          {photoCollections.map((collection) => (
            <MotionReveal className="collection-row" key={collection.slug}>
              <div>
                <p className="eyebrow">{collection.slug.replaceAll("-", " ")}</p>
                <h3>{collection.title}</h3>
                <p>{collection.subtitle}</p>
              </div>
              <SmartLink className="text-link" href={`/photography/${collection.slug}`}>
                Open collection
              </SmartLink>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="content-band recognition-section">
        <SectionHeading
          eyebrow="Recognition"
          title="Context without turning the page into an awards resume."
          intro="The work stays central; the distinctions sit quietly around it."
        />
        <ul className="recognition-list">
          {photographyRecognition.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
