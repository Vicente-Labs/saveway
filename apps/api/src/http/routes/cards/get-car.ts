import { and, eq, sum } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { db } from '@/db'
import { cards, cardUsage } from '@/db/schemas'

export async function getCard(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/cards/:id',
    {
      schema: {
        security: [{ bearerAuth: [] }],
        params: z.object({
          id: z.string(),
        }),
      },
    },
    async (req, res) => {
      const { sub: userId } = await req.getCurrentUserId()
      const { id } = req.params

      const [card] = await db
        .select({
          id: cards.id,
          name: cards.name,
          lastDigits: cards.lastDigits,
          expirationDate: cards.expirationDate,
          type: cards.type,
          limit: cards.limit,
          usage: sum(cardUsage.amount).mapWith(Number),
        })
        .from(cards)
        .leftJoin(cardUsage, eq(cardUsage.cardId, cards.id))
        .where(and(eq(cards.id, id), eq(cards.userId, userId)))
        .limit(1)

      if (!card) {
        return res.status(404).send({ message: 'Card not found.' })
      }

      return res.status(200).send({ card })
    },
  )
}
