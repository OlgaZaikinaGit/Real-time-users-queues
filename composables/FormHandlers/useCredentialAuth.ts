export default () => {
  const { signIn } = useSession()
  const errorMessage: Ref<string|null> = ref(null)

  const authHandler = async ({ username, password }: {username: string, password: string}) => {
    console.log({ username, password })
    const { error, url } = await signIn('credentials', {
      username,
      password,
      redirect: true,
      callbackUrl: '/admin'
    })
    if (error) {
      errorMessage.value = 'Invalid login or password.'
    } else {
      errorMessage.value = null

      return navigateTo(url, { external: true })
    }
  }

  return { authHandler, errorMessage }
}
