import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { pageList } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const priority: { path: string; p: number }[] = [
    { path: "/", p: 1 },
    { path: "/elevador-mudanzas-valencia/", p: 0.9 },
    { path: "/precios-mudanzas-valencia/", p: 0.9 },
  ];
  const others = pageList
    .map((pg) => `/${pg.slug}/`)
    .filter((path) => !priority.some((x) => x.path === path))
    .map((path) => ({ path, p: 0.7 }));

  return [...priority, ...others].map(({ path, p }) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p,
  }));
}
