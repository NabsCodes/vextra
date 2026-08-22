import { z } from "zod";
import { ENQUIRY_SERVICE_VALUES } from "@/lib/enquiry/options";

export const enquiryServiceSchema = z.enum(ENQUIRY_SERVICE_VALUES);

export const enquiryRequestSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your name.")
      .max(120, "Name is too long."),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Please enter a valid email address."),
    company: z
      .string()
      .trim()
      .max(160, "Company name is too long.")
      .optional()
      .default(""),
    service: enquiryServiceSchema,
    serviceDetails: z
      .string()
      .trim()
      .max(240, "Please keep this description under 240 characters.")
      .optional()
      .default(""),
    message: z
      .string()
      .trim()
      .min(
        20,
        "Tell us a little more about the project (at least 20 characters).",
      )
      .max(4000, "Message is too long."),
    turnstileToken: z
      .string()
      .min(1, "Please complete the verification check."),
    honeypot: z.preprocess((value) => {
      if (value == null) return "";
      if (typeof value === "string") return value;
      return String(value);
    }, z.string()),
  })
  .superRefine((data, context) => {
    if (data.service === "other" && data.serviceDetails.length < 3) {
      context.addIssue({
        code: "custom",
        path: ["serviceDetails"],
        message: "Tell us what you need in your own words.",
      });
    }
  });

export type EnquiryRequestInput = z.infer<typeof enquiryRequestSchema>;
export type EnquiryRequestFormValues = z.input<typeof enquiryRequestSchema>;
