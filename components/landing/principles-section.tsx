"use client";

import { motion } from "motion/react";
import { FaLayerGroup, FaShieldAlt, FaBolt, FaBullseye } from "react-icons/fa";

const principles = [
  {
    title: "Simplicity",
    icon: FaLayerGroup,
    description:
      "The best solutions are clear, not complex. We build tools people can actually understand and use.",
  },
  {
    title: "Quality",
    icon: FaShieldAlt,
    description:
      "We deliver production-ready systems designed to perform reliably at scale with real users.",
  },
  {
    title: "Execution",
    icon: FaBolt,
    description:
      "We measure success by what we ship, not what we promise. Delivery is our primary metric.",
  },
  {
    title: "Usefulness",
    icon: FaBullseye,
    description:
      "Every product must make someone's work easier, faster, or more effective.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="bg-off-white relative py-24 md:py-32">
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
            <div className="bg-vextra-green h-px w-12" />
            <span className="text-charcoal-grey/70 text-sm tracking-wide">
              Core Principles
            </span>
          </div>
        </motion.div>

        {/* Principles grid */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
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
                  <span className="text-charcoal-grey/30 mt-2 text-xs font-medium">
                    0{i + 1}
                  </span>
                  <div className="border-charcoal-grey/10 group-hover:border-vextra-green flex-1 border-l pl-6 transition-colors duration-300">
                    <Icon className="text-vextra-green/50 group-hover:text-vextra-green mb-4 h-5 w-5 transition-colors duration-300" />
                    <h3 className="font-display text-vextra-green mb-3 text-2xl font-medium md:text-3xl">
                      {principle.title}
                    </h3>
                    <p className="text-charcoal-grey/60 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
