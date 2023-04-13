<script setup>
const { signOut } = useSession()
const rail = ref(true)
const drawer = ref(true)
</script>

<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        class="bg-teal h-screen"
        theme="dark"
        permanent
        @click="rail = false"
    >
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
        >
            <template #append>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                />
            </template>
        </v-list-item>
        <v-divider />
        <v-list
            density="compact"
            nav
        >
            <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="Queues"
                value="queues"
            />
        </v-list>
        <template #append>
            <div class="pa-2">
                <v-btn
                    v-show="!rail"
                    block
                    @click="signOut({redirect: true, callbackUrl: '/signin'})"
                >
                    Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>
