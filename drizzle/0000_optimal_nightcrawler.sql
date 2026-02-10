CREATE TYPE "public"."welcome_email_status" AS ENUM('pending', 'sent', 'failed');--> statement-breakpoint
CREATE TABLE "waitlist_signups" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"normalized_email" text NOT NULL,
	"source" text DEFAULT 'landing_page' NOT NULL,
	"duplicate_count" integer DEFAULT 0 NOT NULL,
	"welcome_email_status" "welcome_email_status" DEFAULT 'pending' NOT NULL,
	"welcome_email_sent_at" timestamp with time zone,
	"welcome_email_provider_id" text,
	"resend_contact_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_submitted_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "waitlist_signups_normalized_email_idx" ON "waitlist_signups" USING btree ("normalized_email");