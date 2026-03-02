"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    title: "Execution First",
    description:
      "We prioritize working software over vague strategy and endless decks.",
  },
  {
    title: "Production Mindset",
    description:
      "We build for maintainability, usability, and long-term reliability from the start.",
  },
  {
    title: "Real-World Use",
    description:
      "Our focus is practical software that solves operational problems, not just polished demos.",
  },
  {
    title: "Regional Depth",
    description:
      "We work with a global mindset and bring real execution context from Nigeria and Africa.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="bg-off-white relative py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-vextra-green font-medium">03</span>
            <div className="bg-vextra-green h-px w-12" />
            <span className="text-charcoal-grey/70 text-sm tracking-wide">
              Why Vextra
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          <h2 className="font-display text-charcoal-grey text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            Built to Work
          </h2>
          <p className="text-charcoal-grey/60 mt-5 max-w-2xl text-lg leading-relaxed">
            We care less about noise and more about whether the product
            performs where it matters: in production, under real use, for real
            people.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="border-charcoal-grey/10 bg-charcoal-grey/10 grid gap-px overflow-hidden border md:grid-cols-2 lg:rounded-xl">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group hover:bg-charcoal-grey relative bg-white transition-all duration-500 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_3px_0_0_0_#14b8a6]"
            >
              <div className="flex h-full flex-col justify-between p-6 md:p-8">
                {/* Header: Number & Title */}
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-charcoal-grey text-xl font-medium transition-colors duration-300 group-hover:text-white md:text-2xl">
                    {principle.title}
                  </h3>
                  <span className="text-charcoal-grey/20 group-hover:text-vextra-green font-mono text-xs font-bold tracking-widest transition-colors duration-300">
                    0{i + 1}
                  </span>
                </div>

                {/* Body & Action */}
                <div className="mt-8 md:mt-10">
                  <p className="text-charcoal-grey/60 max-w-sm text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/70 md:text-base">
                    {principle.description}
                  </p>

                  {/* Architectural Accent Line */}
                  <div className="border-charcoal-grey/10 mt-6 flex items-center justify-between border-t pt-4 transition-colors duration-300 group-hover:border-white/10">
                    <div className="h-px flex-1 bg-transparent" />
                    <ArrowUpRight className="text-charcoal-grey/30 group-hover:text-vextra-green h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
