"use client";

import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import type { TurnstileWidgetHandle } from "@/components/shared/turnstile-widget";
import type { EnquiryService } from "@/lib/enquiry/options";
import {
  enquiryRequestSchema,
  type EnquiryRequestFormValues,
  type EnquiryRequestInput,
} from "@/schemas/enquiry";
import type { EnquiryApiResponse } from "@/types/enquiry";

export type EnquiryFeedback = {
  type: "success" | "info" | "warning" | "error";
  text: string;
  assertive?: boolean;
};

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  serviceDetails: "",
  message: "",
  turnstileToken: "",
  honeypot: "",
} satisfies Partial<EnquiryRequestFormValues>;

export function useProjectEnquiryForm() {
  const turnstileRef = useRef<TurnstileWidgetHandle>(null);
  const [feedback, setFeedback] = useState<EnquiryFeedback | null>(null);
  const verificationConfigured = Boolean(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  );

  const form = useForm<EnquiryRequestFormValues, unknown, EnquiryRequestInput>({
    resolver: zodResolver(enquiryRequestSchema),
    defaultValues: INITIAL_FORM,
    mode: "onTouched",
  });

  const selectedService = useWatch({
    control: form.control,
    name: "service",
  });

  const clearFeedback = () => {
    if (feedback) setFeedback(null);
  };

  const submitEnquiry = async (values: EnquiryRequestInput) => {
    setFeedback(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as EnquiryApiResponse;

      if (response.ok && data.success) {
        form.reset(INITIAL_FORM);
        setFeedback({ type: "success", text: data.message });
        return;
      }

      if (!response.ok && !data.success) {
        const warningStatuses = new Set([
          "rate_limited",
          "service_unavailable",
        ]);

        setFeedback({
          type: warningStatuses.has(data.status) ? "warning" : "error",
          text: data.message,
          assertive: !warningStatuses.has(data.status),
        });

        if (data.status === "server_error") toast.error(data.message);
        return;
      }

      throw new Error("Unexpected enquiry response");
    } catch (error) {
      console.error("[Enquiry] Error:", error);
      const message = "Something went wrong. Please try again.";
      setFeedback({ type: "error", text: message, assertive: true });
      toast.error(message);
    } finally {
      turnstileRef.current?.reset();
    }
  };

  const onSubmit = form.handleSubmit(submitEnquiry, (invalidFields) => {
    const firstError = Object.values(invalidFields)[0]?.message;
    setFeedback({
      type: "error",
      text:
        typeof firstError === "string" ? firstError : "Please check the form.",
      assertive: true,
    });
  });

  const handleServiceChange = (
    value: EnquiryService,
    onChange: (value: EnquiryService) => void,
  ) => {
    onChange(value);
    if (value !== "other") {
      form.setValue("serviceDetails", "", {
        shouldDirty: false,
        shouldValidate: true,
      });
    }
    clearFeedback();
  };

  const handleTurnstileTokenChange = (token: string) => {
    form.setValue("turnstileToken", token, {
      shouldDirty: true,
      shouldValidate: Boolean(token),
    });
    clearFeedback();
  };

  const handleTurnstileUnavailable = () => {
    setFeedback({
      type: "warning",
      text: "Verification is unavailable. Please use the email option below.",
    });
  };

  return {
    control: form.control,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    register: form.register,
    selectedService,
    feedback,
    verificationConfigured,
    turnstileRef,
    clearFeedback,
    handleServiceChange,
    handleTurnstileTokenChange,
    handleTurnstileUnavailable,
    onSubmit,
  };
}
