"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Info,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { waitlistEmailSchema } from "@/lib/validation/waitlist";
import type { WaitlistApiResponse } from "@/lib/waitlist/types";

type Feedback = {
  type: "success" | "info" | "warning" | "error";
  text: string;
  assertive?: boolean;
};

export function WaitlistForm() {
  const [email, setEmail] = useState<string>("");
  const [honeypot, setHoneypot] = useState<string>("");
  const [state, setState] = useState<"idle" | "loading">("idle");
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || state === "loading") return;

    const parsedEmail = waitlistEmailSchema.safeParse(email);
    if (!parsedEmail.success) {
      setFeedback({
        type: "error",
        text: "Please enter a valid email address.",
        assertive: true,
      });
      return;
    }

    const normalizedEmail = parsedEmail.data;

    console.log("[Waitlist] Submitting email:", normalizedEmail);
    setState("loading");
    setFeedback(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail, honeypot }),
      });

      console.log("[Waitlist] Response status:", response.status);
      const data = (await response.json()) as WaitlistApiResponse;
      console.log("[Waitlist] Response data:", data);

      if (response.ok && data.success) {
        setEmail("");

        const feedbackType =
          data.status === "subscribed_new"
            ? "success"
            : data.status === "subscribed_pending_email"
              ? "warning"
              : "info";
        const successText = data.message;

        setFeedback({
          type: feedbackType,
          text: successText,
        });
        return;
      }

      if (!response.ok && !data.success) {
        const errorText =
          data.message || "Something went wrong. Please try again.";

        const feedbackType =
          data.status === "rate_limited"
            ? "warning"
            : data.status === "server_error"
              ? "error"
              : "error";

        setFeedback({
          type: feedbackType,
          text: errorText,
          assertive: data.status !== "rate_limited",
        });

        if (data.status === "server_error") {
          toast.error(errorText);
        }

        return;
      }

      const fallbackText = "Something went wrong. Please try again.";
      setFeedback({
        type: "error",
        text: fallbackText,
        assertive: true,
      });
      toast.error(fallbackText);
    } catch (error) {
      console.error("[Waitlist] Error:", error);
      setFeedback({
        type: "error",
        text: "Something went wrong. Please try again.",
        assertive: true,
      });
      toast.error("Something went wrong. Please try again.");
    } finally {
      setState("idle");
    }
  };

  const feedbackIcon =
    feedback?.type === "success" ? (
      <CheckCircle2 className="h-3.5 w-3.5" />
    ) : feedback?.type === "error" ? (
      <AlertCircle className="h-3.5 w-3.5" />
    ) : (
      <Info className="h-3.5 w-3.5" />
    );

  return (
    <div className="w-full max-w-lg rounded-2xl border border-[#1f2c31]/10 bg-white/70 p-4 sm:p-5">
      <p className="text-charcoal-grey text-base font-semibold tracking-tight">
        Join our launch list
      </p>
      <p className="text-charcoal-grey/60 mt-1 mb-3 text-[11px] font-medium tracking-[0.2em] uppercase">
        Get notified when we launch
      </p>

      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>

      <form
        onSubmit={handleSubmit}
        className="group relative flex flex-col gap-2 sm:block"
      >
        {/* Honeypot field - hidden from humans, bots fill it */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute -left-[9999px] opacity-0"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (feedback) setFeedback(null);
          }}
          placeholder="your@email.com"
          required
          disabled={state === "loading"}
          className={cn(
            "border-charcoal-grey/30 w-full border bg-white/50 backdrop-blur-sm",
            "text-charcoal-grey placeholder:text-charcoal-grey/30",
            "h-12 rounded-full px-5 sm:pr-40",
            "text-sm transition-all duration-300 outline-none",
            "focus:border-vextra-green focus:ring-vextra-green/10 focus:bg-white focus:ring-4",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        />
        <button
          type="submit"
          disabled={state === "loading" || !email.trim()}
          className={cn(
            "cursor-pointer rounded-full px-4",
            "inline-flex h-11 w-full items-center justify-center gap-1.5 sm:absolute sm:top-1 sm:right-1 sm:bottom-1 sm:h-auto sm:w-auto sm:min-w-[132px]",
            "text-[11px] font-semibold tracking-[0.06em] uppercase",
            "transition-all duration-300 focus:ring-2 focus:ring-offset-1 focus:outline-none",
            "focus:ring-vextra-green",
            email.trim()
              ? "bg-vextra-green shadow-vextra-green/20 hover:bg-deep-teal text-white shadow-lg active:scale-[0.98]"
              : "bg-charcoal-grey/5 text-charcoal-grey/30 cursor-not-allowed",
          )}
        >
          {state === "loading" ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Notify me
              <ArrowRight className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </form>

      <div className="mt-3 min-h-[22px]">
        {feedback ? (
          <p
            role={feedback.assertive ? "alert" : "status"}
            aria-live={feedback.assertive ? "assertive" : "polite"}
            className={cn(
              "inline-flex items-center gap-1.5 text-xs transition-opacity duration-250",
              feedback.type === "error" && "text-red-600",
              feedback.type === "success" && "text-vextra-green",
              feedback.type === "warning" && "text-amber-700",
              feedback.type === "info" && "text-charcoal-grey/70",
            )}
          >
            {feedbackIcon}
            <span>{feedback.text}</span>
          </p>
        ) : (
          <p className="text-charcoal-grey/40 text-xs">
            No spam. One confirmation email when your signup is accepted.
          </p>
        )}
      </div>

      <p className="text-charcoal-grey/60 mt-3 text-[10px] sm:text-xs">
        By signing up, you agree to our{" "}
        <a
          href="/privacy"
          className="hover:text-vextra-green decoration-charcoal-grey/20 hover:decoration-vextra-green underline underline-offset-2 transition-colors duration-300"
        >
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
