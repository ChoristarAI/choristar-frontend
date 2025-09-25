import * as React from 'react'
import { cn } from '@/lib/utils'

type InputProps = {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  containerClassName?: string
  error?: boolean
} & React.ComponentPropsWithRef<'input'>

const ForwardedInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
  {
    containerClassName,
    endAdornment,
    startAdornment,
    className,
    type,
    error = false,
    disabled,
    ...rest
  },
  ref,
) => {
  const isStartActive = startAdornment !== undefined
  const isEndActive = endAdornment !== undefined
  return (
    <div
      className={cn(
        'relative flex h-10 w-full rounded-lg focus-visible:outline-none',
        containerClassName,
      )}
    >
      <div
        className={cn(
          'flex h-full w-full flex-row items-center rounded-lg border border-text-field bg-background px-1 ring-offset-background transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none',
          error && 'border-destructive focus-within:ring-destructive',
        )}
      >
        {isStartActive && (
          <div
            className={cn(
              'flex h-full items-center justify-center pl-3',
              disabled && 'opacity-40',
            )}
          >
            {startAdornment}
          </div>
        )}
        <input
          ref={ref}
          data-slot="input"
          type={type}
          spellCheck={false}
          autoComplete="off"
          className={cn(
            'flex h-full w-full min-w-0 border-none bg-transparent pr-3 pl-3 text-base font-medium file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:font-Inter-Tight placeholder:font-normal placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            isStartActive && ['pl-0'],
            isEndActive && ['pr-0'],
            className,
          )}
          aria-invalid={error}
          {...rest}
        />
        {isEndActive && (
          <div
            className={cn(
              'flex items-center justify-center pr-3',
              disabled && 'opacity-40',
            )}
          >
            {endAdornment}
          </div>
        )}
      </div>
    </div>
  )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(ForwardedInput)
Input.displayName = 'Input'

export { Input, type InputProps }
