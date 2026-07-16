import Link from "next/link";

type CTABandProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTABand({
  title = "What are you trying to build?",
  description = "Whether you need help growing a sports organization, creating recruiting content, or covering an event — let’s talk about the right next step.",
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-ember-600/20 via-ember-500/10 to-transparent" />
      <div className="film-grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-ember-500/20 bg-iron-900/80 p-10 text-center backdrop-blur-sm lg:flex-row lg:p-14 lg:text-left">
          <div className="max-w-xl">
            <h2
              className="text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2>
            <p className="mt-4 text-iron-300">{description}</p>
          </div>
          <Link
            href={ctaHref}
            className="glow-ember shrink-0 rounded-full bg-ember-500 px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
