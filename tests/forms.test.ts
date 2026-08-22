import { describe, expect, it } from "vitest";
import {
  getDuplicateWaitlistResult,
  WAITLIST_MESSAGES,
} from "@/lib/form-results";
import { getClientIp } from "@/lib/request";
import { enquiryRequestSchema } from "@/schemas/enquiry";
import { waitlistEmailSchema, waitlistRequestSchema } from "@/schemas/waitlist";

const validEnquiry = {
  name: "  Nabeel Hassan  ",
  email: "  HELLO@EXAMPLE.COM ",
  company: "",
  service: "web_app",
  serviceDetails: "",
  message: "We need a dependable operations platform for our team.",
  turnstileToken: "test-token",
  honeypot: "",
} as const;

describe("public form contracts", () => {
  it("normalizes valid enquiry input", () => {
    const result = enquiryRequestSchema.parse(validEnquiry);

    expect(result.name).toBe("Nabeel Hassan");
    expect(result.email).toBe("hello@example.com");
    expect(result.company).toBe("");
  });

  it("requires details when Other is selected", () => {
    const result = enquiryRequestSchema.safeParse({
      ...validEnquiry,
      service: "other",
      serviceDetails: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.path[0]).toBe("serviceDetails");
      expect(result.error.issues[0]?.message).toBe(
        "Tell us what you need in your own words.",
      );
    }
  });

  it("rejects short project details", () => {
    const result = enquiryRequestSchema.safeParse({
      ...validEnquiry,
      message: "Too short",
    });

    expect(result.success).toBe(false);
  });

  it("normalizes waitlist email and honeypot input", () => {
    expect(waitlistEmailSchema.parse("  PERSON@EXAMPLE.COM ")).toBe(
      "person@example.com",
    );

    expect(
      waitlistRequestSchema.parse({ email: "person@example.com" }),
    ).toEqual({ email: "person@example.com", honeypot: "" });
  });

  it("rejects invalid waitlist email", () => {
    expect(waitlistRequestSchema.safeParse({ email: "invalid" }).success).toBe(
      false,
    );
  });
});

describe("stable server result helpers", () => {
  it("preserves duplicate waitlist result contracts", () => {
    expect(getDuplicateWaitlistResult({ welcomeEmailStatus: "sent" })).toEqual({
      status: "already_subscribed",
      message: WAITLIST_MESSAGES.already_subscribed,
    });

    expect(
      getDuplicateWaitlistResult({
        welcomeEmailStatus: "failed",
        retrySucceeded: true,
      }),
    ).toEqual({
      status: "already_subscribed",
      message: WAITLIST_MESSAGES.confirmation_resent,
    });

    expect(
      getDuplicateWaitlistResult({ welcomeEmailStatus: "pending" }),
    ).toEqual({
      status: "subscribed_pending_email",
      message: WAITLIST_MESSAGES.subscribed_pending_email,
    });
  });

  it("prefers the first forwarded client IP", () => {
    const forwarded = new Request("https://vextralimited.com", {
      headers: { "x-forwarded-for": "203.0.113.5, 10.0.0.1" },
    });
    const realIp = new Request("https://vextralimited.com", {
      headers: { "x-real-ip": "198.51.100.4" },
    });
    const unknown = new Request("https://vextralimited.com");

    expect(getClientIp(forwarded)).toBe("203.0.113.5");
    expect(getClientIp(realIp)).toBe("198.51.100.4");
    expect(getClientIp(unknown)).toBe("unknown");
  });
});
