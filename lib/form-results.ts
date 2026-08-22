import type { WaitlistSuccessResult } from "@/types/waitlist";

export const WAITLIST_MESSAGES = {
  subscribed_new: "You're on the launch list. We'll be in touch soon.",
  already_subscribed:
    "You're already on the launch list. Confirmation was already sent.",
  subscribed_pending_email:
    "You're already on the launch list. Confirmation email is pending.",
  confirmation_resent:
    "You're already on the launch list. We've re-sent your confirmation email.",
} as const;

export function getDuplicateWaitlistResult({
  welcomeEmailStatus,
  retrySucceeded = false,
}: {
  welcomeEmailStatus?: "pending" | "sent" | "failed" | null;
  retrySucceeded?: boolean;
}): WaitlistSuccessResult {
  if (welcomeEmailStatus === "sent" || retrySucceeded) {
    return {
      status: "already_subscribed",
      message: retrySucceeded
        ? WAITLIST_MESSAGES.confirmation_resent
        : WAITLIST_MESSAGES.already_subscribed,
    };
  }

  return {
    status: "subscribed_pending_email",
    message: WAITLIST_MESSAGES.subscribed_pending_email,
  };
}
