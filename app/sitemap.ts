import type { MetadataRoute } from "next";
import { photoCollections } from "@/content/photography";

export const dynamic = "force-static";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aleksandartomovski.com"
).replace(/\/$/, "");

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/photography", priority: 0.9 },
  { path: "/film", priority: 0.85 },
  { path: "/writing", priority: 0.85 },
  { path: "/engineering", priority: 0.85 },
  { path: "/about", priority: 0.75 },
  { path: "/contact", priority: 0.6 },
] satisfies Array<{ path: string; priority: number }>;

function absoluteUrl(path: string) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...photoCollections.map((collection) => ({
      url: absoluteUrl(`/photography/${collection.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
