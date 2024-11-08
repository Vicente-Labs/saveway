CREATE TYPE "public"."card_type" AS ENUM('CREDIT', 'DEBIT');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cards" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"last_digits" text NOT NULL,
	"expiration_date" text NOT NULL,
	"limit" numeric(10, 2) NOT NULL,
	"type" "card_type" NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cards" ADD CONSTRAINT "cards_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
