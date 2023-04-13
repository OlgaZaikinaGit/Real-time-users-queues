import useFetchCreateQueue from '~/composables/Fetch/useFetchCreateQueue'

export const useCreateQueue = () => {
  const errorMessage = ref(null)
  const create = async (body: Record<string, string>) => {
    try {
      const { data } = await useFetchCreateQueue(body)

      return { data }
    } catch (e) {
      errorMessage.value = e.message

      throw createError({
        statusCode: e.statusCode,
        statusMessage: e.statusMessage ?? 'Server error.'
      })
    }
  }
  return {
    create,
    errorMessage
  }
}
