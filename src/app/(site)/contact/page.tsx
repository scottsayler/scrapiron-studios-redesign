import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Scrapiron Studios about organization websites, recruiting videos, athlete highlight reels, photography, or sports event coverage.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="What are you trying to build?"
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
