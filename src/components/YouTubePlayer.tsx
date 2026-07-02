"use client";

import Image from "next/image";
import { useState } from "react";

type YouTubePlayerProps = {
  videoId: string;
  title: string;
  start?: number;
  aspect?: "video" | "short";
};

function buildEmbedUrl(videoId: string, start?: number) {
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
  });

  if (start) {
    params.set("start", String(start));
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function YouTubePlayer({
  videoId,
  title,
  start,
  aspect = "video",
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const aspectClass = aspect === "short" ? "aspect-[9/16]" : "aspect-video";

  if (isPlaying) {
    return (
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <iframe
          src={buildEmbedUrl(videoId, start)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className={`group relative block w-full overflow-hidden ${aspectClass}`}
      aria-label={`Play ${title}`}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={
          aspect === "short"
            ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            : "(max-width: 1024px) 100vw, 50vw"
        }
      />
      <div className="absolute inset-0 bg-iron-950/30 transition-colors group-hover:bg-iron-950/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ember-500/90 text-white shadow-lg transition-transform group-hover:scale-110">
          <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </button>
  );
}
