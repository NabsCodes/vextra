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
        className="fixed top-1/2 left-4 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 mix-blend-difference md:left-8 md:flex"
      >
        <div className="h-16 w-px bg-white/30" />
        <span className="rotate-180 text-[10px] tracking-widest text-white/60 uppercase [writing-mode:vertical-lr]">
          Est. 2025
        </span>
        <div className="h-16 w-px bg-white/30" />
      </motion.div>

      {/* Right side - Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed top-1/2 right-4 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 mix-blend-difference md:right-8 md:flex"
      >
        <span className="rotate-180 text-[10px] tracking-widest text-white/60 uppercase [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="flex flex-col gap-1.5">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-vextra-green h-1.5 w-1.5 rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="bg-vextra-green/60 h-1.5 w-1.5 rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="bg-vextra-green/30 h-1.5 w-1.5 rounded-full"
          />
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-white/40"
        />
      </motion.div>
    </>
  );
}
