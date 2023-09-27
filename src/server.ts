import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'upload-ai api'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running at http://localhost:3333/')
  })
