import z from 'zod'

const envSchema = z.object({
  JWT_SECRET: z.string(),
  BACKEND_PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_REDIRECT_URI: z.string().url(),
})

export const env = envSchema.parse(process.env)
