import { NextResponse } from "next/server";
import { submitProjectEnquiry } from "@/lib/enquiry";
import type {
  EnquiryErrorResponse,
  EnquiryErrorStatus,
  EnquirySuccessResponse,
} from "@/types/enquiry";
import { enforceEnquiryRateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { enquiryRequestSchema } from "@/schemas/enquiry";

export const runtime = "nodejs";

function successResponse(
  message: string,
): NextResponse<EnquirySuccessResponse> {
  return NextResponse.json({
    success: true,
    status: "sent",
    message,
  });
}

function errorResponse(
  status: EnquiryErrorStatus,
  message: string,
  httpStatus: number,
): NextResponse<EnquiryErrorResponse> {
  return NextResponse.json(
    { success: false, status, message },
    { status: httpStatus },
  );
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsedBody = enquiryRequestSchema.safeParse(payload);

    if (!parsedBody.success) {
      const firstIssue = parsedBody.error.issues[0]?.message;
      return errorResponse(
        "invalid_input",
        firstIssue || "Please check the form and try again.",
        400,
      );
    }

    const {
      name,
      email,
      company,
      service,
      serviceDetails,
      message,
      honeypot,
      turnstileToken,
    } = parsedBody.data;

    // Honeypot — bots fill this; humans never see it.
    if (honeypot) {
      return successResponse(
        "Thanks — we received your enquiry and will reply soon.",
      );
    }

    const ipAddress = getClientIp(request);
    const rateLimitResult = await enforceEnquiryRateLimit({
      ipAddress,
      normalizedEmail: email,
    });

    if (!rateLimitResult.success) {
      if (rateLimitResult.unavailable) {
        return errorResponse(
          "service_unavailable",
          "The enquiry form is temporarily unavailable. Please email info@vextralimited.com.",
          503,
        );
      }

      const secondsRemaining = Math.max(
        1,
        Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
      );

      return errorResponse(
        "rate_limited",
        `Too many attempts. Please try again in about ${secondsRemaining} seconds.`,
        429,
      );
    }

    const verification = await verifyTurnstileToken({
      token: turnstileToken,
      ipAddress,
    });

    if (!verification.success) {
      return errorResponse(
        verification.unavailable
          ? "service_unavailable"
          : "verification_failed",
        verification.unavailable
          ? "The enquiry form is temporarily unavailable. Please email info@vextralimited.com."
          : "We could not verify this submission. Please try again.",
        verification.unavailable ? 503 : 400,
      );
    }

    const result = await submitProjectEnquiry({
      name,
      email,
      company: company || "",
      service,
      serviceDetails,
      message,
    });

    if (!result.ok) {
      return errorResponse(
        "server_error",
        "We couldn't send your enquiry. Please email info@vextralimited.com.",
        500,
      );
    }

    return successResponse(
      "Thanks — we received your enquiry and will reply soon.",
    );
  } catch (error) {
    console.error("[Enquiry API] Error:", error);
    return errorResponse(
      "server_error",
      "Failed to process enquiry. Please try again.",
      500,
    );
  }
}
