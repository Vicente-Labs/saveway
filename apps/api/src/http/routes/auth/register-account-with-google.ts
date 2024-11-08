import { eq } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { BadRequestError } from '@/_errors/bad-request-errors'
import { db } from '@/db'
import { users } from '@/db/schemas'
import { googleClient, oauth2 } from '@/lib/google'

export async function registerAccountWithGoogle(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/users/google',
    {
      schema: {
        querystring: z.object({
          code: z.string(),
        }),
      },
    },
    async (req) => {
      try {
        const { code } = req.query

        const { tokens } = await googleClient.getToken(code)
        googleClient.setCredentials(tokens)

        const userInfo = await oauth2.userinfo.get({ auth: googleClient })

        if (!userInfo.data.email || !userInfo.data.name || !userInfo.data.id) {
          throw new BadRequestError('User info not found')
        }

        const [existingUser] = await db
          .select()
          .from(users)
          .where(eq(users.email, userInfo.data.email))
          .limit(1)

        if (existingUser) {
          if (existingUser.providerId && !existingUser.passwordHash) {
            await db
              .update(users)
              .set({
                provider: 'GOOGLE',
                providerId: userInfo.data.id,
              })
              .where(eq(users.id, existingUser.id))
              .returning()
          }

          return { id: existingUser.id }
        }

        const [newUser] = await db
          .insert(users)
          .values({
            email: userInfo.data.email,
            name: userInfo.data.name,
            provider: 'GOOGLE',
            providerId: userInfo.data.id,
            avatarUrl: userInfo.data.picture,
          })
          .returning()

        return { id: newUser.id }
      } catch (error) {
        if (error instanceof Error && 'response' in error) {
          const gaxiosError = error as unknown as {
            response?: { data?: { error?: string } }
          }
          if (gaxiosError.response?.data?.error === 'invalid_grant') {
            throw new BadRequestError('Invalid or expired authorization code')
          }
        }
        throw error
      }
    },
  )
}
