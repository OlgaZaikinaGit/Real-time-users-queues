import { IField } from '~/forms/fields/types'

export const EmailField: IField = {
  name: 'email',
  type: 'text',
  label: 'email',
  rules: [
    (value: string) => {
      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      if (reg.test(value)) { return true }

      return 'Invalid email.'
    }
  ]
}
