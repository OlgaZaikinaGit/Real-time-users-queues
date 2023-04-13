export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  routeRules: {
    '/admin/**': { ssr: false }
  },
  dirs: [
    'composables/**'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  modules: [
    '~/modules/socket',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    isEnabled: true,
    origin: 'http://localhost:3000',
    basePath: '/api/auth',
    enableSessionRefreshPeriodically: false,
    enableSessionRefreshOnWindowFocus: true,
    enableGlobalAppMiddleware: false,
    defaultProvider: 'credentials',
    globalMiddlewareOptions: {
      allow404WithoutAuth: false,
      addDefaultCallbackUrl: false
    }
  }
})
