import type { MetadataRoute } from "next";
import { indexableRoutes, SITE_URL } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    changeFrequency: route.path === "/privacy" ? "yearly" : "monthly",
    priority: route.priority,
  }));
}
