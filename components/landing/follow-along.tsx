"use client";

import { SocialLinks } from "@/components/landing/social-links";

export function FollowAlong() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <span className="text-charcoal-grey/55 text-sm tracking-wide">
        Follow along
      </span>
      <SocialLinks
        iconOnly
        className="gap-2"
        linkClassName="text-charcoal-grey/60"
      />
    </div>
  );
}
