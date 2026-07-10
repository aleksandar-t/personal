import type { Metadata } from "next";
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
        <MotionReveal className="video-placeholder">
          <span>Video embed</span>
          <p>{primaryFilm.videoPlaceholder}</p>
        </MotionReveal>

        <MotionReveal className="film-copy">
          <SectionHeading eyebrow="Synopsis" title="An empty theatre is not empty." />
          {primaryFilm.synopsis.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </MotionReveal>
      </section>

      <section className="content-band">
        <EditorialQuote lines={primaryFilm.directorNote} attribution="Director's note" />
      </section>

      <section className="content-band credits-section">
        <SectionHeading
          eyebrow="Credits"
          title="Built to accept real credits when the film package is final."
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
