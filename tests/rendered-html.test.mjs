import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);
const draftCopyPattern =
  /placeholder|replaceable|to be added|replace-with-email|Test the placeholder form|Curtain Edge|Room Study|Frames from the film|work stays central|distinctions stay compact|public record belongs lower|first impression should be|sections are organized|premature product catalogue|can be added|This page is deliberately scoped|public book is presented|should feel like|structure supports|without forcing them into identical boxes|home for images|public signal|Public IMDb festival pages|without drowning the film|What belongs here|The work is technical, but the judgment is human|How Aleksandar thinks|Creating enough room for better thinking/i;

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
  assert.doesNotMatch(html, draftCopyPattern);
});

test("keeps individual pages specific and free of public placeholder copy", async () => {
  const paths = [
    "/about",
    "/contact",
    "/engineering",
    "/film",
    "/photography",
    "/photography/behind-the-curtains",
    "/photography/naked-you-me",
    "/photography/paradox",
    "/photography/selected-works",
    "/writing",
  ];

  for (const pathname of paths) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.doesNotMatch(html, draftCopyPattern, pathname);

    if (pathname === "/writing") {
      assert.match(html, /class="book-quote"/, pathname);
      assert.match(html, /<blockquote>/, pathname);
    }

    if (pathname === "/engineering") {
      assert.match(html, /Backend systems, delivery, and team ownership/i, pathname);
      assert.match(html, /C#\/\.NET/i, pathname);
    }

    if (pathname === "/about") {
      assert.match(html, /I am Aleksandar Tomovski/i, pathname);
      assert.match(html, /I was born in 1985 in Skopje/i, pathname);
      assert.match(html, /more than 15 years of senior \.NET\/backend experience/i, pathname);
      assert.match(html, /Master IAAP \/ MIAAP/i, pathname);
    }
  }
});

test("keeps content editable and starter-only pieces removed", async () => {
  const [
    site,
    photography,
    films,
    writing,
    engineering,
    packageJson,
    readme,
    cname,
    exportedHome,
    sitemapXml,
    robotsTxt,
  ] = await Promise.all([
      readFile(new URL("../content/site.ts", import.meta.url), "utf8"),
      readFile(new URL("../content/photography.ts", import.meta.url), "utf8"),
      readFile(new URL("../content/films.ts", import.meta.url), "utf8"),
      readFile(new URL("../content/writing.ts", import.meta.url), "utf8"),
      readFile(new URL("../content/engineering.ts", import.meta.url), "utf8"),
      readFile(new URL("../package.json", import.meta.url), "utf8"),
      readFile(new URL("../README.md", import.meta.url), "utf8"),
      readFile(new URL("../docs/CNAME", import.meta.url), "utf8"),
      readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
      readFile(new URL("../docs/sitemap.xml", import.meta.url), "utf8"),
      readFile(new URL("../docs/robots.txt", import.meta.url), "utf8"),
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
  assert.match(writing, /https:\/\/onehonestconversation\.com\//);
  assert.match(writing, /https:\/\/www\.amazon\.com\/One-Honest-Conversation/);
  assert.match(photography, /https:\/\/www\.instagram\.com\/tomovski\.photography\//);
  assert.match(photography, /https:\/\/theiaap\.com\/profile\/7373\//);
  assert.match(await readFile(new URL("../content/awards.ts", import.meta.url), "utf8"), /MIAAP/);
  assert.match(engineering, /https:\/\/www\.linkedin\.com\/in\/aleksandartomovski\//);
  assert.match(engineering, /export const technicalProjects: TechnicalProject\[\] = \[\];/);
  assert.match(packageJson, /"framer-motion"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton|drizzle-orm|drizzle-kit/);
  assert.match(readme, /NEXT_PUBLIC_SITE_URL/);
  assert.match(readme, /public\/images\/photography\/behind-the-curtains/);
  assert.doesNotMatch(readme, /ContactForm\.tsx|placeholder links/i);
  assert.equal(cname.trim(), "aleksandartomovski.com");
  assert.match(exportedHome, /https:\/\/aleksandartomovski\.com\/og\.png/);
  assert.match(exportedHome, /href="\/photography\/"/);
  assert.doesNotMatch(exportedHome, /\/personal\/|\/personal_/);
  assert.match(sitemapXml, /<loc>https:\/\/aleksandartomovski\.com\/<\/loc>/);
  assert.match(
    sitemapXml,
    /<loc>https:\/\/aleksandartomovski\.com\/photography\/behind-the-curtains\/<\/loc>/,
  );
  assert.match(robotsTxt, /Allow: \//);
  assert.match(robotsTxt, /Sitemap: https:\/\/aleksandartomovski\.com\/sitemap\.xml/);

  await Promise.all([
    access(new URL("../public/images/profile/aleksandar-hero.png", import.meta.url)),
    access(new URL("../public/images/photography/behind-the-curtains/hero.png", import.meta.url)),
    access(new URL("../public/images/film/the-paradox/hero.png", import.meta.url)),
    access(new URL("../public/images/book/one-honest-conversation.png", import.meta.url)),
    access(new URL("../public/images/engineering/systems-architecture.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  await assert.rejects(
    access(new URL("app/_sites-preview/SkeletonPreview.tsx", templateRoot)),
  );
  await assert.rejects(
    access(new URL("app/_sites-preview/preview.css", templateRoot)),
  );
});
