"use client";

import Image from "next/image";
import { motion } from "motion/react";
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
          width={140}
          height={40}
          className="h-8 md:h-10 w-auto"
          priority
        />
        <motion.a
          href="mailto:info@vextralimited.com"
          className="text-sm text-charcoal-grey/60 hover:text-vextra-green transition-colors duration-300 flex items-center gap-2"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.3 }}
        >
          <span className="hidden sm:inline">info@vextralimited.com</span>
          <span className="sm:hidden">Contact</span>
          <FaArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </header>
  );
}
