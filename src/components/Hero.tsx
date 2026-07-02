import Image from "next/image";
import { images, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src={images.hero}
        alt="Sports action"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-iron-950/80 via-iron-950/60 to-iron-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-iron-950/90 via-iron-950/40 to-transparent" />
      <div className="film-grain absolute inset-0" />

      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-ember-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="max-w-3xl">
          <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ember-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
            Sports Video Editing
          </p>

          <h1
            className="animate-fade-up-delay-1 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient block">{site.name}</span>
            <span className="mt-2 block text-3xl font-medium text-iron-300 sm:text-4xl lg:text-5xl">
              {site.tagline}
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-iron-300 sm:text-xl">
            {site.description}
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="glow-ember inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
            >
              Start Your Project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember-500/50 to-transparent" />
    </section>
  );
}
