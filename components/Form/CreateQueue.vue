<script setup>
import { useCreateQueue } from '~/composables/useCreateQueue'
import useCreateQueueForm from '~/composables/Form/useCreateQueueForm'

const emits = defineEmits(['createQueue'])
const form = useCreateQueueForm()
const { create, errorMessage } = useCreateQueue()

const params = computed(() => form.fields.reduce((accumulator, currentValue) => {
  accumulator[currentValue.name] = currentValue.value

  return accumulator
}, {}))

const createQueue = async event => {
  const results = await event

  if (!results.valid) {
    return
  }

  const { data } = await create(params.value)

  emits('createQueue', data)
}
</script>

<template>
    <v-form
        fast-fail
        validate-on="submit"
        @submit.prevent="createQueue"
    >
        <v-card>
            <v-card-title class="bg-teal">
                <span class="text-h5">{{ form.title }}</span>
            </v-card-title>
            <v-alert
                v-if="errorMessage"
                :elevation="0"
                variant="tonal"
                density="compact"
                type="error"
                title="Error"
                :text="errorMessage"
                transition="fade-transition"
                class="rounded-0 pa-5"
            />
            <v-card-text>
                <v-container class="w-75">
                    <v-row>
                        <v-col
                            v-for="(field, index) in form.fields"
                            :key="`create-queue-field-${index}`"
                            cols="12"
                        >
                            <v-text-field
                                v-model="field.value"
                                :label="field.label"
                                :rules="field.rules"
                                :type="field.type"
                                required
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions class="bg-teal-lighten-5">
                <v-spacer />
                <v-btn
                    type="submit"
                    color="blue-darken-1"
                    variant="text"
                    @click="createQueue"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>
