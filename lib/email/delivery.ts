import "server-only";

import { resend } from "@/lib/email/resend";

export function createEmailContact(email: string) {
  return resend.contacts.create({
    email,
    unsubscribed: false,
  });
}

export function sendEmail(
  message: Parameters<typeof resend.emails.send>[0],
  options?: Parameters<typeof resend.emails.send>[1],
) {
  return resend.emails.send(message, options);
}
