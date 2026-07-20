import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/content";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  showBackground?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  showBackground = true,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative overflow-hidden border-b border-white/5 pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      {showBackground ? (
        <>
          <Image
            src={images.hero}
            alt="Athletes on a sports field at sunset — Scrapiron Studios digital and creative work for sports"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-iron-950/85 via-iron-950/75 to-iron-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-iron-950/90 via-iron-950/50 to-transparent" />
          <div className="film-grain absolute inset-0" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-iron-900/80 to-iron-950" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
              {eyebrow}
            </p>
          ) : null}
          <h1
            id="page-hero-heading"
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-iron-300 sm:text-xl">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="glow-ember inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
