# Aleksandar Tomovski Personal Website

A static-first personal website for Aleksandar Tomovski: software engineer,
photographer, filmmaker, and writer.

The site is built as one coherent personal universe rather than separate
portfolio sections. The content is editable from typed TypeScript modules under
`content/`, and imagery lives under `public/images/`.

## Run Locally

```bash
npm install
npm run dev
```

Build and validate:

```bash
npm run lint
npm run build
```

## Content

Most copy and data lives in:

- `content/site.ts`: identity, homepage worlds, manifesto, navigation
- `content/photography.ts`: photography collections, gallery items, captions
- `content/films.ts`: film synopsis, credits, stills, festival placeholder
- `content/writing.ts`: book synopsis, parts, selected lines, links
- `content/engineering.ts`: engineering profile, principles, products
- `content/awards.ts`: photography recognition
- `content/social.ts`: contact and social placeholders

Update those files first when changing the site content. The React components
should mostly stay focused on layout and interaction.

## Social Metadata

`public/og.png` is the generated social preview card. Set
`NEXT_PUBLIC_SITE_URL` to the final public URL before a public launch so social
platforms receive an absolute image URL.

## Replace Images

All current images are labeled placeholders. Replace them with final assets at
the same paths or update the matching content module.

Expected folders:

- `public/images/profile`
- `public/images/photography/behind-the-curtains`
- `public/images/photography/naked-you-me`
- `public/images/photography/paradox`
- `public/images/photography/selected-works`
- `public/images/film/the-paradox`
- `public/images/book`
- `public/images/engineering`

Use real photographs, film stills, book artwork, or product visuals. Avoid stock
imagery, fake logos, invented testimonials, and fake achievements.

## Contact Form

The contact form is front-end only. It prevents submission and shows a clear
placeholder status. Connect `components/ContactForm.tsx` to a real form provider
or API endpoint when the contact channel is ready.

## Notes

- The site uses the Next.js App Router, TypeScript, Tailwind CSS, `next/image`,
  and Framer Motion for restrained reveal animation.
- Motion respects `prefers-reduced-motion`.
- Photography collection pages include a keyboard-friendly lightbox.
- Placeholder links are intentionally marked and should be replaced before a
  public launch.
