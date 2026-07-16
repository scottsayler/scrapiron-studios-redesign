import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoGrid } from "@/components/VideoGrid";
import { allVideos, eventServices } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Events",
  description:
    "Scrapiron creates photography, video, highlight content, sponsor assets, and event recaps for tournaments, showcases, camps, and championships.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports events"
        title="Sports Event Coverage That Keeps Working After the Final Whistle"
        description="Scrapiron creates photography, video, highlight content, sponsor assets, and event recaps for tournaments, showcases, camps, and championships."
        primaryCta={{
          href: "/contact?interest=event",
          label: "Discuss Event Coverage",
        }}
        secondaryCta={{
          href: "/sports-highlights",
          label: "View Event Work",
        }}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Coverage options"
            title="Capture the event. Extend its reach."
            description="From on-field moments to sponsor visibility and post-event recaps, coverage is designed to serve organizers, athletes, and families."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {eventServices.map((service) => (
              <article
                key={service.title}
                className="border-t border-white/10 pt-6"
              >
                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-iron-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Example event work"
            title="Highlights and social content from sports competition"
            description="A sample of sports highlights and short-form content that show how we capture energy, competition, and community."
          />
          <VideoGrid videos={allVideos} />
        </div>
      </section>

      <ContactSection
        heading="Plan event coverage"
        description="Share the event type, date, location, and whether you need photography, video, social clips, or a full recap package."
      />
    </>
  );
}
