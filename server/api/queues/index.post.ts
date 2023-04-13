import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const { firstname, lastname, email } = body

  return prisma.usersQueues.create({
    data: {
      first_name: firstname,
      last_name: lastname,
      email
    }
  })
})
