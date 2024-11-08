CREATE TYPE "public"."payment_method" AS ENUM('BANK_TRANSFER', 'CREDIT_CARD', 'DEBIT_CARD', 'CRYPTO', 'OTHER', 'CASH', 'PIX');--> statement-breakpoint
CREATE TYPE "public"."transaction_category" AS ENUM('TRANSPORTATION', 'ENTERTAINMENT', 'SUBSCRIPTIONS', 'MAINTENANCE', 'INVESTMENTS', 'HEALTHCARE', 'RESTAURANT', 'GROCERIES', 'UTILITIES', 'EDUCATION', 'INSURANCE', 'SHOPPING', 'CHARITY', 'HOUSING', 'TRAVEL', 'SALARY', 'TAXES', 'GIFTS', 'OTHER');--> statement-breakpoint
CREATE TYPE "public"."transaction_type" AS ENUM('INVESTMENT', 'TRANSFER', 'OUTCOME', 'INCOME');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transactions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"type" "transaction_type" NOT NULL,
	"category" "transaction_category" NOT NULL,
	"payment_method" "payment_method" NOT NULL,
	"occurred_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
