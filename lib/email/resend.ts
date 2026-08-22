import "server-only";

import { createHash } from "crypto";
import { Resend } from "resend";
import { getRequiredEnv } from "@/lib/env";

export const resend = new Resend(getRequiredEnv("RESEND_API_KEY"));

export function buildEmailIdempotencyKey(
  namespace: string,
  value: string,
): string {
  const hash = createHash("sha256").update(value).digest("hex");
  return `${namespace}-${hash}`;
}
