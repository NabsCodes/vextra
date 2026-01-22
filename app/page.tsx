"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const principles = [
  {
    title: "Simplicity",
    description: "The best solutions are clear, not complex. We build tools people can actually understand and use.",
  },
  {
    title: "Quality",
    description: "We deliver production-ready systems designed to perform reliably at scale with real users.",
  },
  {
    title: "Execution",
    description: "We measure success by what we ship, not what we promise. Delivery is our primary metric.",
  },
  {
    title: "Usefulness",
    description: "Every product must make someone's work easier, faster, or more effective.",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="bg-off-white">
      {/* ============ HERO SECTION ============ */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Decorative grid lines */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-soft-grey/40" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-soft-grey/40" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-soft-grey/40" />
        </div>

        {/* Floating geometric accent */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-24 right-0 md:right-10 pointer-events-none opacity-10"
        >
          <Image
            src="/Secondary Mark 02.png"
            alt="Secondary Mark 02"
            width={400}
            height={400}
            className="w-64 h-64 md:w-96 md:h-96 opacity-10"
          />
        </motion.div>

        {/* Header */}
        <header className="relative z-10 px-6 py-6 md:py-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <Image
              src="/Full Color Logo.png"
              alt="Vextra Limited"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
            <motion.a
              href="mailto:info@vextralimited.com"
              className="text-sm text-charcoal-grey/60 hover:text-vextra-green transition-colors duration-300 flex items-center gap-2"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.3 }}
            >
              <span className="hidden sm:inline">info@vextralimited.com</span>
              <span className="sm:hidden">Contact</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </header>

        {/* Hero Content */}
        <motion.main
          style={{ opacity, scale }}
          className="relative z-10 px-6 md:px-12 lg:px-20"
        >
          <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center py-12 max-w-6xl">
            {/* Section indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 md:mb-14"
            >
              <div className="flex items-center gap-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-vextra-green font-medium"
                >
                  01
                </motion.span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="h-px bg-vextra-green"
                />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="text-sm tracking-wide text-charcoal-grey/70"
                >
                  Coming Soon
                </motion.span>
              </div>
            </motion.div>

            {/* Hero headline */}
            <h1 className="font-display text-[12vw] md:text-[9vw] lg:text-[7vw] font-semibold tracking-tight leading-[0.9] text-charcoal-grey">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="block"
              >
                Dependable
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="block text-vextra-green"
              >
                digital products
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="block"
              >
                that work.
              </motion.span>
            </h1>

            {/* Tagline & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            >
              <p className="text-lg md:text-xl text-charcoal-grey/60 max-w-xl leading-relaxed">
                We build simple, reliable solutions that solve real problems
                for communities, governments, and businesses across Nigeria and Africa.
              </p>

              <motion.a
                href="mailto:info@vextralimited.com?subject=Let's%20Talk"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal-grey text-white text-sm font-medium tracking-wide transition-colors hover:bg-deep-teal shrink-0"
              >
                <span>Let's talk</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-8 bg-charcoal-grey/30"
              />
              <span className="text-[10px] tracking-widest uppercase text-charcoal-grey/40">
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </motion.main>
      </section>

      {/* ============ MISSION SECTION (Dark) ============ */}
      <section className="bg-charcoal-grey text-white py-24 md:py-32 relative overflow-hidden">
        {/* Background geometric accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/Secondary Mark 02.png"
            alt="Secondary Mark 02"
            width={320}
            height={320}
            className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.03] invert"
          />
          <Image
            src="/Secondary Mark 02.png"
            alt="Secondary Mark 02"
            width={200}
            height={200}
            className="absolute -top-10 -right-10 w-48 h-48 opacity-10 rotate-45 invert"
          />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
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
              <span className="text-sm tracking-wide text-white/60">Our Mission</span>
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
            <span className="text-vextra-green">real problems</span> for real people.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            This mission drives our daily decisions, from product discovery to engineering
            execution and long-term system support. We aim to be recognized as the company
            that consistently ships functional, production-quality products.
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
                alt="Primary Mark"
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

      {/* ============ PRINCIPLES SECTION ============ */}
      <section className="py-24 md:py-32 bg-off-white relative">
        <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
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
              <span className="text-sm tracking-wide text-charcoal-grey/70">Core Principles</span>
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

      {/* ============ FOOTER ============ */}
      <footer className="bg-off-white px-6 py-16 md:px-12 lg:px-20 border-t border-charcoal-grey/10 relative overflow-hidden">
        {/* Large decorative text */}
        <div className="font-display text-[20vw] md:text-[15vw] font-bold tracking-tighter leading-none text-charcoal-grey/3 select-none absolute bottom-0 right-0 pointer-events-none">
          VEXTRA
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            {/* Left side */}
            <div>
              <Image
                src="/Full Color Logo.png"
                alt="Vextra Limited"
                width={120}
                height={35}
                className="h-8 w-auto mb-6"
              />
              <p className="text-charcoal-grey/50 max-w-sm text-sm leading-relaxed">
                Building dependable digital products for communities,
                governments, and businesses across Nigeria and Africa.
              </p>
            </div>

            {/* Right side */}
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
              <div>
                <span className="block text-xs tracking-widest uppercase text-charcoal-grey/40 mb-4">
                  Get in touch
                </span>
                <motion.a
                  href="mailto:info@vextralimited.com"
                  className="text-charcoal-grey hover:text-vextra-green transition-colors duration-300 block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  info@vextralimited.com
                </motion.a>
              </div>

              <div>
                <span className="block text-xs tracking-widest uppercase text-charcoal-grey/40 mb-4">
                  Follow us
                </span>
                <div className="flex flex-col gap-2">
                  {["LinkedIn", "Twitter"].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social.toLowerCase()}.com/${social === "LinkedIn" ? "company/" : ""}vextra`}
                      className="text-charcoal-grey/60 hover:text-vextra-green transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-charcoal-grey/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-sm text-charcoal-grey/40">
              © {new Date().getFullYear()} Vextra Limited. All rights reserved.
            </span>
            <div className="flex items-center gap-2 text-sm text-charcoal-grey/40">
              <Image
                src="/Primary Mark.png"
                alt="Primary Mark"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Est. 2025 • Nigeria</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
