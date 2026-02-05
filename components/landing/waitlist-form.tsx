"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state !== "idle") return;

    // Basic validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    console.log("[Waitlist] Submitting email:", email);
    setState("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      console.log("[Waitlist] Response status:", response.status);
      const data = await response.json();
      console.log("[Waitlist] Response data:", data);

      if (response.ok) {
        setState("success");
        setEmail("");
        toast.success("You're on the list — we'll be in touch soon!");
      } else {
        setState("idle");
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("[Waitlist] Error:", error);
      setState("idle");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-sm">
      <AnimatePresence mode="wait">
        {state !== "success" ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <label
              htmlFor="waitlist-email"
              className="text-charcoal-grey/60 mb-3 block text-[11px] font-medium tracking-[0.2em] uppercase"
            >
              Get notified when we launch
            </label>

            <form onSubmit={handleSubmit} className="group relative">
              <input
                id="waitlist-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={state === "loading"}
                className={cn(
                  "border-charcoal-grey/30 w-full border bg-white/50 backdrop-blur-sm",
                  "text-charcoal-grey placeholder:text-charcoal-grey/30",
                  "h-12 rounded-full pr-14 pl-5",
                  "text-sm transition-all duration-300 outline-none",
                  "focus:border-vextra-green focus:ring-vextra-green/10 focus:bg-white focus:ring-4",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                )}
              />
              <button
                type="submit"
                disabled={state === "loading" || !email}
                className={cn(
                  "absolute top-1.5 right-1.5 bottom-1.5 aspect-square rounded-full",
                  "flex items-center justify-center transition-all duration-300",
                  "focus:ring-vextra-green focus:ring-2 focus:ring-offset-1 focus:outline-none",
                  email
                    ? "bg-vextra-green shadow-vextra-green/20 hover:bg-deep-teal text-white shadow-lg hover:scale-105 active:scale-95"
                    : "bg-charcoal-grey/5 text-charcoal-grey/20 cursor-not-allowed",
                )}
              >
                {state === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>

            <p className="text-charcoal-grey/60 mt-3 text-[10px] sm:text-xs">
              By signing up, you agree to our{" "}
              <a
                href="/privacy"
                className="hover:text-vextra-green decoration-charcoal-grey/20 hover:decoration-vextra-green underline underline-offset-2 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
            className="border-vextra-green/20 bg-vextra-green/5 flex flex-col items-center justify-center rounded-2xl border p-6 text-center"
          >
            <div className="bg-vextra-green shadow-vextra-green/20 mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="text-charcoal-grey text-sm font-semibold">
              You&apos;re on the list
            </h3>
            <p className="text-charcoal-grey/60 mt-1 text-xs">
              We&apos;ll notify you when we launch.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
