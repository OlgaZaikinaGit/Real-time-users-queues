import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(event => {
  const { page, limit } = getQuery(event)

  const params = {}
  const take = limit ?? 5

  const isFirstPage = (page === '1') || !page
  const skip = isFirstPage ? 0 : page - 1

  if (page) {
    params.skip = skip * take
    params.take = take
  }

  return prisma.usersQueues.findMany(params)
})
