import z from "zod"

const envSchema = z.object({
  JWT_SECRET: z.string(),
  BACKEND_PORT: z.coerce.number().default(3333),
})

export const env = envSchema.parse(process.env)
