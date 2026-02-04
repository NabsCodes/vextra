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
        <section className="border-t border-charcoal-grey/10 bg-off-white">
          <div className="px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-4 py-6 text-[11px] uppercase tracking-[0.24em] text-charcoal-grey/50">
              <span className="h-px flex-1 bg-charcoal-grey/10" />
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-vextra-green" />
                Work in progress
              </span>
              <span className="h-px flex-1 bg-charcoal-grey/10" />
            </div>
          </div>
        </section>
        <MissionSection />
        <PrinciplesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
