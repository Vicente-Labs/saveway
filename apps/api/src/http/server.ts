import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import fastify from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { env } from '@/env'

import { errorHandler } from './error-handler'
import { authenticateWithGoogle } from './routes/auth/authenticate-with-google'
import { authenticateWithPassword } from './routes/auth/authenticate-with-password'
import { generateGoogleAuthLink } from './routes/auth/generate-google-auth-link'
import { registerAccountWithGoogle } from './routes/auth/register-account-with-google'
import { registerAccountWithPassword } from './routes/auth/register-account-with-password'
import { getCard } from './routes/cards/get-car'
import { registerCard } from './routes/cards/register-card'
import { createTransaction } from './routes/transactions/create-transaction'
import { deleteTransaction } from './routes/transactions/delete-transaction'
import { fetchTransactions } from './routes/transactions/fetch-transactions'
import { getTransaction } from './routes/transactions/get-transaction'
import { updateTransaction } from './routes/transactions/update-transaction'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.setErrorHandler(errorHandler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Saveway | API Specs',
      description: 'API documentation for Saveway web project',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(fastifyCors) // any front-end can access this API

app.register(registerAccountWithPassword)
app.register(registerAccountWithGoogle)
app.register(generateGoogleAuthLink)
app.register(authenticateWithPassword)
app.register(authenticateWithGoogle)

app.register(createTransaction)
app.register(fetchTransactions)
app.register(getTransaction)
app.register(updateTransaction)
app.register(deleteTransaction)

app.register(registerCard)
app.register(getCard)

app
  .listen({
    host: '0.0.0.0',
    port: env.BACKEND_PORT,
  })
  .then(() => console.log('HTTP server is running!'))
