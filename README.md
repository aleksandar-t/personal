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

Build the GitHub Pages static export:

```bash
npm run build:github
```

That command writes the static export to `out/`, then copies the GitHub Pages
ready site into `docs/`. By default it exports for the custom domain
`https://aleksandartomovski.com` with no `/personal` base path.

## GitHub Pages

This repo is set up for the simple branch-folder GitHub Pages flow.

In GitHub, open **Settings -> Pages** and set:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/docs`

Do not use **main / root** for this project, because the repo root contains the
Next.js source code, not the generated static site.

Expected Pages URL:

```text
https://aleksandartomovski.com/
```

The custom domain is tracked in `public/CNAME`, which is copied into
`docs/CNAME` during the static export. If you ever need to temporarily build for
the default repository URL again, run the export with:

```bash
NEXT_PUBLIC_BASE_PATH=/personal NEXT_PUBLIC_SITE_URL=https://aleksandar-t.github.io/personal npm run build:github
```

## Content

Most copy and data lives in:

- `content/site.ts`: identity, homepage worlds, manifesto, navigation
- `content/photography.ts`: photography collections, gallery items, captions
- `content/films.ts`: film synopsis, credits, stills, reviews, video projects
- `content/writing.ts`: book synopsis, parts, selected lines, links
- `content/engineering.ts`: engineering profile, principles, products
- `content/awards.ts`: photography recognition
- `content/social.ts`: public profile and project links

Update those files first when changing the site content. The React components
should mostly stay focused on layout and interaction.

## Social Metadata

`public/og.png` is the generated social preview card. Set
`NEXT_PUBLIC_SITE_URL` to the final public URL before a public launch so social
platforms receive an absolute image URL.

## Replace Images

Current images are visual stand-ins for the final personal photography, film
stills, book artwork, and engineering visuals. Replace them at the same paths or
update the matching content module when final assets are ready.

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

## Contact

The contact page currently uses public profile and project links only. Add a
direct email or form only when there is a real public contact channel behind it.

## Notes

- The site uses the Next.js App Router, TypeScript, Tailwind CSS, `next/image`,
  and Framer Motion for restrained reveal animation.
- Motion respects `prefers-reduced-motion`.
- Photography collection pages include a keyboard-friendly lightbox.
