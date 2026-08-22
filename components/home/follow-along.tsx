"use client";

import { SocialLinks } from "@/components/layout/social-links";
import { homePageContent } from "@/content/home";

export function FollowAlong() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <span className="text-charcoal-grey/55 text-sm tracking-wide">
        {homePageContent.hero.followLabel}
      </span>
      <SocialLinks
        iconOnly
        className="gap-2"
        linkClassName="text-charcoal-grey/60"
      />
    </div>
  );
}
