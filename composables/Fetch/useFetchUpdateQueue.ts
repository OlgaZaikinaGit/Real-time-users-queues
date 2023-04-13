export default async (id: string, body: Record<string, string>) => {
  const { data, error } = await useFetch(`/api/queues/${id}`, {
    method: 'POST',
    body
  })

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage ?? 'Server error.'
    })
  }

  return { data }
}
