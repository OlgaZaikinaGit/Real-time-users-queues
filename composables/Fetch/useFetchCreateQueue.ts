export default async (body: Record<string, string>) => {
  const { data, error } = await useFetch('/api/queues', {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body
  })

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage ?? 'Server error.'
    })
  }

  return { data, error }
}
