import { createId } from '@paralleldrive/cuid2'
import { pgTable, text } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),

  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),

  passwordHash: text('password_hash').notNull(),
})
