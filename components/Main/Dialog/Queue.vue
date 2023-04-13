<script setup>
const props = defineProps({
  dialog: Boolean
})
const { $io } = useNuxtApp()
const queueData = ref(null)
const showDialog = ref(props.dialog)
const createQueue = data => {
  queueData.value = data.value
  $io.emit('update', 'Create queue.')
}
</script>

<template>
    <v-dialog
        v-model="showDialog"
        scrollable
        persistent
    >
        <v-card
            v-if="queueData"
            class="pa-0"
        >
            <v-card-text class="pa-0">
                <v-container class="pa-0">
                    <v-alert
                        :elevation="0"
                        variant="tonal"
                        density="compact"
                        type="success"
                        title="Success"
                        transition="fade-transition"
                        class="rounded-0 pa-5"
                    >
                        Your number in line <strong>{{ queueData.id }}</strong>
                    </v-alert>
                </v-container>
            </v-card-text>
            <v-card-actions class="bg-teal-lighten-5">
                <v-spacer />
                <v-btn
                    type="submit"
                    color="blue-darken-1"
                    variant="text"
                    @click="showDialog = !showDialog"
                >
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
        <FormCreateQueue
            v-else
            @createQueue="createQueue"
        />
    </v-dialog>
</template>
