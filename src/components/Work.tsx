import { highlightVideos, shortVideos } from "@/lib/content";
import { YouTubePlayer } from "@/components/YouTubePlayer";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
            Portfolio
          </p>
          <h2
            id="work-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Moments that move people
          </h2>
          <p className="mt-4 text-lg text-iron-400">
            Watch real highlight reels and social shorts — every cut is built to
            capture energy and drive engagement.
          </p>
        </div>

        <div className="mb-20">
          <h3
            className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-iron-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Highlight Reels
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            {highlightVideos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-2xl border border-white/5 bg-iron-900"
              >
                <YouTubePlayer
                  videoId={video.id}
                  title={video.title}
                  start={"start" in video ? video.start : undefined}
                />
                <div className="p-6">
                  <h4
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {video.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-iron-400">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3
            id="shorts-heading"
            className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-iron-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Social Shorts
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {shortVideos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-2xl border border-white/5 bg-iron-900"
              >
                <YouTubePlayer
                  videoId={video.id}
                  title={video.title}
                  aspect="short"
                />
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-white">
                    {video.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
