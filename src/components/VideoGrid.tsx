import Link from "next/link";
import type { PortfolioVideo } from "@/lib/content";
import { YouTubePlayer } from "@/components/YouTubePlayer";

type VideoGridProps = {
  videos: PortfolioVideo[];
  showCategory?: boolean;
  layout?: "highlights" | "mixed" | "shorts";
};

export function VideoGrid({
  videos,
  showCategory = true,
  layout = "mixed",
}: VideoGridProps) {
  if (layout === "shorts") {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            showCategory={showCategory}
            compact
          />
        ))}
      </div>
    );
  }

  if (layout === "highlights") {
    return (
      <div className="grid gap-8 lg:grid-cols-2">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            showCategory={showCategory}
          />
        ))}
      </div>
    );
  }

  const highlights = videos.filter((v) => v.format === "highlight");
  const shorts = videos.filter((v) => v.format === "short");

  return (
    <div className="space-y-16">
      {highlights.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-2">
          {highlights.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              showCategory={showCategory}
            />
          ))}
        </div>
      ) : null}
      {shorts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {shorts.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              showCategory={showCategory}
              compact
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function VideoCard({
  video,
  showCategory,
  compact = false,
}: {
  video: PortfolioVideo;
  showCategory: boolean;
  compact?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/5 bg-iron-900">
      <YouTubePlayer
        videoId={video.id}
        title={video.title}
        start={video.start}
        aspect={video.format === "short" ? "short" : "video"}
      />
      <div className={compact ? "p-4" : "p-6"}>
        {showCategory ? (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-ember-400">
            {video.category}
          </p>
        ) : null}
        <h3
          className={
            compact
              ? "text-sm font-semibold text-white"
              : "text-xl font-semibold text-white"
          }
          style={compact ? undefined : { fontFamily: "var(--font-display)" }}
        >
          {video.title}
        </h3>
        {!compact ? (
          <p className="mt-2 text-sm leading-relaxed text-iron-400">
            {video.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}

type VideoSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  videos: PortfolioVideo[];
  cta?: { href: string; label: string };
  id?: string;
};

export function VideoSection({
  eyebrow,
  title,
  description,
  videos,
  cta,
  id = "highlights",
}: VideoSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl lg:mb-16">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className={`${eyebrow ? "mt-4" : ""} text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-iron-400">
            {description}
          </p>
          {cta ? (
            <Link
              href={cta.href}
              className="mt-6 inline-flex text-sm font-medium text-ember-400 transition-colors hover:text-ember-300"
            >
              {cta.label}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          ) : null}
        </div>
        <VideoGrid videos={videos} />
      </div>
    </section>
  );
}
