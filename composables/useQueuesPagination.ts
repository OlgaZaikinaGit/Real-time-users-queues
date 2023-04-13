export const useQueuesPagination = () => {
  const pagesLength = ref(1)
  const page = ref(1)
  const limit = ref(5)

  const refreshPagesCount = async () => {
    const { data } = await useFetch('/api/queues/count')
    pagesLength.value = Math.ceil((data.value?._count ?? 1) / limit.value)
  }

  return {
    refreshPagesCount,
    pagesLength,
    page
  }
}
