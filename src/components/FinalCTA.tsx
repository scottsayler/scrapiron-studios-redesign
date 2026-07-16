import Link from "next/link";
import { finalCtaPaths } from "@/lib/content";

type FinalCTAProps = {
  title?: string;
  description?: string;
};

export function FinalCTA({
  title = "What Are You Trying to Build?",
  description = "Choose the path that fits — or tell us about your project and we will help you figure out the right next step.",
}: FinalCTAProps) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden border-t border-white/5 py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-ember-600/15 via-ember-500/5 to-transparent" />
      <div className="film-grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <p className="mt-4 text-lg text-iron-400">{description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {finalCtaPaths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group flex flex-col border border-white/10 bg-iron-900/70 p-8 transition-all hover:border-ember-500/40 hover:bg-iron-900"
            >
              <h3
                className="text-xl font-semibold text-white transition-colors group-hover:text-ember-400"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {path.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-iron-400">
                {path.description}
              </p>
              <span className="mt-6 text-sm font-semibold text-ember-400">
                Get started
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
