import { createId } from '@paralleldrive/cuid2'
import { decimal, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { cards } from './cards'

export const cardUsage = pgTable('card_usage', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),

  cardId: text('card_id')
    .references(() => cards.id)
    .notNull(),

  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),

  occurredAt: timestamp('occurred_at').notNull(),
})
