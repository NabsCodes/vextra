import { HeroSection } from "@/components/landing/hero-section";
import { MissionSection } from "@/components/landing/mission-section";
import { PrinciplesSection } from "@/components/landing/principles-section";
import { SiteFooter } from "@/components/landing/footer";
import { ScrollIndicators } from "@/components/landing/scroll-indicators";

export default function Home() {
  return (
    <div className="bg-off-white">
      <ScrollIndicators />
      <main>
        <HeroSection />
        <MissionSection />
        <PrinciplesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
