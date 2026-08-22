"use client";

import { motion } from "motion/react";

/**
 * Structural 404 visual — a route diagram with one missing hop.
 * Decorative only; copy carries the meaning.
 */
export function NotFoundIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      aria-hidden
    >
      {/* Soft brand glow behind the frame */}
      <motion.div
        className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.18)_0%,transparent_70%)] lg:inset-6"
        animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="border-charcoal-grey/10 relative flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-white">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(47,58,63,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Top chrome bar — product-frame cue */}
        <div className="border-charcoal-grey/10 relative flex items-center gap-2 border-b px-4 py-3">
          <span className="bg-charcoal-grey/15 size-2 rounded-full" />
          <span className="bg-charcoal-grey/15 size-2 rounded-full" />
          <span className="bg-vextra-green/70 size-2 rounded-full" />
          <span className="text-charcoal-grey/35 ml-2 font-mono text-[10px] tracking-wider uppercase">
            route · unresolved
          </span>
        </div>

        <div className="relative flex flex-1 items-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          {/* Oversized 404 mark */}
          <div className="pointer-events-none absolute inset-x-5 top-6 flex justify-end select-none sm:inset-x-8 sm:top-8 lg:inset-x-10 lg:top-10">
            <span className="font-display text-charcoal-grey/6 text-[5.5rem] leading-none font-semibold tracking-tighter sm:text-[7rem] lg:text-[8.5rem] xl:text-[10rem]">
              404
            </span>
          </div>

          <svg
            viewBox="0 0 360 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 aspect-360/220 w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-label="404 illustration"
          >
            {/* Path: solid hops */}
            <path
              d="M48 150 H120 C136 150 144 120 160 110 H210"
              stroke="#2f3a3f"
              strokeOpacity="0.22"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Missing hop — dashed teal */}
            <motion.path
              d="M210 110 H270 C286 110 294 140 310 150"
              stroke="#14b8a6"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M210 110 H270 C286 110 294 140 310 150"
              stroke="#14b8a6"
              strokeOpacity="0.25"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeDasharray="6 8"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            />

            {/* Nodes */}
            <circle cx="48" cy="150" r="7" fill="#14b8a6" fillOpacity="0.2" />
            <circle cx="48" cy="150" r="3.5" fill="#14b8a6" />

            <circle
              cx="160"
              cy="110"
              r="7"
              fill="#2f3a3f"
              fillOpacity="0.08"
              stroke="#2f3a3f"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            <circle cx="160" cy="110" r="3" fill="#2f3a3f" fillOpacity="0.55" />

            {/* Gap marker — hollow node where the route breaks */}
            <motion.circle
              cx="240"
              cy="110"
              r="11"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="1.5"
              strokeDasharray="3 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "240px 110px" }}
            />
            <circle
              cx="240"
              cy="110"
              r="4"
              fill="#f9fafb"
              stroke="#14b8a6"
              strokeWidth="1.75"
            />

            <circle
              cx="310"
              cy="150"
              r="7"
              fill="#2f3a3f"
              fillOpacity="0.08"
              stroke="#2f3a3f"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
            <circle cx="310" cy="150" r="3" fill="#2f3a3f" fillOpacity="0.4" />

            {/* Abstract UI blocks — evidence of a product surface */}
            <rect
              x="48"
              y="44"
              width="72"
              height="10"
              rx="3"
              fill="#2f3a3f"
              fillOpacity="0.1"
            />
            <rect
              x="48"
              y="62"
              width="48"
              height="8"
              rx="2"
              fill="#2f3a3f"
              fillOpacity="0.06"
            />
            <rect
              x="248"
              y="44"
              width="64"
              height="36"
              rx="6"
              fill="#14b8a6"
              fillOpacity="0.08"
              stroke="#14b8a6"
              strokeOpacity="0.25"
              strokeWidth="1"
            />
            <rect
              x="258"
              y="54"
              width="28"
              height="6"
              rx="2"
              fill="#14b8a6"
              fillOpacity="0.35"
            />
            <rect
              x="258"
              y="66"
              width="44"
              height="4"
              rx="2"
              fill="#14b8a6"
              fillOpacity="0.18"
            />

            {/* Status label */}
            <text
              x="48"
              y="196"
              fill="#2f3a3f"
              fillOpacity="0.45"
              fontSize="11"
              fontFamily="var(--font-geist), ui-sans-serif, system-ui, sans-serif"
              letterSpacing="0.12em"
            >
              EXPECTED PATH
            </text>
            <text
              x="210"
              y="196"
              fill="#14b8a6"
              fontSize="11"
              fontFamily="var(--font-geist), ui-sans-serif, system-ui, sans-serif"
              letterSpacing="0.12em"
            >
              MISSING HOP
            </text>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
