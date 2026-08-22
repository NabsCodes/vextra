"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import { NotFoundIllustration } from "@/components/shared/not-found-illustration";
import { systemPagesContent } from "@/content/system-pages";
import { cn } from "@/lib/utils";

const content = systemPagesContent.notFound;

export function NotFoundView() {
  return (
    <main className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(47,58,63,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 85% 20%, rgba(20,184,166,0.09) 0%, transparent 65%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <section className="relative px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-20">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-wrap items-center gap-3 md:mb-10 md:gap-4"
            >
              <span className="text-vextra-green font-medium">00</span>
              <div className="bg-vextra-green h-px w-12" />
              <span className="text-charcoal-grey/70 text-sm tracking-wide">
                {content.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display text-charcoal-grey max-w-xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-4xl md:text-5xl"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-charcoal-grey/55 mt-5 max-w-lg text-base leading-relaxed md:text-lg"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              {content.ctas.map((cta) => (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className={cn(
                    "group inline-flex w-full items-center justify-center gap-3 rounded-lg px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out active:scale-[0.98] sm:w-auto",
                    cta.variant === "primary"
                      ? "bg-vextra-green text-charcoal-grey hover:bg-deep-teal hover:gap-4 hover:text-white"
                      : "border-charcoal-grey/15 text-charcoal-grey hover:border-vextra-green/40 hover:text-vextra-green border bg-white",
                  )}
                >
                  <span>{cta.label}</span>
                  {cta.variant === "primary" ? (
                    <FaArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  ) : null}
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="border-charcoal-grey/10 mt-10 border-t pt-8"
            >
              <p className="text-charcoal-grey/45 text-xs font-medium tracking-[0.18em] uppercase">
                {content.popularEyebrow}
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {content.popularLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-charcoal-grey/70 hover:text-vextra-green inline-flex text-sm font-medium underline-offset-4 transition-all duration-300 ease-out hover:translate-x-1 hover:underline md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex w-full min-w-0 items-stretch self-stretch">
            <NotFoundIllustration />
          </div>
        </div>
      </section>
    </main>
  );
}
