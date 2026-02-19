import { pgTable, text, timestamp, integer, uuid, pgEnum, uniqueIndex } from "drizzle-orm/pg-core";

export const welcomeEmailStatusEnum = pgEnum("welcome_email_status", [
  "pending",
  "sent",
  "failed",
]);

export const teamNotificationStatusEnum = pgEnum("team_notification_status", [
  "pending",
  "sent",
  "failed",
]);

export const waitlistSignups = pgTable(
  "waitlist_signups",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: text("email").notNull(),
    normalizedEmail: text("normalized_email").notNull(),
    source: text("source").notNull().default("landing_page"),
    duplicateCount: integer("duplicate_count").notNull().default(0),
    welcomeEmailStatus: welcomeEmailStatusEnum("welcome_email_status")
      .notNull()
      .default("pending"),
    welcomeEmailSentAt: timestamp("welcome_email_sent_at", {
      withTimezone: true,
    }),
    welcomeEmailProviderId: text("welcome_email_provider_id"),
    resendContactId: text("resend_contact_id"),
    teamNotificationStatus: teamNotificationStatusEnum("team_notification_status")
      .notNull()
      .default("pending"),
    teamNotificationSentAt: timestamp("team_notification_sent_at", {
      withTimezone: true,
    }),
    teamNotificationProviderId: text("team_notification_provider_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    lastSubmittedAt: timestamp("last_submitted_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [uniqueIndex("waitlist_signups_normalized_email_idx").on(table.normalizedEmail)],
);

export type WaitlistSignup = typeof waitlistSignups.$inferSelect;
export type NewWaitlistSignup = typeof waitlistSignups.$inferInsert;
