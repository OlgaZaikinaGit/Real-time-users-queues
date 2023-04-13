export default async (params: Record<string, any> = {}) => {
  const { data, error } = await useFetch('/api/queues', { params })

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage
    })
  }

  return { data }
}
