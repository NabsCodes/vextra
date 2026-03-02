"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/landing/header";
import { WaitlistForm } from "@/components/landing/waitlist-form";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dot grid — structural texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(47,58,63,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      {/* Ambient glow — drifts slowly behind content */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 75%, rgba(20,184,166,0.1) 0%, transparent 60%)",
        }}
        animate={{ x: [0, -45, 30, 0], y: [0, 25, -18, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-linear-to-b from-white/90 via-white/40 to-transparent"
        aria-hidden
      />
      {/* Floating geometric accent */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="pointer-events-none absolute top-24 right-0 opacity-10 md:right-10"
      >
        <Image
          src="/secondary-mark-02.png"
          alt="secondary mark"
          width={400}
          height={400}
          className="h-64 w-64 opacity-10 md:h-96 md:w-96"
        />
      </motion.div>

      <SiteHeader />

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="flex min-h-[calc(100vh-200px)] flex-col justify-center py-12 pb-24">
          {/* Section indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 md:mb-14"
          >
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
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
                className="bg-vextra-green h-px"
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-charcoal-grey/70 text-sm tracking-wide"
              >
                Web, Mobile &amp; Custom Software
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="text-charcoal-grey/30 text-sm"
              >
                &middot;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="text-charcoal-grey/50 text-sm tracking-wide"
              >
                Full site launching soon
              </motion.span>
            </div>
          </motion.div>

          {/* Hero headline */}
          <h1 className="font-display text-charcoal-grey text-[12vw] leading-[0.9] font-semibold tracking-tight md:text-[9vw] lg:text-[7vw]">
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
              className="text-vextra-green block"
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
            className="text-charcoal-grey/60 mt-10 max-w-2xl text-lg leading-relaxed md:text-xl"
          >
            We design and build web apps, mobile apps, and custom software for
            teams that need reliable execution in the real world, globally and
            across Nigeria and Africa.
          </motion.p>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="mt-6 flex flex-wrap gap-2 md:mt-8"
          >
            {[
              "Web Apps",
              "Mobile Apps",
              "Custom Software",
              "APIs & Integrations",
            ].map((label) => (
              <span
                key={label}
                className="border-charcoal-grey/15 text-charcoal-grey/50 rounded-full border bg-white/60 px-3 py-1 text-xs tracking-wide"
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Waitlist signup */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.15 }}
            className="mt-10"
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
