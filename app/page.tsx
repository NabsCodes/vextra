import { HeroSection } from "@/components/landing/hero-section";
import { MissionSection } from "@/components/landing/mission-section";
import { PrinciplesSection } from "@/components/landing/principles-section";
import { SiteFooter } from "@/components/landing/footer";
import { ScrollIndicators } from "@/components/landing/scroll-indicators";
import { WorkInProgress } from "@/components/landing/work-in-progress";
import { Marquee } from "@/components/landing/marquee";
import { WhatWeBuildSection } from "@/components/landing/what-we-build-section";

export default function Home() {
  return (
    <div className="bg-off-white">
      <ScrollIndicators />
      <main>
        <HeroSection />
        <WorkInProgress />
        <WhatWeBuildSection />
        <PrinciplesSection />
        <MissionSection />
        <Marquee />
      </main>
      <SiteFooter />
    </div>
  );
}
