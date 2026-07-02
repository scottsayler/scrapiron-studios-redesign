import { site } from "@/lib/content";

export function CTABand() {
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
              Ready to turn your season into highlights?
            </h2>
            <p className="mt-4 text-iron-300">
              Whether it&apos;s one game, a full season, or an upcoming
              tournament — let&apos;s make video that works as hard as your
              athletes do.
            </p>
          </div>
          <a
            href={`mailto:${site.email}?subject=Scrapiron%20Studios%20Project%20Inquiry`}
            className="glow-ember shrink-0 rounded-full bg-ember-500 px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
