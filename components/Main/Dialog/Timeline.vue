<script setup>
const props = defineProps({
  dialog: Boolean
})
const showDialog = computed(() => props.dialog)
</script>

<template>
    <v-dialog
        v-model="showDialog"
        :scrim="false"
        persistent
        width="auto"
    >
        <v-card
            class="bg-teal"
            color="primary"
        >
            <v-card-text class="bg-teal">
                Please stand by
                <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
