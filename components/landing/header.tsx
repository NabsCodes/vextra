"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { SocialLinks } from "@/components/landing/social-links";

export function SiteHeader() {
  return (
    <header className="bg-off-white/90 border-charcoal-grey/10 sticky top-0 z-50 border-b px-6 py-4 backdrop-blur-xl md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between gap-4"
      >
        <Link href="/" aria-label="Vextra Limited home">
          <Image
            src="/full-color-logo.png"
            alt="Vextra Limited"
            width={200}
            height={60}
            className="h-8 w-auto md:h-9"
            quality={100}
            priority
          />
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <SocialLinks
            iconOnly
            className="gap-2"
            linkClassName="text-charcoal-grey/50 hover:text-vextra-green border-charcoal-grey/10 h-8 w-8 sm:h-9 sm:w-9"
          />
          <Link
            href="/contact"
            className="text-charcoal-grey/60 hover:text-vextra-green flex items-center gap-2 text-sm transition-colors duration-300"
            aria-label="Start a project with Vextra Limited"
          >
            <span className="hidden sm:inline">Start a Project</span>
            <span className="border-charcoal-grey/10 text-charcoal-grey/70 inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white/70 sm:hidden">
              <FaEnvelope className="h-4 w-4" />
            </span>
            <FaArrowRight className="hidden h-4 w-4 sm:inline" />
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
