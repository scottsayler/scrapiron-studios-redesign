import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoGrid } from "@/components/VideoGrid";
import {
  allVideos,
  athleteProcess,
  athleteServices,
  recruitingMediaOptions,
} from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Athletes",
  description:
    "Scrapiron helps athletes organize their best film, present their skills clearly, and create recruiting videos and highlight reels they can share with coaches and programs.",
  path: "/athletes",
});

export default function AthletesPage() {
  return (
    <>
      <PageHero
        eyebrow="Athletes & families"
        title="Recruiting Videos and Highlights That Make Your Film Easier to Evaluate"
        description="Scrapiron helps athletes organize their best film, present their skills clearly, and create recruiting content they can confidently share with coaches and programs."
        primaryCta={{
          href: "/contact?interest=athlete",
          label: "Start a Recruiting Video",
        }}
        secondaryCta={{
          href: "/sports-highlights",
          label: "View Example Videos",
        }}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeader
              eyebrow="Recruiting videos"
              title="Built around the athlete’s goals"
              description="A strong recruiting video should make it easy for a coach to understand who the athlete is, how they play, and why they deserve a closer look — not just a montage of isolated plays."
            />
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

      <section className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Recruiting media options"
            title="Start with the footage and support the athlete needs"
            description="Each project is scoped around the footage available and the story the athlete needs to present. Final pricing is provided after the project is discussed."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {recruitingMediaOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-2xl border border-white/10 bg-iron-950/60 p-7"
              >
                <h2
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {option.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-iron-400">
                  {option.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {option.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-iron-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="How recruiting film projects work"
            description="Clear steps from raw footage to a shareable recruiting film or highlight reel."
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {athleteProcess.map((step) => (
              <li key={step.step}>
                <p className="text-sm font-medium text-ember-400">{step.step}</p>
                <h3
                  className="mt-3 text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-iron-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What to provide"
            title="What athletes and families usually share"
            description="Existing game film, position and graduation details, season goals, and any deadlines for sharing with coaches help us organize the project quickly."
          />
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-sm leading-relaxed text-iron-300">
            <p className="font-medium text-amber-200">Important note</p>
            <p className="mt-2">
              Scrapiron creates recruiting media and highlight content. We do
              not guarantee scholarships, roster positions, offers, exposure, or
              coach responses.
            </p>
          </div>
          <div className="mt-12">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <h3
                className="text-2xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Example videos
              </h3>
              <Link
                href="/sports-highlights"
                className="text-sm font-medium text-ember-400 hover:text-ember-300"
              >
                View all sports highlights →
              </Link>
            </div>
            <VideoGrid videos={allVideos.slice(0, 4)} />
          </div>
        </div>
      </section>

      <ContactSection
        heading="Start a recruiting video project"
        description="Tell us about the athlete, position, graduation year, and whether you already have film ready to review."
      />
    </>
  );
}
