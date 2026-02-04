"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export function SiteHeader() {
  return (
    <header className="relative z-10 px-6 py-6 md:py-8 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <Image
          src="/Full Color Logo.png"
          alt="Vextra Limited"
          width={200}
          height={60}
          className="h-8 md:h-10 w-auto"
          quality={100}
          priority
        />
        <motion.a
          href="mailto:info@vextralimited.com"
          className="text-sm text-charcoal-grey/60 hover:text-vextra-green transition-colors duration-300 flex items-center gap-2"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.3 }}
          aria-label="Email Vextra Limited"
        >
          <span className="hidden sm:inline">info@vextralimited.com</span>
          <span className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-grey/10 bg-white/70 text-charcoal-grey/70 shadow-sm">
            <FaEnvelope className="h-4 w-4" />
          </span>
          <FaArrowRight className="hidden sm:inline w-4 h-4" />
        </motion.a>
      </motion.div>
    </header>
  );
}
