import { IField } from '~/forms/fields/types'

export const UserNameField: IField = {
  name: 'username',
  type: 'text',
  label: 'User name',
  rules: [
    (value: string) => {
      if (value?.length > 3) { return true }

      return 'User name must be at least 3 characters.'
    }
  ]
}
