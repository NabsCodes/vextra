"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white overflow-hidden relative">
      {/* Decorative grid lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-soft-grey/40" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-soft-grey/40" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-soft-grey/40" />
      </div>

      {/* Side Decorations - Left */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-px h-20 bg-charcoal-grey/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="w-2 h-2 bg-vextra-green rotate-45"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="text-[10px] tracking-widest uppercase text-charcoal-grey/40"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Est. 2025
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="w-px h-20 bg-charcoal-grey/20"
        />
      </div>

      {/* Side Decorations - Right */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3 + i * 0.15, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
              className="w-1 h-1 rounded-full bg-vextra-green"
            />
          ))}
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-[10px] tracking-widest uppercase text-charcoal-grey/40"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-charcoal-grey/30"
        />
      </div>

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
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center py-12">
          {/* Coming Soon - Editorial Style */}
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

          {/* Hero Text */}
          <div className="relative">

            <h1 className="font-display text-[13vw] md:text-[10vw] lg:text-[8vw] font-semibold tracking-tight leading-[0.9] text-charcoal-grey">
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

            {/* Mobile accent - horizontal bar above text */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -top-6 left-0 h-1 w-16 bg-vextra-green origin-left md:hidden"
            />
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 md:mt-14"
          >
            <p className="text-lg md:text-xl text-charcoal-grey/60 max-w-xl leading-relaxed">
              We build simple, reliable solutions that solve real problems
              for communities, governments, and businesses across Nigeria and Africa.
            </p>

            {/* CTA Button */}
            <motion.a
              href="mailto:info@vextralimited.com?subject=Let's%20Talk"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-charcoal-grey text-white text-sm font-medium tracking-wide group transition-colors hover:bg-deep-teal"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Built to Work - Brand Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 md:mt-20"
          >
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="h-px bg-charcoal-grey/20"
              />
              <span className="font-display text-2xl md:text-3xl font-medium tracking-tight text-charcoal-grey">
                Built to Work
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="mt-4 text-sm text-charcoal-grey/50 max-w-md pl-14"
            >
              Solutions that work beyond pitch decks and prototypes.
              Production-ready systems designed for real users.
            </motion.p>
          </motion.div>

          {/* Core Principles Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {["Simplicity", "Quality", "Execution", "Usefulness"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.1)" }}
                className="px-4 py-2 text-xs tracking-wider uppercase border border-charcoal-grey/15 text-charcoal-grey/60 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Bottom Section */}
      <footer className="relative z-10 px-6 py-12 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-charcoal-grey/10 pt-8"
        >
          {/* Large decorative text */}
          <div className="font-display text-[25vw] md:text-[18vw] font-bold tracking-tighter leading-none text-charcoal-grey/5 select-none absolute bottom-0 right-0 overflow-hidden pointer-events-none">
            VEXTRA
          </div>

          <div className="relative">
            <span className="block text-xs tracking-widest uppercase text-charcoal-grey/40 mb-3">
              Get in touch
            </span>
            <motion.a
              href="mailto:info@vextralimited.com"
              className="text-lg text-charcoal-grey hover:text-vextra-green transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              info@vextralimited.com
            </motion.a>
          </div>

          <div className="relative flex items-center gap-8">
            {["LinkedIn", "Twitter"].map((social) => (
              <motion.a
                key={social}
                href={`https://${social.toLowerCase()}.com/${social === "LinkedIn" ? "company/" : ""}vextra`}
                className="text-sm text-charcoal-grey/60 hover:text-vextra-green transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {social}
              </motion.a>
            ))}
            <span className="text-sm text-charcoal-grey/40">
              © 2025
            </span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
