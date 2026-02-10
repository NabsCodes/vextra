import { createHash } from "crypto";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getRequiredEnv } from "@/lib/server-env";

const redis = new Redis({
  url: getRequiredEnv("UPSTASH_REDIS_REST_URL"),
  token: getRequiredEnv("UPSTASH_REDIS_REST_TOKEN"),
});

const ipRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, "1 h"),
  analytics: true,
  prefix: "waitlist:ip",
});

const emailRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(2, "1 h"),
  analytics: true,
  prefix: "waitlist:email",
});

type WaitlistRateLimitScope = "ip" | "email";

export type WaitlistRateLimitResult =
  | {
      success: true;
    }
  | {
      success: false;
      scope: WaitlistRateLimitScope;
      reset: number;
    };

function hashIdentifier(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export async function enforceWaitlistRateLimit({
  ipAddress,
  normalizedEmail,
}: {
  ipAddress: string;
  normalizedEmail: string;
}): Promise<WaitlistRateLimitResult> {
  try {
    const [ipResult, emailResult] = await Promise.all([
      ipRatelimit.limit(ipAddress || "unknown"),
      emailRatelimit.limit(hashIdentifier(normalizedEmail)),
    ]);

    if (!ipResult.success) {
      return {
        success: false,
        scope: "ip",
        reset: ipResult.reset,
      };
    }

    if (!emailResult.success) {
      return {
        success: false,
        scope: "email",
        reset: emailResult.reset,
      };
    }

    return { success: true };
  } catch (error) {
    // Fail open to avoid blocking legitimate signups on transient Redis issues.
    console.warn(
      "[Waitlist RateLimit] Failed open after limiter error:",
      error,
    );
    return { success: true };
  }
}
