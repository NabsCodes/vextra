import { WorkInProgress } from "@/components/landing/work-in-progress";
import { SiteHeader } from "@/components/landing/header";
import { MissionSection } from "@/components/landing/mission-section";
import { PrinciplesSection } from "@/components/landing/principles-section";
import { SelectedWorkSection } from "@/components/landing/selected-work-section";
import { SiteFooter } from "@/components/landing/footer";
import { ScrollIndicators } from "@/components/landing/scroll-indicators";
import { WhatWeBuildSection } from "@/components/landing/what-we-build-section";
import { Marquee } from "@/components/landing/marquee";
import { HeroSection } from "@/components/landing/hero-section";

export default function Home() {
  return (
    <div className="bg-off-white">
      <ScrollIndicators />
      <SiteHeader />
      <main>
        <HeroSection />
        <WorkInProgress />
        <SelectedWorkSection />
        <WhatWeBuildSection />
        <PrinciplesSection />
        <MissionSection />
        <Marquee />
      </main>
      <SiteFooter />
    </div>
  );
}
