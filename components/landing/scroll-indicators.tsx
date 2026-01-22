"use client";

import { motion } from "motion/react";

export function ScrollIndicators() {
  return (
    <>
      {/* Left side - Est. 2025 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 mix-blend-difference"
      >
        <div className="w-px h-16 bg-white/30" />
        <span className="text-[10px] tracking-widest uppercase text-white/60 [writing-mode:vertical-lr] rotate-180">
          Est. 2025
        </span>
        <div className="w-px h-16 bg-white/30" />
      </motion.div>

      {/* Right side - Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3 mix-blend-difference"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/60 [writing-mode:vertical-lr] rotate-180">
          Scroll
        </span>
        <div className="flex flex-col gap-1.5">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-vextra-green"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="w-1.5 h-1.5 rounded-full bg-vextra-green/60"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="w-1.5 h-1.5 rounded-full bg-vextra-green/30"
          />
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-white/40"
        />
      </motion.div>
    </>
  );
}
