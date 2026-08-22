"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { waitlistEmailSchema } from "@/schemas/waitlist";
import type { WaitlistApiResponse } from "@/types/waitlist";

export type WaitlistFeedback = {
  type: "success" | "info" | "warning" | "error";
  text: string;
  assertive?: boolean;
};

export function useWaitlistForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<WaitlistFeedback | null>(null);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (feedback) setFeedback(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || isSubmitting) return;

    const parsedEmail = waitlistEmailSchema.safeParse(email);
    if (!parsedEmail.success) {
      setFeedback({
        type: "error",
        text: "Please enter a valid email address.",
        assertive: true,
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsedEmail.data, honeypot }),
      });

      const data = (await response.json()) as WaitlistApiResponse;

      if (response.ok && data.success) {
        setEmail("");
        setFeedback({
          type:
            data.status === "subscribed_new"
              ? "success"
              : data.status === "subscribed_pending_email"
                ? "warning"
                : "info",
          text: data.message,
        });
        return;
      }

      if (!response.ok && !data.success) {
        const errorText =
          data.message || "Something went wrong. Please try again.";
        setFeedback({
          type: data.status === "rate_limited" ? "warning" : "error",
          text: errorText,
          assertive: data.status !== "rate_limited",
        });

        if (data.status === "server_error") toast.error(errorText);
        return;
      }

      throw new Error("Unexpected waitlist response");
    } catch (error) {
      console.error("[Waitlist] Error:", error);
      const message = "Something went wrong. Please try again.";
      setFeedback({ type: "error", text: message, assertive: true });
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    honeypot,
    isSubmitting,
    feedback,
    setHoneypot,
    handleEmailChange,
    handleSubmit,
  };
}
