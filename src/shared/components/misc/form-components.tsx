import { useStore } from '@tanstack/react-form'

import { Loader } from 'lucide-react'
import type { ComponentProps } from 'react'

import { Button, Input } from '../ui'
import type { InputProps } from '../ui'

import { useFieldContext, useFormContext } from '@/hooks/form'

interface SubscribeButtonProps extends ComponentProps<'button'> {
  label: string
}

export function SubscribeButton({ label, ...props }: SubscribeButtonProps) {
  const form = useFormContext()
  return (
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <Button {...props} type="submit" disabled={isSubmitting || !canSubmit}>
          {isSubmitting ? (
            <>
              <Loader className="h-4 w-4 animate-spin text-white" />
              {'  '} Submitting ...
            </>
          ) : (
            label
          )}
        </Button>
      )}
    </form.Subscribe>
  )
}

function ErrorMessages({
  errors = [],
}: {
  errors: Array<string | { message: string }>
}) {
  const err = errors[0]
  if (!err) return null
  return (
    <div
      key={typeof err === 'string' ? err : err.message}
      className="text-red-400 mt-1 font-medium text-[12.61px] font-inter-tight"
    >
      {typeof err === 'string' ? err : err.message}
    </div>
  )
}

export function TextField({ placeholder, ...props }: InputProps) {
  const field = useFieldContext<string>()
  const errors = useStore(field.store, (state) => state.meta.errors)

  return (
    <div>
      <Input
        value={field.state.value}
        placeholder={placeholder}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        {...props}
      />
      {field.state.meta.isTouched && errors.length > 0 && (
        <ErrorMessages errors={errors} />
      )}
    </div>
  )
}
