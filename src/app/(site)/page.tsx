import { AudiencePathways } from "@/components/AudiencePathways";
import { FinalCTA } from "@/components/FinalCTA";
import { GrowthPartner } from "@/components/GrowthPartner";
import { Hero } from "@/components/Hero";
import { OrganizationGrowth } from "@/components/OrganizationGrowth";
import { RecruitingSection } from "@/components/RecruitingSection";
import { VideoSection } from "@/components/VideoGrid";
import { WhyScrapiron } from "@/components/WhyScrapiron";
import { allVideos } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <AudiencePathways />
      <VideoSection
        id="work"
        eyebrow="Sports highlights"
        title="We are not watching sports from the outside."
        description="We are on the field, on the sidelines, and inside the communities we serve. Our sports highlights, recruiting films, photography, and event coverage shape how we approach every website, brand, and digital project."
        videos={allVideos}
        cta={{ href: "/sports-highlights", label: "View All Sports Highlights" }}
      />
      <OrganizationGrowth />
      <RecruitingSection />
      <WhyScrapiron />
      <GrowthPartner />
      <FinalCTA />
    </>
  );
}
