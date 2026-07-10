import type { Metadata } from "next";
import Link from "next/link";
import { BookExcerpt } from "@/components/BookExcerpt";
import { EditorialQuote } from "@/components/EditorialQuote";
import { FullBleedImage } from "@/components/FullBleedImage";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { book } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "One Honest Conversation by Aleksandar Tomovski: curiosity, relationship, and experience.",
};

export default function WritingPage() {
  return (
    <>
      <section className="page-hero content-band writing-hero">
        <div>
          <p className="eyebrow">Book</p>
          <h1>{book.title}</h1>
          <p>{book.subtitle}</p>
        </div>
        <FullBleedImage image={book.hero} priority />
      </section>

      <section className="content-band two-column-band">
        <MotionReveal>
          <SectionHeading eyebrow="Synopsis" title="A conversation as a form of inquiry." />
        </MotionReveal>
        <MotionReveal className="prose-column">
          {book.synopsis.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </MotionReveal>
      </section>

      <section className="content-band">
        <SectionHeading
          eyebrow="Structure"
          title="Three movements through the same question."
        />
        <div className="book-parts">
          {book.parts.map((part) => (
            <MotionReveal className="book-part" key={part.label}>
              <p className="eyebrow">{part.label}</p>
              <h3>{part.title}</h3>
              <p>{part.description}</p>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="content-band">
        <SectionHeading eyebrow="Selected lines" title="The book keeps returning here." />
        <BookExcerpt lines={book.selectedLines} />
      </section>

      <section className="content-band two-column-band">
        <MotionReveal>
          <p className="eyebrow">Behind the book</p>
          <h2>A philosophical dialogue on consciousness, AI, art, and experience.</h2>
          <p>{book.behindTheBook}</p>
        </MotionReveal>
        <MotionReveal>
          <p className="eyebrow">Author note</p>
          <p>{book.authorNote}</p>
        </MotionReveal>
      </section>

      <section className="content-band book-links">
        <EditorialQuote lines={["Nothing meaningful can be forced."]} />
        <div className="resource-links">
          {book.links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
