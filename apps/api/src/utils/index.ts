import { z } from 'zod'

export const transactionTypeZodEnum = z.enum([
  'INVESTMENT',
  'TRANSFER',
  'OUTCOME',
  'INCOME',
])

export const transactionCategoryZodEnum = z.enum([
  'TRANSPORTATION',
  'ENTERTAINMENT',
  'SUBSCRIPTIONS',
  'MAINTENANCE',
  'INVESTMENTS',
  'HEALTHCARE',
  'RESTAURANT',
  'GROCERIES',
  'UTILITIES',
  'EDUCATION',
  'INSURANCE',
  'SHOPPING',
  'CHARITY',
  'HOUSING',
  'TRAVEL',
  'SALARY',
  'TAXES',
  'GIFTS',
  'OTHER',
])

export const transactionPaymentMethodZodEnum = z.enum([
  'BANK_TRANSFER',
  'CREDIT_CARD',
  'DEBIT_CARD',
  'CRYPTO',
  'OTHER',
  'CASH',
  'PIX',
])
