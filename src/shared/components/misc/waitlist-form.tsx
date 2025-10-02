import { MoveRight, Music2, Sparkles } from 'lucide-react'

import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui'

import { useAppForm, useGoogleSheet } from '@/hooks'
import { cn } from '@/lib/utils'
import { waitListSchema } from '@/shared/schemas'

interface WaitListFormProps {
  email?: string
}

export const WaitListForm: React.FC<
  React.PropsWithChildren<WaitListFormProps>
> = ({ children, email = '' }) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-inter-tight text-lg font-semibold">
            Join The Waitlist
          </DialogTitle>
          <DialogDescription className="font-inter-tight text-[14px]">
            Receive monthly updates, get an opportunity to join the beta testing
            group, and be the first to know when we launch!
          </DialogDescription>
        </DialogHeader>
        <WaitListFormComponent email={email} close={() => setOpen(false)} />
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
  close: () => void
  email: string
}

const WaitListFormComponent: React.FC<WaitListFormComponentProps> = ({
  close,
  email,
}) => {
  const { getFormValue, isFetching, isPending } = useGoogleSheet(close)
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
      getFormValue(value)
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
        className="flex flex-col gap-5"
      >
        <form.AppField name="name">
          {(field) => <field.TextField placeholder="Name *" type="text" />}
        </form.AppField>
        <form.AppField name="email">
          {(field) => <field.TextField placeholder="Email *" type="email" />}
        </form.AppField>
        <form.AppField name="title">
          {(field) => <field.TextField placeholder="Vocalist/Musician/MD *" />}
        </form.AppField>

        <form.AppForm>
          <form.SubscribeButton
            className="mt-2.5 rounded-4xl"
            label="Submit"
            loading={isFetching || isPending}
            loadingText={isFetching ? 'Please wait...' : undefined}
          />
        </form.AppForm>
      </form>
    </div>
  )
}

export const PremiumSuccessToast = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="relative max-w-md overflow-hidden rounded-lg bg-gradient-to-br from-[#6F46E50D] via-choristar-primary to-[#FF647F0D] p-4 text-white shadow-2xl"
  >
    <div className="absolute inset-0">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 300,
            y: Math.random() * 80,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            delay: i * 0.2,
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>

    <div className="relative z-10 flex items-center gap-3">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <Sparkles className="h-8 w-8 text-[#FFF0F2]" />
      </motion.div>

      <div className="flex-1">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-inter-tight font-semibold text-[#414141]"
        >
          You're on the List! ✨
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-1 font-inter-tight text-sm text-pretty text-blue-100"
        >
          Get ready for something amazing
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 5 }}
        animate={{
          rotate: [0, 15, -15, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Music2 className="h-6.5 w-6.5 text-choristar-secondary" />
      </motion.div>
    </div>
  </motion.div>
)
