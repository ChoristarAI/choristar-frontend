import { useCallback } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { XIcon } from 'lucide-react'
import type { WaitListSchema } from '@/shared/schemas'
import { PremiumSuccessToast } from '@/shared/components/misc'

export const useGoogleSheet = (close = () => {}) => {
  const { isFetching } = useQuery({
    queryKey: ['sheet-documents'],
    queryFn: () => fetch('/api/google-sheet').then((res) => res.json()),
    initialData: [],
  })

  async function postForm(data: WaitListSchema) {
    const response = await fetch('/api/google-sheet', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result?.error || 'Something went wrong, please try again')
    }

    return result
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: postForm,
    mutationKey: ['submit-waitlist-form'],
    onSuccess: () => {
      toast(<PremiumSuccessToast />, {
        duration: 8500,
        style: {
          padding: 0,
          width: 'fit-content',
        },
      })
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Something went wrong, please try again'

      toast.error('Form Submission Error', {
        description: errorMessage,
        icon: <XIcon className="h-6 w-6 text-destructive" />,
      })
    },
  })

  const getFormValue = useCallback(
    async (data: WaitListSchema) => {
      await mutateAsync(data)
      new Promise((resolve) => setTimeout(resolve, 1000)).then(close)
    },
    [close],
  )

  return {
    getFormValue,
    isPending,
    isFetching,
  }
}
