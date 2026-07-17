import type { Metadata } from "next";
import Image from "next/image";
import { EditorialQuote } from "@/components/EditorialQuote";
import { MotionReveal } from "@/components/MotionReveal";
import { SmartLink } from "@/components/SmartLink";
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
          <p className="role-stack">{siteIdentity.roleLine}</p>
          <p className="hero-support">
            Different mediums. Same instinct: look beneath the obvious, remove
            noise, reveal the relationship.
          </p>
          <div className="hero-actions">
            <SmartLink href="#worlds">Explore the work</SmartLink>
            <SmartLink href="/contact">Enter the conversation</SmartLink>
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
          intro="Engineering profile, awarded photography, short film, and philosophical writing should feel like one mind changing instruments."
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
          <SmartLink className="text-link" href="/contact">
            Start a conversation
          </SmartLink>
        </MotionReveal>
      </section>
    </>
  );
}
