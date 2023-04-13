<template>
    <v-app>
        <v-main>
            <v-card class="rounded-0">
                <v-layout class="h-screen">
                    <AdminSideBar />
                    <v-main>
                        <slot />
                    </v-main>
                </v-layout>
            </v-card>
        </v-main>
    </v-app>
</template>
