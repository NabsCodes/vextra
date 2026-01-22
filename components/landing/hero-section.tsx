"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { SiteHeader } from "./header";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden">
      {/* Floating geometric accent */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-24 right-0 md:right-10 pointer-events-none opacity-10"
      >
        <Image
          src="/Secondary Mark 02.png"
          alt=""
          width={400}
          height={400}
          className="w-64 h-64 md:w-96 md:h-96 opacity-10"
        />
      </motion.div>

      <SiteHeader />

      {/* Hero Content */}
      <motion.main
        style={{ opacity, scale }}
        className="relative z-10 px-6 md:px-12 lg:px-20"
      >
        <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center py-12 pb-24">
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

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 md:mt-14 text-lg md:text-xl text-charcoal-grey/60 max-w-xl leading-relaxed"
          >
            We build simple, reliable solutions that solve real problems for
            communities, governments, and businesses across Nigeria and Africa.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="mailto:info@vextralimited.com?subject=Let's%20Talk"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 mt-8 px-6 py-3.5 bg-charcoal-grey text-white text-sm font-medium tracking-wide transition-colors hover:bg-deep-teal w-fit"
          >
            <span>Let&apos;s talk</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </div>
      </motion.main>
    </section>
  );
}
