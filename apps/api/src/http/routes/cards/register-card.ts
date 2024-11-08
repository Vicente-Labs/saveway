import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { db } from '@/db'
import { cards } from '@/db/schemas'

export async function registerCard(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/cards',
    {
      schema: {
        security: [{ bearerAuth: [] }],
        body: z.object({
          name: z.string(),
          lastDigits: z.string(),
          expirationDate: z.string(),
          type: z.enum(['CREDIT', 'DEBIT']),
          limit: z.string(),
        }),
      },
    },
    async (req, res) => {
      const { sub: userId } = await req.getCurrentUserId()
      const { name, lastDigits, expirationDate, limit, type } = req.body

      const [card] = await db
        .insert(cards)
        .values({
          name,
          limit,
          lastDigits,
          expirationDate,
          type,
          userId,
        })
        .returning()

      return res.status(201).send({ id: card.id })
    },
  )
}
