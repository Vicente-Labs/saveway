import { and, eq } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { db } from '@/db'
import { transactions } from '@/db/schemas'

export async function getTransaction(app: FastifyInstance) {
  app.get(
    '/transactions/:id',
    {
      schema: {
        params: z.object({
          id: z.string().uuid(),
        }),
      },
    },
    async (req, res) => {
      const { sub: userId } = await req.getCurrentUserId()
      const { id } = req.params

      const [transaction] = await db
        .select()
        .from(transactions)
        .where(and(eq(transactions.id, id), eq(transactions.userId, userId)))
        .limit(1)

      if (!transaction) {
        return res.status(404).send({ message: 'Transaction not found' })
      }

      return res.status(200).send({ transaction })
    },
  )
}
