import Link from "next/link";
import { audiencePathways } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export function AudiencePathways() {
  return (
    <section
      aria-labelledby="audiences-heading"
      className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Who we help"
          title="Clear paths for every part of the sports community."
          description="Whether you train athletes, run a program, need recruiting film, or are covering an event — start with the path that fits."
          id="audiences-heading"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {audiencePathways.map((pathway) => (
            <article
              key={pathway.href}
              className="group flex flex-col border-t border-ember-500/40 bg-iron-900/60 pt-8 transition-colors hover:bg-iron-900"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember-400">
                {pathway.eyebrow}
              </p>
              <h3
                className="mt-4 text-2xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pathway.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-iron-400">
                {pathway.description}
              </p>
              <Link
                href={pathway.href}
                className="mt-8 inline-flex items-center text-sm font-semibold text-ember-400 transition-colors group-hover:text-ember-300"
              >
                {pathway.cta}
                <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
