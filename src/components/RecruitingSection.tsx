import Link from "next/link";
import { athleteServices } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export function RecruitingSection() {
  return (
    <section
      id="recruiting"
      aria-labelledby="recruiting-heading"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Athletes & families"
              title="Recruiting Videos That Show More Than a Few Good Plays"
              description="A strong recruiting video should make it easy for a coach to understand who the athlete is, how they play, and why they deserve a closer look. Scrapiron creates clear, well-organized recruiting films and highlight reels built around the athlete’s goals."
              id="recruiting-heading"
            />
            <p className="max-w-xl text-sm leading-relaxed text-iron-500">
              Scrapiron creates recruiting media to help athletes present their
              film clearly. We do not guarantee scholarships, roster positions,
              offers, or coach responses.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?interest=athlete"
                className="glow-ember inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
              >
                Start a Recruiting Video
              </Link>
              <Link
                href="/athletes"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/5"
              >
                Explore Athlete Services
              </Link>
            </div>
          </div>

          <ul className="space-y-4 self-center">
            {athleteServices.map((service) => (
              <li
                key={service}
                className="flex items-center gap-4 border-b border-white/5 pb-4 text-iron-200"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
