import { IField } from '~/forms/fields/types'

export const PasswordField: IField = {
  name: 'password',
  type: 'password',
  label: 'First name',
  rules: [
    (value: string) => {
      if (value?.length > 3) { return true }

      return 'Password must be at least 3 characters.'
    }
  ]
}
