import Link from "next/link";
import { growthPartnerInclusions } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export function GrowthPartner() {
  return (
    <section
      aria-labelledby="growth-partner-heading"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-ember-500/20 bg-iron-900/80 p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Ongoing partnership"
                title="Scrapiron Growth Partner"
                description="For sports organizations that need more than a one-time website, the Growth Partner program provides ongoing support across the website, content, promotion, and digital presence."
                id="growth-partner-heading"
              />
              <Link
                href="/contact?interest=organization&service=Ongoing%20digital%20support"
                className="glow-ember inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
              >
                Discuss Ongoing Support
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 self-center">
              {growthPartnerInclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-iron-300"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-ember-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
