"use client";

import { motion } from "motion/react";

const items = [
  "Built to Work",
  "Web Apps",
  "Mobile Apps",
  "Custom Software",
  "Global Teams",
  "Production Ready",
  "Africa",
  "Nigeria",
  "Real Problems",
  "APIs & Integrations",
  "Execution",
  "Quality",
  "Est. 2025",
  "Real Solutions",
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
