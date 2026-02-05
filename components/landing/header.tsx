"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export function SiteHeader() {
  return (
    <header className="relative z-10 px-6 py-6 md:px-12 md:py-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <Image
          src="/full-color-logo.png"
          alt="Vextra Limited"
          width={200}
          height={60}
          className="h-8 w-auto md:h-10"
          quality={100}
          priority
        />
        <motion.a
          href="mailto:info@vextralimited.com"
          className="text-charcoal-grey/60 hover:text-vextra-green flex items-center gap-2 text-sm transition-colors duration-300"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.3 }}
          aria-label="Email Vextra Limited"
        >
          <span className="hidden sm:inline">info@vextralimited.com</span>
          <span className="border-charcoal-grey/10 text-charcoal-grey/70 inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white/70 shadow-sm sm:hidden">
            <FaEnvelope className="h-4 w-4" />
          </span>
          <FaArrowRight className="hidden h-4 w-4 sm:inline" />
        </motion.a>
      </motion.div>
    </header>
  );
}
