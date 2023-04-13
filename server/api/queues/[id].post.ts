import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  const { id } = event.context.params
  const body = await readBody(event)
  const { status } = body

  return prisma.usersQueues.update({
    where: { id: parseInt(id) },
    data: {
      status: {
        set: status
      }
    }
  })
})
