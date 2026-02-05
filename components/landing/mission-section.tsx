"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function MissionSection() {
  return (
    <section className="bg-charcoal-grey relative overflow-hidden py-24 text-white md:py-32">
      {/* Background geometric accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/secondary-mark-02.png"
          alt="secondary mark"
          width={320}
          height={320}
          className="absolute -bottom-20 -left-20 h-80 w-80 opacity-[0.03] invert"
        />
        <Image
          src="/secondary-mark-02.png"
          alt="secondary mark"
          width={200}
          height={200}
          className="absolute -top-10 -right-10 h-48 w-48 rotate-45 opacity-10 invert"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-vextra-green font-medium">02</span>
            <div className="bg-vextra-green h-px w-12" />
            <span className="text-sm tracking-wide text-white/60">
              Our Mission
            </span>
          </div>
        </motion.div>

        {/* Mission statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display max-w-4xl text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-6xl"
        >
          To build dependable digital products that solve{" "}
          <span className="text-vextra-green">real problems</span> for real
          people.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60"
        >
          This mission drives our daily decisions, from product discovery to
          engineering execution and long-term system support. We aim to be
          recognized as the company that consistently ships functional,
          production-quality products.
        </motion.p>

        {/* Brand tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/primary-mark.png"
              alt="primary mark"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-display text-2xl font-medium tracking-tight md:text-3xl">
              Built to Work
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
