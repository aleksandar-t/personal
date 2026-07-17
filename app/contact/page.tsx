import type { Metadata } from "next";
import { MotionReveal } from "@/components/MotionReveal";
import { SmartLink } from "@/components/SmartLink";
import { SectionHeading } from "@/components/SectionHeading";
import { socialLinks } from "@/content/social";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Public links for Aleksandar Tomovski's engineering, photography, film, and writing work.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero content-band contact-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Enter the conversation.</h1>
        </div>
        <p>
          Public doors into the work: engineering profile, photography archive,
          film projects, and the book. Start with the path closest to the
          conversation you want to have.
        </p>
      </section>

      <section className="content-band contact-grid">
        <MotionReveal>
          <SectionHeading
            eyebrow="Links"
            title="Public doors into the work."
          />
          <ul className="contact-links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <SmartLink href={link.href}>{link.label}</SmartLink>
                <span>{link.note}</span>
              </li>
            ))}
          </ul>
        </MotionReveal>

        <MotionReveal className="contact-note">
          <p className="eyebrow">Conversations</p>
          <h2>Work, collaboration, and conversations with a real reason.</h2>
          <p>
            Engineering conversations can start through LinkedIn. Photography,
            film, and writing inquiries can begin from the public project pages.
            The point is not to collect messages; it is to make the right
            conversation easier to begin.
          </p>
        </MotionReveal>
      </section>
    </>
  );
}
