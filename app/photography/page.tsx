import type { Metadata } from "next";
import Link from "next/link";
import { FullBleedImage } from "@/components/FullBleedImage";
import { MotionReveal } from "@/components/MotionReveal";
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
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
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
          <Link className="text-link" href={`/photography/${featured.slug}`}>
            View the collection
          </Link>
        </MotionReveal>
      </section>

      <section className="content-band">
        <SectionHeading
          eyebrow="Collections"
          title="Bodies of work"
          intro="These sections are ready for the real photographs and final curatorial text; for now the story carries the shape of the work."
        />
        <div className="collection-list">
          {photoCollections.map((collection) => (
            <MotionReveal className="collection-row" key={collection.slug}>
              <div>
                <p className="eyebrow">{collection.slug.replaceAll("-", " ")}</p>
                <h3>{collection.title}</h3>
                <p>{collection.subtitle}</p>
              </div>
              <Link className="text-link" href={`/photography/${collection.slug}`}>
                Open collection
              </Link>
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
