import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0908",
    theme_color: "#f97316",
    lang: "en-US",
    categories: ["business", "sports", "video"],
  };
}
