import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { transactions } from './transactions'

export const providerEnum = pgEnum('provider', ['GOOGLE'])

export const users = pgTable('users', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),

  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').unique(),
  passwordHash: text('password_hash'),
  avatarUrl: text('avatar_url'),

  provider: providerEnum('provider'),
  providerId: text('provider_id').unique(),

  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const usersRelations = relations(users, ({ many }) => ({
  transactions: many(transactions),
}))
