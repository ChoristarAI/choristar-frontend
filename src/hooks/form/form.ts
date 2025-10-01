import { createFormHook } from '@tanstack/react-form'

import { fieldContext, formContext } from './context'

import { SubscribeButton, TextField } from '@/shared/components/misc'

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
})
