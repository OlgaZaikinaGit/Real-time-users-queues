import { FirstNameField } from '~/forms/fields/FirstNameField'
import { LastNameField } from '~/forms/fields/LastNameField'
import { EmailField } from '~/forms/fields/EmailField'

export default () => (reactive({
  title: 'Make an appointment',
  fields: [
    {
      value: ref(null),
      ...FirstNameField
    },
    {
      value: ref(null),
      ...LastNameField
    },
    {
      value: ref(null),
      ...EmailField
    }
  ]
})
)
