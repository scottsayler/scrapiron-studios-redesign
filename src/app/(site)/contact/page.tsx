import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

const CONTACT_DESCRIPTION =
  "Contact Scrapiron Studios about organization websites, recruiting videos, athlete highlight reels, photography, or sports event coverage.";

const interestTitles: Record<string, string> = {
  trainer: "Contact — Trainers",
  organization: "Contact — Organizations",
  athlete: "Contact — Athletes",
  event: "Contact — Events",
};

type ContactSearchParams = Promise<{
  interest?: string | string[];
  service?: string | string[];
}>;

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: ContactSearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  const interest = firstParam(params.interest);
  const service = firstParam(params.service);
  const hasParams = Boolean(interest || service);

  let title = "Contact";
  if (interest && interestTitles[interest] && service) {
    title = `${interestTitles[interest]} — ${service}`;
  } else if (interest && interestTitles[interest]) {
    title = interestTitles[interest];
  } else if (service) {
    title = `Contact — ${service}`;
  }

  return createMetadata({
    title,
    description: CONTACT_DESCRIPTION,
    path: "/contact",
    index: !hasParams,
  });
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Scrapiron Studios"
        description="Tell us whether you need help growing a sports organization, creating athlete recruiting content, or covering an event. We will follow up with clear next steps."
        showBackground
      />
      <ContactSection
        heading="Project inquiry"
        description="Select the service you need. Additional fields will appear when they help us respond faster."
      />
    </>
  );
}
