import { hash } from 'bcryptjs'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { db } from '@/db'
import { users } from '@/db/schemas'

export async function registerAccountWithPassword(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        tags: ['users'],
        summary: 'Register a new user with password',
        body: z.object({
          email: z.string().email(),
          name: z.string(),
          phone: z.string(),
          password: z.string(),
        }),
      },
    },
    async (req) => {
      const { email, name, phone, password } = req.body

      const passwordHash = await hash(password, 8)

      const [user] = await db
        .insert(users)
        .values({
          email,
          name,
          passwordHash,
          phone,
        })
        .returning()

      return { id: user.id }
    },
  )
}
