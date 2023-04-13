import { IField } from '~/forms/fields/types'

export const LastNameField: IField = {
  name: 'lastname',
  type: 'text',
  label: 'Last name',
  rules: [
    (value: string) => {
      if (value?.length > 3) { return true }

      return 'Last name must be at least 3 characters.'
    }
  ]
}
