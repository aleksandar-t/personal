import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { MotionReveal } from "@/components/MotionReveal";
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
          For engineering work, creative collaboration, photography, film,
          writing, or thoughtful conversations that do not fit a tidy category.
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
                <Link href={link.href}>{link.label}</Link>
                <span>{link.note}</span>
              </li>
            ))}
          </ul>
        </MotionReveal>

        <MotionReveal>
          <ContactForm />
        </MotionReveal>
      </section>
    </>
  );
}
