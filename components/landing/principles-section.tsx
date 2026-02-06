"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    title: "Simplicity",
    description:
      "The best solutions are clear. We build tools people can actually understand and use immediately.",
  },
  {
    title: "Quality",
    description:
      "We deliver production-ready systems designed to perform reliably at scale with real users.",
  },
  {
    title: "Execution",
    description:
      "We measure success by delivery. What we ship is the only metric that truly matters.",
  },
  {
    title: "Usefulness",
    description:
      "Every product must make someone's work easier, faster, or more effective.",
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
              Core Principles
            </span>
          </div>
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
