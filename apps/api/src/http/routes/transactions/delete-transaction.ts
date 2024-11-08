import { and, eq } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { db } from '@/db'
import { transactions } from '@/db/schemas'

export async function deleteTransaction(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/transactions/:id',
    {
      schema: {
        security: [{ bearerAuth: [] }],
        params: z.object({
          id: z.string().uuid(),
        }),
      },
    },
    async (req, res) => {
      const { sub: userId } = await req.getCurrentUserId()
      const { id } = req.params

      const [transaction] = await db
        .delete(transactions)
        .where(and(eq(transactions.id, id), eq(transactions.userId, userId)))
        .returning()

      if (!transaction) {
        return res.status(404).send({ message: 'Transaction not found' })
      }

      return res.status(204).send()
    },
  )
}
