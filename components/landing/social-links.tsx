"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS, type SocialLink } from "@/lib/socials";
import { cn } from "@/lib/utils";

function SocialIcon({ socialKey }: { socialKey: SocialLink["key"] }) {
  if (socialKey === "linkedin") return <FaLinkedin className="h-4 w-4" />;
  if (socialKey === "x") return <FaXTwitter className="h-4 w-4" />;
  return <FaInstagram className="h-4 w-4" />;
}

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
  iconOnly?: boolean;
};

export function SocialLinks({
  className,
  linkClassName,
  iconOnly = false,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow Vextra on ${item.label}`}
          className={cn(
            "text-charcoal-grey/55 hover:text-vextra-green inline-flex items-center gap-2 transition-colors duration-300",
            iconOnly &&
              "border-charcoal-grey/10 inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white/70",
            linkClassName,
          )}
        >
          <SocialIcon socialKey={item.key} />
          {!iconOnly ? <span className="text-sm">{item.label}</span> : null}
        </a>
      ))}
    </div>
  );
}
