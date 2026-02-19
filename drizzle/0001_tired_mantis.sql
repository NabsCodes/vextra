CREATE TYPE "public"."team_notification_status" AS ENUM('pending', 'sent', 'failed');--> statement-breakpoint
ALTER TABLE "waitlist_signups" ADD COLUMN "team_notification_status" "team_notification_status" DEFAULT 'pending' NOT NULL;--> statement-breakpoint
ALTER TABLE "waitlist_signups" ADD COLUMN "team_notification_sent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "waitlist_signups" ADD COLUMN "team_notification_provider_id" text;