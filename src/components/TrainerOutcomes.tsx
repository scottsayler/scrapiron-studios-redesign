import Link from "next/link";
import { homepageOutcomes } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export function TrainerOutcomes() {
  return (
    <section className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trainer Growth System"
          title="Build the business. Connect the path. Showcase the athletes."
          description="Scrapiron connects the pieces families encounter before they inquire, book, register, or purchase athlete media."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {homepageOutcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-iron-950/60 p-7"
            >
              <h2
                className="text-2xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {outcome.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-iron-400">
                {outcome.description}
              </p>
              <Link
                href={outcome.href}
                className="mt-7 text-sm font-semibold text-ember-400 transition-colors hover:text-ember-300"
              >
                {outcome.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
