"use client";

import { useMemo, useState } from "react";
import { VideoGrid } from "@/components/VideoGrid";
import {
  allVideos,
  type VideoCategory,
} from "@/lib/content";

const filters: Array<"All" | VideoCategory> = [
  "All",
  "Athlete Highlights",
  "Event Coverage",
  "Social Edits",
  "Recruiting Films",
  "Team Stories",
  "Photography",
];

type WorkFiltersProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function WorkFilters({
  eyebrow,
  title,
  description,
}: WorkFiltersProps) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const videos = useMemo(() => {
    if (active === "All") return allVideos;
    return allVideos.filter((video) => video.category === active);
  }, [active]);

  const availableFilters = filters.filter(
    (filter) =>
      filter === "All" ||
      allVideos.some((video) => video.category === filter),
  );

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`${eyebrow ? "mt-4" : ""} text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-iron-400">
            {description}
          </p>
        </div>

        <div
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter work by category"
        >
          {availableFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === filter
                  ? "bg-ember-500 text-white"
                  : "border border-white/10 text-iron-300 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {videos.length > 0 ? (
          <VideoGrid videos={videos} />
        ) : (
          <p className="text-iron-400">
            No projects in this category yet.{" "}
            <a
              href="/contact"
              className="text-ember-400 transition-colors hover:text-ember-300"
            >
              Start a project
            </a>{" "}
            to add to this portfolio.
          </p>
        )}
      </div>
    </section>
  );
}
