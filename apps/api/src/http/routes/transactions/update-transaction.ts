import { and, eq } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { db } from '@/db'
import { transactions } from '@/db/schemas'
import {
  transactionCategoryZodEnum,
  transactionPaymentMethodZodEnum,
  transactionTypeZodEnum,
} from '@/utils'

export async function updateTransaction(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/transactions/:id',
    {
      schema: {
        security: [{ bearerAuth: [] }],
        params: z.object({
          id: z.string().uuid(),
        }),
        body: z.object({
          title: z.string(),
          amount: z.string(),
          type: transactionTypeZodEnum,
          category: transactionCategoryZodEnum,
          paymentMethod: transactionPaymentMethodZodEnum,
          date: z.coerce.date(),
        }),
      },
    },
    async (req, res) => {
      const { sub: userId } = await req.getCurrentUserId()
      const { id } = req.params
      const { title, amount, type, category, paymentMethod, date } = req.body

      const [transaction] = await db
        .update(transactions)
        .set({
          title,
          amount,
          category,
          paymentMethod,
          type,
          occurredAt: date,
        })
        .where(and(eq(transactions.id, id), eq(transactions.userId, userId)))
        .returning()

      if (!transaction) {
        return res.status(404).send({ message: 'Transaction not found' })
      }

      return res.status(200).send({ id: transaction.id })
    },
  )
}
