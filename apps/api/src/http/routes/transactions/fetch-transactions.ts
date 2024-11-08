import { eq } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'

import { db } from '@/db'
import { transactions } from '@/db/schemas'

export async function fetchTransactions(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/transactions', async (req, res) => {
      const { sub: userId } = await req.getCurrentUserId()

      const fetchedTransactions = await db
        .select()
        .from(transactions)
        .where(eq(transactions.userId, userId))
        .orderBy(transactions.occurredAt)
        .limit(20)

      return res.status(200).send({ transactions: fetchedTransactions })
    })
}
