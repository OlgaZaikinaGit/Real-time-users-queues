<script setup>
const { $io } = useNuxtApp()
const showSnackbar = ref(false)
const snackbarMessage = ref('')

const updateMessage = ({ message }) => {
  snackbarMessage.value = message
  showSnackbar.value = true
}
onMounted(async () => {
  $io.on('refresh', updateMessage)
  $io.on('message', updateMessage)
  $io.on('disconnecting', updateMessage)
})
</script>

<template>
    <v-snackbar
        v-model="showSnackbar"
        color="bg-teal-lighten-5"
    >
        <div class="text-center">
            {{ snackbarMessage }}
        </div>
    </v-snackbar>
</template>
