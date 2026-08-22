import { LegalSection } from "@/components/legal/legal-section";
import { privacyPolicy } from "@/content/legal";
import { seoContent } from "@/content/seo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(seoContent.routes.privacy);

export default function PrivacyPage() {
  return (
    <>
      <div className="border-border mb-12 border-b pb-12">
        <p className="text-charcoal-grey/80 mb-3 text-xs tracking-[0.2em] uppercase">
          {privacyPolicy.eyebrow}
        </p>
        <h1 className="font-display text-charcoal-grey mb-4 text-4xl font-medium tracking-tight md:text-5xl">
          {privacyPolicy.title}
        </h1>
        <p className="text-charcoal-grey/50 text-sm">
          Last updated: {privacyPolicy.lastUpdated}
        </p>
      </div>

      <div className="prose-charcoal space-y-8">
        {privacyPolicy.sections.map((section) => (
          <LegalSection key={section.title} {...section} />
        ))}
      </div>
    </>
  );
}
