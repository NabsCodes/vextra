"use client";

import { motion } from "motion/react";

const principles = [
  {
    title: "Simplicity",
    description:
      "The best solutions are clear, not complex. We build tools people can actually understand and use.",
  },
  {
    title: "Quality",
    description:
      "We deliver production-ready systems designed to perform reliably at scale with real users.",
  },
  {
    title: "Execution",
    description:
      "We measure success by what we ship, not what we promise. Delivery is our primary metric.",
  },
  {
    title: "Usefulness",
    description:
      "Every product must make someone's work easier, faster, or more effective.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="py-24 md:py-32 bg-off-white relative">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="text-vextra-green font-medium">03</span>
            <div className="w-12 h-px bg-vextra-green" />
            <span className="text-sm tracking-wide text-charcoal-grey/70">
              Core Principles
            </span>
          </div>
        </motion.div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              className="group cursor-default"
            >
              <div className="flex items-start gap-6">
                <span className="text-xs text-charcoal-grey/30 font-medium mt-2">
                  0{i + 1}
                </span>
                <div className="flex-1 border-l border-charcoal-grey/10 pl-6 group-hover:border-vextra-green transition-colors duration-300">
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-vextra-green mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-charcoal-grey/60 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
