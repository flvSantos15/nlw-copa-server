import Fastify from 'fastify'

async function bootstrap() {
  const fastify = Fastify({
    logger: true, // digo que quero o log
  })

  fastify.get('/pools/count', () => {
    return { count: 123 }
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()
