<script setup>
import useCredentialAuthForm from '~/composables/Form/useCredentialAuthForm'
import useCredentialAuth from '~/composables/FormHandlers/useCredentialAuth'

const form = useCredentialAuthForm()
const { authHandler, errorMessage } = useCredentialAuth()
const auth = async () => {
  await authHandler({
    username: form.fields[0].value,
    password: form.fields[1].value
  })
}
</script>

<template>
    <v-form
        fast-fail
        @submit.prevent
    >
        <v-card class="w-100">
            <v-card-title class="text-h5 font-weight-regular bg-teal">
                {{ form.title }}
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
                class="rounded-0"
            />
            <v-card-text class="mt-5">
                <v-text-field
                    v-for="(field, index) in form.fields"
                    :key="`signing-field-${index}`"
                    v-model="field.value"
                    :label="field.label"
                    :rules="field.rules"
                    :type="field.type"
                    variant="underlined"
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    type="submit"
                    color="success"
                    @click="auth"
                >
                    Login
                    <v-icon
                        icon="mdi-chevron-right"
                        end
                    />
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>
