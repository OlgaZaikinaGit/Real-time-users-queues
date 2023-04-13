<script setup>
const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
]
</script>

<template>
    <v-footer class="position-fixed-bottom d-flex flex-column px-0 py-0 position-fixed w-100">
        <div class="bg-teal d-flex w-100 align-center px-4 py-2">
            <strong>Get connected with us on social networks!</strong>
            <v-spacer />
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="plain"
                size="small"
            />
        </div>
        <div class="px-4 py-2 bg-grey-darken-3 text-center w-100">
            {{ new Date().getFullYear() }} — <strong>DigitalQueue</strong>
        </div>
    </v-footer>
</template>

<style>
  .position-fixed-bottom {
    bottom: 0;
  }
</style>
