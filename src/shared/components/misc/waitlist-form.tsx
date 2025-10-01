import { MoveRight } from 'lucide-react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui'

import { useAppForm } from '@/hooks'
import { cn } from '@/lib/utils'
import { waitListSchema } from '@/shared/schemas'

interface WaitListFormProps {
  email?: string
}

export const WaitListForm: React.FC<
  React.PropsWithChildren<WaitListFormProps>
> = ({ children, email = '' }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-semibold text-lg font-inter-tight">
            Join The Waitlist
          </DialogTitle>
          <DialogDescription className="font-inter-tight text-[14px]">
            Receive monthly updates, get an opportunity to join the beta testing
            group, and be the first to know when we launch!
          </DialogDescription>
        </DialogHeader>
        <WaitListFormComponent email={email} />
      </DialogContent>
    </Dialog>
  )
}

interface ButtonWithArrowProps {
  className?: string
  clear: () => void
  email?: string
}

export const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
  className,
  clear,
  email,
}) => (
  <WaitListForm email={email}>
    <Button
      type="button"
      className={cn(
        'flex h-full w-full items-center justify-between gap-3 rounded-4xl px-3 capitalize md:w-max',
        className,
      )}
      onClick={clear}
    >
      <span className="block text-sm">join the waitlist</span>
      <MoveRight className="h-6 w-6 text-white md:h-4 md:w-4 lg:h-5 lg:w-5" />
    </Button>
  </WaitListForm>
)

interface ButtonWithOutlineProps {
  className?: string
}

export const ButtonWithOutline: React.FC<ButtonWithOutlineProps> = ({
  className,
}) => (
  <WaitListForm>
    <Button
      className={cn(
        'relative w-max rounded-3xl px-5 py-3.5 font-medium',
        className,
      )}
      variant="outline"
      type="button"
    >
      Join the waitlist
    </Button>
  </WaitListForm>
)

interface WaitListFormComponentProps {
  email: string
}

const WaitListFormComponent: React.FC<WaitListFormComponentProps> = ({
  email,
}) => {
  const form = useAppForm({
    defaultValues: {
      email: email || '',
      name: '',
      title: '',
    },
    validators: {
      onBlur: waitListSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value)
      // Show success message
      alert('Form submitted successfully!')
    },
  })

  return (
    <div className="w-full py-4">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="gap-5 flex flex-col"
      >
        <form.AppField name="name">
          {(field) => <field.TextField placeholder="Name *" />}
        </form.AppField>
        <form.AppField name="email">
          {(field) => <field.TextField placeholder="Email *" />}
        </form.AppField>
        <form.AppField name="title">
          {(field) => <field.TextField placeholder="Vocalist/Musician/MD *" />}
        </form.AppField>

        <form.AppForm>
          <form.SubscribeButton className="rounded-4xl mt-2.5" label="Submit" />
        </form.AppForm>
      </form>
    </div>
  )
}
