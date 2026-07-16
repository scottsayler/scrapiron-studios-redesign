import { VideoSection } from "@/components/VideoGrid";
import { allVideos } from "@/lib/content";

/** @deprecated Prefer VideoSection / VideoGrid — kept for compatibility */
export function Work() {
  return (
    <VideoSection
      id="work"
      eyebrow="Portfolio"
      title="Moments that move people"
      description="Watch real highlight reels and social shorts — every cut is built to capture energy and tell the story of the competition."
      videos={allVideos}
      cta={{ href: "/sports-highlights", label: "View All Sports Highlights" }}
    />
  );
}
