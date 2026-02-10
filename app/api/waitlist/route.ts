import { NextResponse } from "next/server";
import { enforceWaitlistRateLimit } from "@/lib/rate-limit";
import {
  WAITLIST_MESSAGES,
  submitWaitlistSignup,
  type WaitlistErrorStatus,
  type WaitlistSuccessStatus,
} from "@/lib/waitlist/service";
import { waitlistRequestSchema } from "@/lib/validation/waitlist";

export const runtime = "nodejs";

type WaitlistSuccessResponse = {
  success: true;
  status: WaitlistSuccessStatus;
  message: string;
};

type WaitlistErrorResponse = {
  success: false;
  status: WaitlistErrorStatus;
  message: string;
};

function successResponse(
  status: WaitlistSuccessStatus,
  message: string,
): NextResponse<WaitlistSuccessResponse> {
  return NextResponse.json({ success: true, status, message });
}

function errorResponse(
  status: WaitlistErrorStatus,
  message: string,
  httpStatus: number,
): NextResponse<WaitlistErrorResponse> {
  return NextResponse.json(
    { success: false, status, message },
    { status: httpStatus },
  );
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsedBody = waitlistRequestSchema.safeParse(payload);

    if (!parsedBody.success) {
      return errorResponse(
        "invalid_email",
        "Please enter a valid email address.",
        400,
      );
    }

    const { email: normalizedEmail, honeypot } = parsedBody.data;
    const rawEmail =
      typeof payload.email === "string" ? payload.email.trim() : normalizedEmail;

    // Honeypot check - bots fill this hidden field, humans don't see it.
    if (honeypot) {
      return successResponse("subscribed_new", WAITLIST_MESSAGES.subscribed_new);
    }

    const rateLimitResult = await enforceWaitlistRateLimit({
      ipAddress: getClientIp(request),
      normalizedEmail,
    });

    if (!rateLimitResult.success) {
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

    const result = await submitWaitlistSignup({
      rawEmail,
      normalizedEmail,
      source: "landing_page",
    });

    return successResponse(result.status, result.message);
  } catch (error) {
    console.error("[Waitlist API] Error:", error);
    return errorResponse(
      "server_error",
      "Failed to process signup. Please try again.",
      500,
    );
  }
}
