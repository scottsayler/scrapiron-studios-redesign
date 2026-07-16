import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { WorkFilters } from "@/components/WorkFilters";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Sports Highlights",
  description:
    "Watch Scrapiron Studios sports highlights, recruiting films, athlete highlight reels, tournament content, and social edits from inside the sports community.",
  path: "/sports-highlights",
});

export default function SportsHighlightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports highlights"
        title="On the Field. On the Sidelines. In the Community."
        description="Recruiting videos, athlete highlights, game recaps, tournament content, and short-form social edits — labeled clearly so you can see what each project represents."
        primaryCta={{
          href: "/contact?interest=athlete",
          label: "Start a Recruiting Video",
        }}
        secondaryCta={{
          href: "/contact?interest=event",
          label: "Cover an Event",
        }}
      />

      <WorkFilters
        title="Curated sports media"
        description="Filter by category to find recruiting-style content, athlete highlights, event coverage, and social edits."
      />

      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-iron-400">
            Looking for websites and branding for your program?{" "}
            <Link
              href="/organizations"
              className="font-medium text-ember-400 hover:text-ember-300"
            >
              Explore organization services
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
