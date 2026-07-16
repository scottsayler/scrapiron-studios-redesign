import Link from "next/link";
import { organizationServiceGroups } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export function OrganizationGrowth() {
  return (
    <section
      id="organization-growth"
      aria-labelledby="org-growth-heading"
      className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="For sports organizations"
          title="We help sports organizations grow."
          description="A website is often the starting point, not the entire solution. Scrapiron can help connect your brand, content, registration experience, and ongoing communication into one stronger digital presence."
          id="org-growth-heading"
          action={{
            href: "/organizations",
            label: "Explore organization services",
          }}
        />

        <div className="grid gap-10 lg:grid-cols-3">
          {organizationServiceGroups.map((group) => (
            <div key={group.title}>
              <h3
                className="border-b border-white/10 pb-4 text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {group.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-iron-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/contact?interest=organization"
            className="glow-ember inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
          >
            Grow Your Organization
          </Link>
        </div>
      </div>
    </section>
  );
}
