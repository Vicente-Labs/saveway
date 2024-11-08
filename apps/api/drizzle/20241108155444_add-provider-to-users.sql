CREATE TYPE "public"."provider" AS ENUM('GOOGLE');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "provider" "provider";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "provider_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_provider_id_unique" UNIQUE("provider_id");