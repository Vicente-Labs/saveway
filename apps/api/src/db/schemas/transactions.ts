import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { decimal, pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { users } from '.'

export const transactionTypeEnum = pgEnum('transaction_type', [
  'INVESTMENT',
  'TRANSFER',
  'OUTCOME',
  'INCOME',
])

export const paymentMethodEnum = pgEnum('payment_method', [
  'BANK_TRANSFER',
  'CREDIT_CARD',
  'DEBIT_CARD',
  'CRYPTO',
  'OTHER',
  'CASH',
  'PIX',
])

export const transactionCategoryEnum = pgEnum('transaction_category', [
  'TRANSPORTATION',
  'ENTERTAINMENT',
  'SUBSCRIPTIONS',
  'MAINTENANCE',
  'INVESTMENTS',
  'HEALTHCARE',
  'RESTAURANT',
  'GROCERIES',
  'UTILITIES',
  'EDUCATION',
  'INSURANCE',
  'SHOPPING',
  'CHARITY',
  'HOUSING',
  'TRAVEL',
  'SALARY',
  'TAXES',
  'GIFTS',
  'OTHER',
])

export const transactions = pgTable('transactions', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),

  userId: text('user_id')
    .references(() => users.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  type: transactionTypeEnum('type').notNull(),
  category: transactionCategoryEnum('category').notNull(),
  paymentMethod: paymentMethodEnum('payment_method').notNull(),

  occurredAt: timestamp('occurred_at').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const transactionsRelations = relations(transactions, ({ one }) => ({
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id],
  }),
}))
