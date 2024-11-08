import { FastifyInstance } from 'fastify'

export async function generateGoogleAuthLink(app: FastifyInstance) {
  app.get('/users/google/auth-link', async (_, res) => {
    return res.status(200).send({
      link: `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`,
    })
  })
}
