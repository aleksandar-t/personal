import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EditorialQuote } from "@/components/EditorialQuote";
import { MotionReveal } from "@/components/MotionReveal";
import { ProjectFeature } from "@/components/ProjectFeature";
import { SectionHeading } from "@/components/SectionHeading";
import {
  homeWorlds,
  manifesto,
  signatureQuote,
  siteIdentity,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The personal universe of Aleksandar Tomovski: software engineering, photography, filmmaking, and writing.",
};

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          src={siteIdentity.heroImage.src}
          alt={siteIdentity.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="home-hero__image"
        />
        <div className="home-hero__scrim" />
        <div className="home-hero__content">
          <p className="eyebrow">One way of seeing</p>
          <h1>{siteIdentity.name}</h1>
          <p className="role-stack">
            Software Engineer.
            <br />
            Photographer.
            <br />
            Filmmaker.
            <br />
            Writer.
          </p>
          <p className="hero-support">
            Different mediums. The same instinct: look beneath the obvious,
            remove noise, and let the relationship reveal itself.
          </p>
          <div className="hero-actions">
            <Link href="#worlds">Explore the work</Link>
            <Link href="/contact">Enter the conversation</Link>
          </div>
        </div>
      </section>

      <section className="manifesto-section content-band">
        <MotionReveal className="manifesto-grid">
          <SectionHeading
            eyebrow="Manifesto"
            title="The disciplines are not separate worlds."
            intro="They are different instruments for one kind of attention."
          />
          <div className="manifesto-copy">
            {manifesto.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </MotionReveal>
      </section>

      <section id="worlds" className="worlds-section content-band">
        <SectionHeading
          eyebrow="Selected worlds"
          title="Code, light, movement, language."
          intro="Each area has its own texture, but the visitor should feel one mind moving through them."
        />
        <div className="worlds-list">
          {homeWorlds.map((world, index) => (
            <ProjectFeature key={world.key} world={world} index={index} />
          ))}
        </div>
      </section>

      <section className="quote-band">
        <EditorialQuote lines={signatureQuote} />
      </section>

      <section className="closing-section content-band">
        <MotionReveal>
          <p className="closing-line">
            The work changes medium. The relationship remains.
          </p>
          <Link className="text-link" href="/contact">
            Start a conversation
          </Link>
        </MotionReveal>
      </section>
    </>
  );
}
