CREATE TABLE IF NOT EXISTS "card_usage" (
	"id" text PRIMARY KEY NOT NULL,
	"card_id" text NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"occurred_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "card_usage" ADD CONSTRAINT "card_usage_card_id_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
