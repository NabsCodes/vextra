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

const enquiryIpRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(8, "1 h"),
  analytics: true,
  prefix: "enquiry:ip",
});

const enquiryEmailRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"),
  analytics: true,
  prefix: "enquiry:email",
});

type RateLimitScope = "ip" | "email";

export type RateLimitResult =
  | {
      success: true;
    }
  | {
      success: false;
      unavailable: false;
      scope: RateLimitScope;
      reset: number;
    }
  | {
      success: false;
      unavailable: true;
    };

/** @deprecated Prefer RateLimitResult */
export type WaitlistRateLimitResult = RateLimitResult;

function hashIdentifier(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

async function enforceDualRateLimit({
  ipLimiter,
  emailLimiter,
  ipAddress,
  normalizedEmail,
  label,
  failOpen,
}: {
  ipLimiter: Ratelimit;
  emailLimiter: Ratelimit;
  ipAddress: string;
  normalizedEmail: string;
  label: string;
  failOpen: boolean;
}): Promise<RateLimitResult> {
  try {
    const [ipResult, emailResult] = await Promise.all([
      ipLimiter.limit(ipAddress || "unknown"),
      emailLimiter.limit(hashIdentifier(normalizedEmail)),
    ]);

    if (!ipResult.success) {
      return {
        success: false,
        unavailable: false,
        scope: "ip",
        reset: ipResult.reset,
      };
    }

    if (!emailResult.success) {
      return {
        success: false,
        unavailable: false,
        scope: "email",
        reset: emailResult.reset,
      };
    }

    return { success: true };
  } catch (error) {
    console.error(`[${label} RateLimit] Limiter unavailable:`, error);
    return failOpen ? { success: true } : { success: false, unavailable: true };
  }
}

export async function enforceWaitlistRateLimit({
  ipAddress,
  normalizedEmail,
}: {
  ipAddress: string;
  normalizedEmail: string;
}): Promise<RateLimitResult> {
  return enforceDualRateLimit({
    ipLimiter: ipRatelimit,
    emailLimiter: emailRatelimit,
    ipAddress,
    normalizedEmail,
    label: "Waitlist",
    failOpen: true,
  });
}

export async function enforceEnquiryRateLimit({
  ipAddress,
  normalizedEmail,
}: {
  ipAddress: string;
  normalizedEmail: string;
}): Promise<RateLimitResult> {
  return enforceDualRateLimit({
    ipLimiter: enquiryIpRatelimit,
    emailLimiter: enquiryEmailRatelimit,
    ipAddress,
    normalizedEmail,
    label: "Enquiry",
    failOpen: false,
  });
}
