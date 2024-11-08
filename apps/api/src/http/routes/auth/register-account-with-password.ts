import { hash } from 'bcryptjs'
import { eq } from 'drizzle-orm'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { BadRequestError } from '@/_errors/bad-request-errors'
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

      const userWithSameEmail = await db.query.users.findFirst({
        where: eq(users.email, email),
      })

      if (userWithSameEmail) {
        return new BadRequestError('User with same email already exists')
      }

      const userWithSamePhone = await db.query.users.findFirst({
        where: eq(users.phone, phone),
      })

      if (userWithSamePhone) {
        return new BadRequestError('User with same phone already exists')
      }

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
