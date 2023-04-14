<script setup>
import useFetchUpdateQueue from '~/composables/Fetch/useFetchUpdateQueue'
import { useQueuesPagination } from '~/composables/useQueuesPagination'
import { useQueues } from '~/composables/useQueues'

useHead({
  title: 'Admin panel'
})
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

const {
  statuses,
  allQueues,
  isFetching,
  refreshQueues
} = useQueues()
const {
  page,
  pagesLength,
  refreshPagesCount
} = useQueuesPagination()
const { $io } = useNuxtApp()

const updateQueue = async (id, status) => {
  await useFetchUpdateQueue(id, { status })
  $io.emit('update', `Update queue id = ${id}.`)
}

refreshPagesCount()
refreshQueues({ page: page.value })

onMounted(async () => {
  $io.on('refresh', async () => {
    await refreshPagesCount()
    await refreshQueues({ page: page.value })
  })
})
watch(page, value => {
  refreshQueues({ page: value })
})
</script>

<template>
    <MainSnackbar />
    <MainDialogTimeline :dialog="isFetching" />
    <div>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                        id
                    </th>
                    <th class="text-left">
                        First Name
                    </th>
                    <th class="text-left">
                        Last Name
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                    <th class="text-left">
                        status
                    </th>
                    <th class="text-left">
                        Created at
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(queue, index) in allQueues"
                    :index="`queue-${index}`"
                >
                    <td>{{ queue.id }}</td>
                    <td>{{ queue.first_name }}</td>
                    <td>{{ queue.last_name }}</td>
                    <td>{{ queue.email }}</td>
                    <td>
                        <v-select
                            :ref="`${queue.id}-${index}`"
                            v-model="queue.status"
                            :items="statuses"
                            density="compact"
                            @update:modelValue="updateQueue(queue.id, queue.status)"
                        />
                    </td>
                    <td>{{ queue.created_at }}</td>
                </tr>
            </tbody>
        </v-table>
        <div class="text-center">
            <v-pagination
                v-model="page"
                :length="pagesLength"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
            />
        </div>
    </div>
</template>
