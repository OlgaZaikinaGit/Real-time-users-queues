import { UserNameField } from '~/forms/fields/UserNameField'
import { PasswordField } from '~/forms/fields/PasswordField'

export default () => (reactive({
  title: 'Sign in',
  fields: [
    {
      value: ref('test'),
      ...UserNameField
    },
    {
      value: ref('test'),
      ...PasswordField
    }
  ]
})
)
