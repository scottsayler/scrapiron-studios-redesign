import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/trainer-growth-system",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  { path: "/organizations", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/athletes", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/events", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/sports-highlights",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
