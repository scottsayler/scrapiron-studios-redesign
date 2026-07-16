import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import {
  growthPartnerInclusions,
  organizationChallenges,
  organizationServiceGroups,
} from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Organizations",
  description:
    "Scrapiron helps trainers, clubs, academies, leagues, facilities, and tournament operators create a stronger digital presence and communicate more clearly with athletes and families.",
  path: "/organizations",
});

export default function OrganizationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports organizations"
        title="Digital Support for Sports Organizations"
        description="Scrapiron helps trainers, clubs, academies, leagues, facilities, and tournament operators create a stronger digital presence and communicate more clearly with the athletes and families they serve."
        primaryCta={{
          href: "/contact?interest=organization",
          label: "Grow Your Organization",
        }}
        secondaryCta={{ href: "/work", label: "View Work" }}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common challenges"
            title="Where sports organizations often get stuck"
            description="Not every organization faces every issue below — but these are the patterns we see most often when programs want to grow."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {organizationChallenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 border-l border-ember-500/40 pl-4 text-iron-300"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Website & registration"
            title="Make it easy for families to find you and sign up"
            description="Your website should clearly explain programs, schedules, and next steps — and connect smoothly to registration and scheduling where needed."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {organizationServiceGroups.map((group) => (
              <div key={group.title}>
                <h3
                  className="text-xl font-semibold text-white"
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
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeader
              eyebrow="Ongoing support"
              title="Scrapiron Growth Partner"
              description="For organizations that need more than a one-time launch, ongoing support keeps the website, content, and promotion moving with the season."
            />
            <ul className="grid gap-3 self-center sm:grid-cols-2">
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
          <Link
            href="/contact?interest=organization&service=Ongoing%20digital%20support"
            className="mt-10 inline-flex rounded-full bg-ember-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400"
          >
            Discuss Ongoing Support
          </Link>
        </div>
      </section>

      <FinalCTA
        title="Ready to strengthen your organization’s digital presence?"
        description="Tell us about your program, registration goals, and what families need to understand more clearly."
      />
      <ContactSection
        heading="Start an organization project"
        description="Share your organization type, current website, and primary goal. We’ll follow up with a clear next step."
      />
    </>
  );
}
