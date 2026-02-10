import { z } from "zod";

export const waitlistEmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Please enter a valid email address.");

export const waitlistRequestSchema = z.object({
  email: waitlistEmailSchema,
  honeypot: z.preprocess((value) => {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return String(value);
  }, z.string()),
});

export type WaitlistRequestInput = z.infer<typeof waitlistRequestSchema>;
