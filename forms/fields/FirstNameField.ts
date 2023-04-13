import { IField } from '~/forms/fields/types'

export const FirstNameField: IField = {
  name: 'firstname',
  type: 'text',
  label: 'First name',
  rules: [
    (value: string) => {
      if (value?.length > 3) { return true }

      return 'First name must be at least 3 characters.'
    }
  ]
}
