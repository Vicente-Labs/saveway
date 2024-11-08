import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { decimal, pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { users } from './users'

export const cardTypeEnum = pgEnum('card_type', ['CREDIT', 'DEBIT'])

export const cards = pgTable('cards', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),

  name: text('name').notNull(),
  lastDigits: text('last_digits').notNull(),
  expirationDate: text('expiration_date').notNull(),
  limit: decimal('limit', { precision: 10, scale: 2 }).notNull(),
  type: cardTypeEnum('type').notNull(),

  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),

  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const cardsRelations = relations(cards, ({ one }) => ({
  user: one(users, {
    fields: [cards.userId],
    references: [users.id],
  }),
}))
