"use client";

import { motion } from "motion/react";

const items = [
  "Built to Work",
  "Simplicity",
  "Nigeria",
  "Africa",
  "Dependable",
  "Real Problems",
  "Execution",
  "Quality",
  "Real Solutions",
  "Est. 2025",
];

export function Marquee() {
  return (
    <div className="bg-charcoal-grey overflow-hidden">
      <motion.div
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex w-max py-4"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[11px] tracking-[0.28em] whitespace-nowrap text-white/35 uppercase">
              {item}
            </span>
            <span className="text-vextra-green/60 mx-5">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
