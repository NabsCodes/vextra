"use client";

import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Info,
  Loader2,
} from "lucide-react";
import { homePageContent } from "@/content/home";
import { useWaitlistForm } from "@/hooks/use-waitlist-form";
import { cn } from "@/lib/utils";

export function WaitlistForm() {
  const {
    email,
    honeypot,
    isSubmitting,
    feedback,
    setHoneypot,
    handleEmailChange,
    handleSubmit,
  } = useWaitlistForm();

  const feedbackIcon =
    feedback?.type === "success" ? (
      <CheckCircle2 className="h-3.5 w-3.5" />
    ) : feedback?.type === "error" ? (
      <AlertCircle className="h-3.5 w-3.5" />
    ) : (
      <Info className="h-3.5 w-3.5" />
    );

  return (
    <div
      id="website-launch-list"
      className="w-full max-w-lg rounded-2xl border border-[#1f2c31]/10 bg-white/70 p-4 sm:p-5"
    >
      <p className="text-charcoal-grey text-base font-semibold tracking-tight">
        {homePageContent.waitlist.title}
      </p>
      <p className="text-charcoal-grey/60 mt-1 mb-3 text-[11px] font-medium tracking-[0.2em] uppercase">
        {homePageContent.waitlist.subtitle}
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
          className="absolute left-[-9999px] opacity-0"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={isSubmitting}
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
          disabled={isSubmitting || !email.trim()}
          className={cn(
            "cursor-pointer rounded-full px-4",
            "inline-flex h-11 w-full items-center justify-center gap-1.5 sm:absolute sm:top-1 sm:right-1 sm:bottom-1 sm:h-auto sm:w-auto sm:min-w-33",
            "text-[11px] font-semibold tracking-[0.06em] uppercase",
            "transition-all duration-300 focus:ring-2 focus:ring-offset-1 focus:outline-none",
            "focus:ring-vextra-green",
            email.trim()
              ? "bg-vextra-green shadow-vextra-green/20 hover:bg-deep-teal text-white shadow-lg active:scale-[0.98]"
              : "bg-charcoal-grey/5 text-charcoal-grey/30 cursor-not-allowed",
          )}
        >
          {isSubmitting ? (
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

      <div className="mt-3 min-h-5.5">
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
            {homePageContent.waitlist.projectPrompt}{" "}
            <a
              href="/contact"
              className="hover:text-vextra-green underline underline-offset-2 transition-colors"
            >
              {homePageContent.waitlist.projectLink}
            </a>
            . {homePageContent.waitlist.reassurance}
          </p>
        )}
      </div>

      <p className="text-charcoal-grey/60 mt-3 text-[10px] sm:text-xs">
        {homePageContent.waitlist.consentPrefix}{" "}
        <a
          href="/privacy"
          className="hover:text-vextra-green decoration-charcoal-grey/20 hover:decoration-vextra-green underline underline-offset-2 transition-colors duration-300"
        >
          {homePageContent.waitlist.privacyLink}
        </a>
      </p>
    </div>
  );
}
