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

import { cn } from '@/lib/utils'

interface WaitListFormProps {}

export const WaitListForm: React.FC<
  React.PropsWithChildren<WaitListFormProps>
> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

interface ButtonWithArrowProps {
  className?: string
}

export const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
  className,
}) => (
  <Button
    type="button"
    className={cn(
      'flex h-full w-full items-center justify-between gap-3 rounded-4xl px-3 capitalize md:w-max',
      className,
    )}
  >
    <span className="block text-sm">join the waitlist</span>
    <MoveRight className="h-6 w-6 text-white md:h-4 md:w-4 lg:h-5 lg:w-5" />
  </Button>
)

interface ButtonWithOutlineProps {
  className?: string
}

export const ButtonWithOutline: React.FC<ButtonWithOutlineProps> = ({
  className,
}) => (
  <Button
    className={cn(
      'relative w-max rounded-3xl px-5 py-3.5 font-medium',
      className,
    )}
    variant="outline"
  >
    Join the waitlist
  </Button>
)
