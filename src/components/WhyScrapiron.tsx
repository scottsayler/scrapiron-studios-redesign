import { whyScrapironPoints } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export function WhyScrapiron() {
  return (
    <section
      aria-labelledby="why-heading"
      className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            eyebrow="Why Scrapiron"
            title="Built Inside the Sports Community"
            description="Sports organizations operate differently from ordinary small businesses. Registration is seasonal. Trust matters. Parents want clear information. Athletes need visibility. Coaches have limited time. Events move quickly. Scrapiron understands those realities because our work happens inside the sports community."
            id="why-heading"
          />

          <ul className="space-y-5 self-center">
            {whyScrapironPoints.map((point) => (
              <li key={point} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                <p className="text-lg leading-relaxed text-iron-300">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
