"use client";

import { motion } from "motion/react";

const offerings = [
  {
    category: "For customers",
    title: "Customer Platforms",
    description:
      "Web and mobile products built for real users, real transactions, and real growth.",
  },
  {
    category: "For operations",
    title: "Internal Tools",
    description:
      "Dashboards, portals, and workflow systems that reduce manual work and improve day-to-day operations.",
  },
  {
    category: "For systems",
    title: "APIs & Integrations",
    description:
      "Backend systems and integrations that connect tools, automate processes, and keep data moving.",
  },
];

export function WhatWeBuildSection() {
  return (
    <section className="bg-charcoal-grey relative overflow-hidden py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-vextra-green font-medium">02</span>
            <div className="bg-vextra-green h-px w-12" />
            <span className="text-sm tracking-wide text-white/60">
              What We Build
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10 max-w-3xl md:mb-14"
        >
          <h2 className="font-display text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            Software built for real operations.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            We create dependable digital systems that help teams serve
            customers, run operations, and grow with confidence.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="hover:border-vextra-green/40 rounded-2xl border border-white/10 bg-white/4 p-6 transition-all duration-300 hover:bg-white/6 hover:shadow-[0_18px_45px_rgba(20,184,166,0.12)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-white/45 uppercase">
                  {offering.category}
                </span>
                <span className="text-vextra-green/80 font-mono text-xs font-bold tracking-widest">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-display mt-8 text-2xl font-medium tracking-tight text-white">
                {offering.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65 md:text-base">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
