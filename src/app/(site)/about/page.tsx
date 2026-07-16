import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Scrapiron Studios exists to help sports organizations and athletes present themselves professionally without losing what makes their program, team, or story personal.",
  path: "/about",
});

const aboutPoints = [
  {
    title: "Connected to sports",
    body: "Our work happens inside the sports community — with organizations, athletes, coaches, parents, and event operators who need clear communication and strong media.",
  },
  {
    title: "Technical and creative together",
    body: "Websites, branding, photography, and video should support the same story. We connect those pieces so programs and athletes do not have to manage disconnected vendors.",
  },
  {
    title: "Practical for real programs",
    body: "We work with smaller organizations and individual athletes as seriously as larger projects. Registration cycles, seasonal promotion, and limited staff time are part of the plan — not afterthoughts.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`${site.name} exists for sports.`}
        description="Scrapiron Studios exists to help sports organizations and athletes present themselves professionally without losing what makes their program, team, or story personal."
        primaryCta={{ href: "/contact", label: "Get in Touch" }}
        secondaryCta={{ href: "/work", label: "See Our Work" }}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeader
              title="A sports-focused studio, not a generic agency"
              description="We help sports organizations grow. We also help athletes showcase their ability through recruiting videos, highlight reels, photography, and digital content — and we cover the events where those stories happen."
            />
            <div className="space-y-6 self-center text-lg leading-relaxed text-iron-300">
              <p>
                Sports organizations operate differently from ordinary small
                businesses. Trust matters. Parents want clear information.
                Athletes need visibility. Coaches have limited time. Events move
                quickly.
              </p>
              <p>
                Scrapiron is built around those realities. We are a focused
                studio that combines digital and creative work for sports — not
                a large agency pretending to be everywhere at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {aboutPoints.map((point) => (
              <article key={point.title} className="border-t border-ember-500/30 pt-6">
                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-iron-400">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-iron-400">
            Based in {site.location}. Working with sports programs and athletes
            across the communities we serve.{" "}
            <Link
              href="/contact"
              className="font-medium text-ember-400 hover:text-ember-300"
            >
              Start a conversation
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
