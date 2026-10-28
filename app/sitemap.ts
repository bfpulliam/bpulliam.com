import type { MetadataRoute } from "next";
import { featured } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://bpulliam.com/", lastModified: new Date() },
    ...featured.map((p) => ({ url: `https://bpulliam.com/work/${p.slug}/`, lastModified: new Date() })),
  ];
}
