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

export async function createTransaction(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/transactions',
    {
      schema: {
        security: [{ bearerAuth: [] }],
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

      const { title, amount, type, category, paymentMethod, date } = req.body

      const [transaction] = await db
        .insert(transactions)
        .values({
          title,
          amount,
          category,
          paymentMethod,
          type,
          occurredAt: date,
          userId,
        })
        .returning()

      return res.status(201).send({ id: transaction.id })
    },
  )
}
