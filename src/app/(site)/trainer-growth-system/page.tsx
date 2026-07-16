import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { HomeBaseJourney } from "@/components/HomeBaseJourney";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import {
  recruitingMediaOptions,
  seasonalOpportunities,
  site,
  socialMediaObjection,
  sportsServed,
  trainerChallenges,
  trainerFrameworkStages,
  trainerGrowthFaqs,
  trainerGrowthOffers,
} from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Trainer Growth System",
  description:
    "Websites, marketing, content, booking support, and athlete media that help independent sports trainers and small academies build businesses that grow.",
  path: "/trainer-growth-system",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: trainerGrowthFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trainer Growth System",
  serviceType: "Marketing and website services for sports trainers",
  provider: { "@id": `${site.url}/#organization` },
  url: `${site.url}/trainer-growth-system`,
  description:
    "A connected system for sports trainer websites, ongoing marketing, content, booking, local search visibility, and athlete media.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Independent sports trainers, private coaches, and small sports academies",
  },
};

export default function TrainerGrowthSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema]),
        }}
      />

      <PageHero
        eyebrow="Trainer Growth System"
        title="A Complete Digital Growth System for Sports Trainers"
        description="Turn social media attention, referrals, and local searches into a professional experience that helps parents trust you, understand your programs, and take the next step."
        primaryCta={{
          href: "/contact?interest=trainer&service=Trainer%20website",
          label: "Build Your Trainer Growth System",
        }}
        secondaryCta={{
          href: "/contact?interest=trainer",
          label: "Talk About Your Training Business",
        }}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeader
              eyebrow="The opportunity"
              title="Your online presence should reflect the quality of your coaching"
              description="Many strong trainers grow through referrals and social media. The challenge is giving interested families a fast, clear way to understand the business and act."
            />
            <ul className="grid gap-4 self-center sm:grid-cols-2">
              {trainerChallenges.map((challenge) => (
                <li
                  key={challenge}
                  className="border-l border-ember-500/40 pl-4 text-sm leading-relaxed text-iron-300"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-iron-900/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="One connected system"
            title="Attention needs a clear place to go"
            description="Social media creates attention. Your website builds trust. Your booking process creates customers. Ongoing marketing keeps your business visible."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Attention", "Social, search, referrals, email, and local promotion"],
              ["Trust", "Programs, experience, proof, testimonials, and results"],
              ["Action", "Inquiries, lesson booking, camp registration, and media"],
              ["Visibility", "Seasonal content, search updates, and ongoing promotion"],
            ].map(([title, description], index) => (
              <article
                key={title}
                className="rounded-2xl border border-white/5 bg-iron-900/70 p-6"
              >
                <p className="text-sm font-medium text-ember-400">0{index + 1}</p>
                <h2
                  className="mt-3 text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-iron-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeader
              eyebrow="Social media + your website"
              title={socialMediaObjection.question}
              description={socialMediaObjection.introduction}
            />
            <div className="space-y-5 text-iron-300">
              <p className="text-xl font-medium text-white">
                {socialMediaObjection.distinction}
              </p>
              <p className="leading-relaxed">
                {socialMediaObjection.explanation}
              </p>
              <p className="leading-relaxed">
                {socialMediaObjection.ownership}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="home-base"
        className="scroll-mt-24 border-y border-white/5 bg-iron-900/30 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Your home base"
            title="Connect every channel to one clear next step"
            description="Your website makes social media, referrals, Google visibility, content, and athlete media more effective by organizing the full path."
          />
          <HomeBaseJourney />
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="The client journey"
            title="Build. Grow. Showcase. Scale."
            description="The framework changes with the needs of your training business. Start with the foundation, then add visibility, content, and strategic support."
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainerFrameworkStages.map((stage, index) => (
              <li key={stage.title} className="border-t border-ember-500/40 pt-6">
                <p className="text-sm font-medium text-ember-400">
                  0{index + 1}
                </p>
                <h2
                  className="mt-3 text-2xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stage.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-iron-400">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="offers"
        className="scroll-mt-24 border-y border-white/5 bg-iron-900/30 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ways to work together"
            title="Start with the support your business needs now"
            description="The Trainer Growth System is one connected offering with a one-time website foundation and distinct ongoing support options. No artificial pricing tiers."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {trainerGrowthOffers.map((offer) => (
              <article
                id={offer.id}
                key={offer.id}
                className="scroll-mt-28 rounded-2xl border border-white/10 bg-iron-950/60 p-7 sm:p-8"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-ember-400">
                  {offer.type}
                </p>
                <h2
                  className="mt-4 text-3xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {offer.title}
                </h2>
                <p className="mt-4 leading-relaxed text-iron-300">
                  {offer.description}
                </p>
                <p className="mt-6 text-sm font-medium text-white">
                  What this can accomplish
                </p>
                <ul className="mt-3 space-y-3">
                  {offer.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-sm leading-relaxed text-iron-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl bg-white/5 p-4 text-sm text-iron-300">
                  <span className="font-medium text-white">A good fit for: </span>
                  {offer.bestFor}
                </p>
                <Link
                  href={`/contact?interest=trainer&service=${encodeURIComponent(offer.service)}`}
                  className="mt-6 inline-flex rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ember-400"
                >
                  {offer.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeader
                eyebrow="Athlete Recruiting Media"
                title="A trusted recruiting media partner for your athletes"
                description="Give your athletes access to a trusted recruiting media partner without adding more work to your plate."
              />
              <p className="text-sm leading-relaxed text-iron-400">
                Recruiting media is a separate athlete service, not part of the
                monthly Trainer Growth System. Trainers can refer families
                directly, while Scrapiron handles project communication,
                footage, editing, and delivery.
              </p>
              <Link
                href="/athletes"
                className="mt-8 inline-flex text-sm font-semibold text-ember-400 hover:text-ember-300"
              >
                View athlete media services →
              </Link>
            </div>
            <div className="space-y-5">
              {recruitingMediaOptions.map((option) => (
                <article
                  key={option.title}
                  className="rounded-2xl border border-white/10 bg-iron-900/60 p-6"
                >
                  <h2
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {option.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-iron-400">
                    {option.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {option.includes.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-iron-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-iron-900/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Year-round growth"
            title="Your marketing should keep pace with your season"
            description="Ongoing growth support is proactive. Each part of the year creates different opportunities to update programs, promote registration, capture content, and help athletes."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seasonalOpportunities.map((season) => (
              <article
                key={season.season}
                className="rounded-2xl border border-white/5 bg-iron-950/60 p-6"
              >
                <h2
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {season.season}
                </h2>
                <ul className="mt-5 space-y-3">
                  {season.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-iron-400"
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

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Who it is for"
            title="Built for trainers across sports and business stages"
            description="The system can support a solo private coach, a small academy, or an established multi-coach training business."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sportsServed.map((sport) => (
              <li
                key={sport}
                className="rounded-xl border border-white/5 bg-iron-900/50 px-5 py-4 text-sm text-iron-300"
              >
                {sport}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Frequently asked questions"
            title="Practical answers before we talk"
            description="Every training business is different. These answers explain the structure without locking you into services you do not need."
          />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {trainerGrowthFaqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-white">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-xl text-ember-400 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-relaxed text-iron-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        heading="Build your Trainer Growth System"
        description="Tell us about your sport, programs, current website, and where your growth process feels disconnected. We’ll recommend a practical next step."
      />
    </>
  );
}
