<template>
    <v-app>
        <v-layout>
            <v-main>
                <v-row
                    class="h-screen"
                    no-gutters
                >
                    <v-col
                        cols="12"
                        class="w-100 h-100 overflow-auto"
                        align-self="start"
                    >
                        <slot />
                    </v-col>
                    <v-col align-self="end" />
                </v-row>
                <MainFooter />
            </v-main>
        </v-layout>
    </v-app>
</template>
