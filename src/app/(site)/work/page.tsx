import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { WorkFilters } from "@/components/WorkFilters";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description:
    "Explore Scrapiron Studios portfolio of sports highlights, recruiting videos, event coverage, and digital creative work for sports organizations and athletes.",
  path: "/work",
});

const workCategories = [
  { label: "Organization Websites", href: "/organizations" },
  { label: "Recruiting Videos", href: "/athletes" },
  { label: "Sports Highlights", href: "/sports-highlights" },
  { label: "Event Coverage", href: "/events" },
  { label: "Photography", href: "/sports-highlights" },
  { label: "Branding and Content", href: "/organizations" },
] as const;

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work Across Organizations, Athletes, and Events"
        description="Scrapiron’s portfolio shows how websites, branding, photography, and video work together inside the sports community — without inventing results that have not been measured."
        primaryCta={{ href: "/contact", label: "Start a Project" }}
        secondaryCta={{
          href: "/sports-highlights",
          label: "Sports Highlights",
        }}
      />

      <section className="border-b border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-iron-500">
            Browse by focus
          </p>
          <div className="flex flex-wrap gap-3">
            {workCategories.map((category) => (
              <Link
                key={category.label}
                href={category.href}
                className="border border-white/10 px-4 py-2 text-sm text-iron-300 transition-colors hover:border-ember-500/40 hover:text-white"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WorkFilters
        eyebrow="Featured media"
        title="Sports highlights and athlete content"
        description="Each project is labeled so you can see whether it is athlete-focused, event coverage, or social content. Organization website case studies will be added as new projects are completed."
      />

      <FinalCTA />
    </>
  );
}
