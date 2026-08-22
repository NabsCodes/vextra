import "server-only";

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export type TurnstileResult =
  { success: true } | { success: false; unavailable: boolean };

export async function verifyTurnstileToken({
  token,
  ipAddress,
}: {
  token: string;
  ipAddress: string;
}): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("[Turnstile] TURNSTILE_SECRET_KEY is not configured.");
    return { success: false, unavailable: true };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const body = new FormData();
    body.set("secret", secret);
    body.set("response", token);
    if (ipAddress !== "unknown") body.set("remoteip", ipAddress);

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body,
        signal: controller.signal,
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error(
        `[Turnstile] Verification returned HTTP ${response.status}.`,
      );
      return { success: false, unavailable: true };
    }

    const result = (await response.json()) as TurnstileResponse;
    if (!result.success) {
      console.warn(
        "[Turnstile] Token rejected:",
        result["error-codes"]?.join(", ") || "unknown reason",
      );
      return { success: false, unavailable: false };
    }

    return { success: true };
  } catch (error) {
    console.error("[Turnstile] Verification unavailable:", error);
    return { success: false, unavailable: true };
  } finally {
    clearTimeout(timeout);
  }
}
