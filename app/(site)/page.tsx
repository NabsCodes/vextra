import { HeroSection } from "@/components/home/hero-section";
import { Marquee } from "@/components/home/marquee";
import { MissionSection } from "@/components/home/mission-section";
import { PrinciplesSection } from "@/components/home/principles-section";
import { SelectedWorkSection } from "@/components/home/selected-work-section";
import { WhatWeBuildSection } from "@/components/home/what-we-build-section";
import { WorkInProgress } from "@/components/home/work-in-progress";
import { ScrollIndicators } from "@/components/shared/scroll-indicators";
import { seoContent } from "@/content/seo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(seoContent.routes.home);

export default function Home() {
  return (
    <>
      <ScrollIndicators />
      <main>
        <HeroSection />
        <WorkInProgress />
        <SelectedWorkSection />
        <WhatWeBuildSection />
        <PrinciplesSection />
        <MissionSection />
        <Marquee />
      </main>
    </>
  );
}
