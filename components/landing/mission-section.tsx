"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function MissionSection() {
  return (
    <section className="bg-charcoal-grey text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background geometric accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/Secondary Mark 02.png"
          alt=""
          width={320}
          height={320}
          className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.03] invert"
        />
        <Image
          src="/Secondary Mark 02.png"
          alt=""
          width={200}
          height={200}
          className="absolute -top-10 -right-10 w-48 h-48 opacity-10 rotate-45 invert"
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
            <div className="w-12 h-px bg-vextra-green" />
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
          className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] max-w-4xl"
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
          className="mt-8 text-lg text-white/60 max-w-2xl leading-relaxed"
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
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/Primary Mark.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              Built to Work
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
