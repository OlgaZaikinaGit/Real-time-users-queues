<script setup>
import { useQueues } from '~/composables/useQueues'

useHead({
  title: 'Real time Queue'
})

const {
  newQueues,
  readyQueues,
  refreshQueues
} = useQueues()
const { $io } = useNuxtApp()
const showDialog = ref(false)

refreshQueues()

onMounted(() => {
  showDialog.value = true
  $io.on('refresh', refreshQueues)
})
</script>

<template>
    <div class="digital-queue h-100">
        <MainDialogQueue
            v-if="showDialog"
            :dialog="showDialog"
            class="w-50"
        />
        <MainSnackbar />
        <v-row
            class="h-100 overflow-auto"
            no-gutters
        >
            <v-col
                cols="12"
                sm="6"
            >
                <v-sheet class="ma-2 pa-2">
                    <div class="text-h5 text-grey-darken-2 bg-teal-lighten-5 pa-2">
                        <v-icon icon="mdi-account-group-outline" />
                        Waiting (ID)
                    </div>
                </v-sheet>
                <v-divider />
                <div class="pa-2">
                    <div
                        v-for="newQueue in newQueues"
                        :key="`new-queue-${newQueue.id}`"
                        class="text-h4 pa-2 font-weight-bold text-grey-darken-2"
                    >
                        {{ newQueue.id }}
                    </div>
                </div>
            </v-col>
            <v-divider vertical />
            <v-col
                cols="12"
                sm="6"
            >
                <v-sheet class="ma-2 pa-2">
                    <div class="text-h5 text-orange-darken-4 bg-orange-lighten-5 pa-2">
                        <v-icon icon="mdi-account-group-outline" />
                        Ready (ID)
                    </div>
                </v-sheet>
                <v-divider />
                <div class="pa-2">
                    <div
                        v-for="readyQueue in readyQueues"
                        :key="`ready-queue-${readyQueue.id}`"
                        class="text-h4 pa-2 font-weight-bold text-grey-darken-2"
                    >
                        {{ readyQueue.id }}
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
