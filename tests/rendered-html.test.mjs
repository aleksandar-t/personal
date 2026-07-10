import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Aleksandar's personal universe homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Home \| Aleksandar Tomovski<\/title>/i);
  assert.match(html, /Aleksandar Tomovski/);
  assert.match(html, /Software Engineer/);
  assert.match(html, /Photographer/);
  assert.match(html, /Filmmaker/);
  assert.match(html, /Writer/);
  assert.match(html, /Different mediums/);
  assert.match(html, /The work changes medium/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("keeps content editable and starter-only pieces removed", async () => {
  const [site, photography, films, writing, engineering, packageJson, readme] =
    await Promise.all([
      readFile(new URL("../content/site.ts", import.meta.url), "utf8"),
      readFile(new URL("../content/photography.ts", import.meta.url), "utf8"),
      readFile(new URL("../content/films.ts", import.meta.url), "utf8"),
      readFile(new URL("../content/writing.ts", import.meta.url), "utf8"),
      readFile(new URL("../content/engineering.ts", import.meta.url), "utf8"),
      readFile(new URL("../package.json", import.meta.url), "utf8"),
      readFile(new URL("../README.md", import.meta.url), "utf8"),
    ]);

  assert.match(site, /One way of seeing/);
  assert.match(photography, /Behind the Curtains/);
  assert.match(films, /The Paradox/);
  assert.match(films, /https:\/\/www\.youtube\.com\/watch\?v=_2E8QuuNgIE/);
  assert.match(films, /https:\/\/www\.imdb\.com\/title\/tt14683450/);
  assert.match(films, /Sayantan Mukherjee/);
  assert.match(films, /Marija Kichevska/);
  assert.match(films, /AURORA/);
  assert.match(films, /METANOIA/);
  assert.match(films, /One Thousand and One Stories/);
  assert.match(films, /Malinski Photo Festival/);
  assert.match(writing, /One Honest Conversation/);
  assert.match(engineering, /Tomovium API Core/);
  assert.match(packageJson, /"framer-motion"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton|drizzle-orm|drizzle-kit/);
  assert.match(readme, /NEXT_PUBLIC_SITE_URL/);
  assert.match(readme, /public\/images\/photography\/behind-the-curtains/);
  assert.match(readme, /ContactForm\.tsx/);

  await Promise.all([
    access(new URL("../public/images/profile/aleksandar-hero-placeholder.png", import.meta.url)),
    access(new URL("../public/images/photography/behind-the-curtains/hero.png", import.meta.url)),
    access(new URL("../public/images/film/the-paradox/hero.png", import.meta.url)),
    access(new URL("../public/images/book/one-honest-conversation.png", import.meta.url)),
    access(new URL("../public/images/engineering/systems-placeholder.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  await assert.rejects(
    access(new URL("app/_sites-preview/SkeletonPreview.tsx", templateRoot)),
  );
  await assert.rejects(
    access(new URL("app/_sites-preview/preview.css", templateRoot)),
  );
});
