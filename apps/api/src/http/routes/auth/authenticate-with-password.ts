import { compare } from 'bcryptjs'
import { eq } from 'drizzle-orm'
import { FastifyInstance } from 'fastify'
import * as jose from 'jose'
import { z } from 'zod'

import { db } from '@/db'
import { users } from '@/db/schemas'
import { env } from '@/env'

export async function authenticateWithPassword(app: FastifyInstance) {
  app.post(
    '/authenticate/password',
    {
      schema: {
        body: z.object({
          email: z.string().email(),
          password: z.string().min(6),
        }),
      },
    },
    async (req, res) => {
      const { email, password } = req.body

      const user = await db.query.users.findFirst({
        where: eq(users.email, email.toLowerCase()),
      })

      if (!user || !user.passwordHash) {
        return res.status(401).send({ message: 'Invalid credentials.' })
      }

      const passwordIsValid = await compare(password, user.passwordHash)

      if (!passwordIsValid) {
        return res.status(401).send({ message: 'Invalid credentials.' })
      }

      const token = await new jose.SignJWT({ sub: user.id })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('7d')
        .setIssuedAt()
        .sign(new TextEncoder().encode(env.JWT_SECRET))

      return res.status(200).send({ token })
    },
  )
}
