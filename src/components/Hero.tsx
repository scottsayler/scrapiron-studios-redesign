import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src={images.hero}
        alt="Athletes on a sports field at sunset — Scrapiron Studios digital and creative work for sports"
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
          <p className="animate-fade-up mb-6 text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
            Sports organizations · Athletes · Events
          </p>

          <p
            className="animate-fade-up-delay-1 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">{site.name}</span>
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up-delay-1 mt-4 text-2xl font-semibold leading-snug tracking-tight text-iron-100 sm:text-3xl lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Digital and Creative Work Built for Sports
          </h1>

          <p className="animate-fade-up-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-iron-300 sm:text-xl">
            Scrapiron Studios helps sports organizations grow, athletes get
            noticed, and events capture the moments that matter through
            websites, branding, photography, video, and digital content.
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact?interest=organization"
              className="glow-ember inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
            >
              Grow Your Organization
            </Link>
            <Link
              href="/contact?interest=athlete"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              Create a Recruiting Video
            </Link>
          </div>

          <p className="animate-fade-up-delay-3 mt-6">
            <Link
              href="/sports-highlights"
              className="text-sm font-medium text-iron-400 transition-colors hover:text-ember-400"
            >
              View Sports Highlights →
            </Link>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember-500/50 to-transparent" />
    </section>
  );
}
