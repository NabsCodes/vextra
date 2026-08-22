"use client";

import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Info,
  Loader2,
} from "lucide-react";
import { Controller } from "react-hook-form";
import { TurnstileWidget } from "@/components/shared/turnstile-widget";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactPageContent } from "@/content/contact";
import { useProjectEnquiryForm } from "@/hooks/use-project-enquiry-form";
import {
  ENQUIRY_SERVICE_OPTIONS,
  type EnquiryService,
} from "@/lib/enquiry/options";
import { cn } from "@/lib/utils";

const controlClassName = cn(
  "border-charcoal-grey/25 bg-white text-charcoal-grey shadow-none",
  "placeholder:text-charcoal-grey/30 rounded-md",
  "focus-visible:border-vextra-green focus-visible:ring-vextra-green/10",
);

const labelClassName =
  "text-charcoal-grey/55 text-[10px] font-medium tracking-[0.16em] uppercase";

export function ProjectEnquiryForm() {
  const { form: formContent } = contactPageContent;
  const {
    control,
    errors,
    isSubmitting,
    register,
    selectedService,
    feedback,
    verificationConfigured,
    turnstileRef,
    clearFeedback,
    handleServiceChange,
    handleTurnstileTokenChange,
    handleTurnstileUnavailable,
    onSubmit,
  } = useProjectEnquiryForm();

  const feedbackIcon =
    feedback?.type === "success" ? (
      <CheckCircle2 className="size-3.5" />
    ) : feedback?.type === "error" ? (
      <AlertCircle className="size-3.5" />
    ) : (
      <Info className="size-3.5" />
    );

  return (
    <div className="border-charcoal-grey/15 w-full overflow-hidden rounded-2xl border bg-white/80">
      <div className="border-charcoal-grey/15 border-b px-5 py-4 sm:px-7 lg:px-9">
        <p className="text-charcoal-grey text-[11px] font-semibold tracking-[0.2em] uppercase">
          {formContent.legend}
        </p>
      </div>

      <form className="p-5 sm:p-7 lg:p-9" noValidate onSubmit={onSubmit}>
        <Input
          {...register("honeypot")}
          type="text"
          className="absolute left-[-9999px] size-px opacity-0"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <FieldGroup className="gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field data-invalid={Boolean(errors.name)}>
              <FieldLabel htmlFor="enquiry-name" className={labelClassName}>
                Name
              </FieldLabel>
              <Input
                {...register("name", { onChange: clearFeedback })}
                id="enquiry-name"
                autoComplete="name"
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.name)}
                className={cn(controlClassName, "h-11 px-3.5")}
                placeholder="Your name"
              />
              <FieldError errors={[errors.name]} />
            </Field>

            <Field data-invalid={Boolean(errors.email)}>
              <FieldLabel htmlFor="enquiry-email" className={labelClassName}>
                Email
              </FieldLabel>
              <Input
                {...register("email", { onChange: clearFeedback })}
                id="enquiry-email"
                type="email"
                autoComplete="email"
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.email)}
                className={cn(controlClassName, "h-11 px-3.5")}
                placeholder="you@company.com"
              />
              <FieldError errors={[errors.email]} />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field data-invalid={Boolean(errors.company)}>
              <FieldLabel htmlFor="enquiry-company" className={labelClassName}>
                Company <span className="normal-case">(optional)</span>
              </FieldLabel>
              <Input
                {...register("company", { onChange: clearFeedback })}
                id="enquiry-company"
                autoComplete="organization"
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.company)}
                className={cn(controlClassName, "h-11 px-3.5")}
                placeholder="Organisation"
              />
              <FieldError errors={[errors.company]} />
            </Field>

            <Controller
              control={control}
              name="service"
              render={({ field }) => (
                <Field data-invalid={Boolean(errors.service)}>
                  <FieldLabel
                    htmlFor="enquiry-service"
                    className={labelClassName}
                  >
                    What do you need?
                  </FieldLabel>
                  <Select
                    value={field.value ?? ""}
                    onValueChange={(value: EnquiryService) => {
                      handleServiceChange(value, field.onChange);
                    }}
                    disabled={isSubmitting}
                    name="service"
                    required
                  >
                    <SelectTrigger
                      id="enquiry-service"
                      aria-invalid={Boolean(errors.service)}
                      className={cn(
                        controlClassName,
                        "h-11 w-full px-3.5 data-[size=default]:h-11",
                      )}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent position="popper" align="start">
                      {ENQUIRY_SERVICE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldDescription className="text-charcoal-grey/45 text-xs">
                    {formContent.serviceHint}
                  </FieldDescription>
                  <FieldError errors={[errors.service]} />
                </Field>
              )}
            />
          </div>

          {selectedService === "other" ? (
            <Field data-invalid={Boolean(errors.serviceDetails)}>
              <FieldLabel
                htmlFor="enquiry-service-details"
                className={labelClassName}
              >
                {formContent.otherLabel}
              </FieldLabel>
              <Input
                {...register("serviceDetails", { onChange: clearFeedback })}
                id="enquiry-service-details"
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.serviceDetails)}
                className={cn(controlClassName, "h-11 px-3.5")}
                placeholder={formContent.otherPlaceholder}
              />
              <FieldError errors={[errors.serviceDetails]} />
            </Field>
          ) : null}

          <Field data-invalid={Boolean(errors.message)}>
            <FieldLabel htmlFor="enquiry-message" className={labelClassName}>
              Project details
            </FieldLabel>
            <Textarea
              {...register("message", { onChange: clearFeedback })}
              id="enquiry-message"
              rows={6}
              required
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.message)}
              className={cn(controlClassName, "min-h-40 resize-y px-3.5 py-3")}
              placeholder="What are you building, who is it for, and what do you need from Vextra?"
            />
            <FieldError errors={[errors.message]} />
          </Field>

          <Field data-invalid={Boolean(errors.turnstileToken)}>
            <TurnstileWidget
              ref={turnstileRef}
              onTokenChange={handleTurnstileTokenChange}
              onUnavailable={handleTurnstileUnavailable}
            />
            <FieldError errors={[errors.turnstileToken]} />
          </Field>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || !verificationConfigured}
            className="bg-vextra-green text-charcoal-grey hover:bg-deep-teal h-11 w-full rounded-md text-sm font-medium tracking-wide hover:text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send enquiry
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </FieldGroup>
      </form>

      <div className="border-charcoal-grey/15 min-h-14 border-t px-5 py-4 sm:px-7 lg:px-9">
        {feedback ? (
          <p
            role={feedback.assertive ? "alert" : "status"}
            aria-live={feedback.assertive ? "assertive" : "polite"}
            className={cn(
              "inline-flex items-center gap-1.5 text-xs",
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
            Prefer email?{" "}
            <a
              href="mailto:info@vextralimited.com?subject=Project%20Inquiry"
              className="hover:text-vextra-green underline underline-offset-2"
            >
              info@vextralimited.com
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
