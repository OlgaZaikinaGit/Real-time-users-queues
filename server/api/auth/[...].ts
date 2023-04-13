import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  providers: [
    CredentialsProvider.default({
      name: 'Credentials',
      page: '/signin',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'test' },
        password: { label: 'Password', type: 'password', placeholder: 'test' }
      },
      authorize (credentials: any) {
        const user = { id: '1', name: 'J Smith', username: 'test', password: 'test', image: '' }

        if (credentials?.username === user.username && credentials?.password === user.password) {
          return user
        } else {
          console.error('Warning: Malicious login attempt registered, bad credentials provided')
          return null
        }
      }
    })
  ]
})
