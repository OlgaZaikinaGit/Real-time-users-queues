import useFetchQueues from '~/composables/Fetch/useFetchQueues'
import { usersQueues } from '@prisma/client'

const statuses = [ 'new', 'ready', 'canceled', 'in_work', 'processed' ];

export const useQueues = () => {
  const isFetching = ref(false)
  const allQueues = ref<usersQueues[]>([])

  const refreshQueues = async (queryParams: Record<string, any>) => {
    isFetching.value = true

    const { data } = await useFetchQueues(queryParams)
    allQueues.value = data.value ?? []
    isFetching.value = false
  }

  const newQueues = computed(() => (allQueues.value.filter(item => item.status === 'new')))
  const readyQueues = computed(() => (allQueues.value.filter(item => item.status === 'ready')))

  return {
    statuses,
    isFetching,
    allQueues,
    newQueues,
    readyQueues,
    refreshQueues
  }
}
