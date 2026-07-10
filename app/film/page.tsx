import type { Metadata } from "next";
import Link from "next/link";
import { EditorialQuote } from "@/components/EditorialQuote";
import { FilmStills } from "@/components/FilmStills";
import { FullBleedImage } from "@/components/FullBleedImage";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { futureFilms, primaryFilm } from "@/content/films";

export const metadata: Metadata = {
  title: "Film",
  description:
    "Filmmaking work by Aleksandar Tomovski, including The Paradox.",
};

export default function FilmPage() {
  return (
    <>
      <section className="film-hero">
        <FullBleedImage image={primaryFilm.hero} priority />
        <div className="film-hero__copy">
          <p className="eyebrow">Primary film</p>
          <h1>{primaryFilm.title}</h1>
          <p>{primaryFilm.logline}</p>
        </div>
      </section>

      <section className="content-band film-layout">
        <MotionReveal className="video-embed">
          <iframe
            src={primaryFilm.video.embedUrl}
            title={primaryFilm.video.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </MotionReveal>

        <MotionReveal className="film-copy">
          <SectionHeading eyebrow="Synopsis" title="An empty theatre is not empty." />
          {primaryFilm.synopsis.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="film-links" aria-label="Film links">
            {primaryFilm.links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span>{link.label}</span>
                <small>{link.note}</small>
              </Link>
            ))}
          </div>
        </MotionReveal>
      </section>

      <section className="content-band">
        <EditorialQuote lines={primaryFilm.directorNote} attribution="Director's note" />
      </section>

      <section className="content-band credits-section">
        <SectionHeading
          eyebrow="Credits"
          title="Known public credits and placeholders for the final package."
        />
        <dl className="credits-list">
          {primaryFilm.credits.map((credit) => (
            <div key={credit.role}>
              <dt>{credit.role}</dt>
              <dd>{credit.name}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="content-band review-section">
        <MotionReveal>
          <p className="eyebrow">Review material</p>
          <h2>{primaryFilm.review.source}</h2>
          <p className="review-meta">
            {primaryFilm.review.reviewer} <span aria-hidden="true">/</span>{" "}
            {primaryFilm.review.rating}
          </p>
        </MotionReveal>
        <MotionReveal className="review-copy">
          <EditorialQuote
            lines={[primaryFilm.review.pullQuote]}
            attribution="Review excerpt"
          />
          {primaryFilm.review.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </MotionReveal>
      </section>

      <section className="content-band">
        <SectionHeading eyebrow="Stills" title="Frames from the film" />
        <FilmStills stills={primaryFilm.stills} />
      </section>

      <section className="content-band two-column-band">
        <MotionReveal>
          <p className="eyebrow">Festival / review area</p>
          <h2>Public notes will live here.</h2>
          <p>{primaryFilm.festivalStatus}</p>
        </MotionReveal>
        <MotionReveal>
          <p className="eyebrow">Future films</p>
          {futureFilms.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </MotionReveal>
      </section>
    </>
  );
}
