import { ReactQueryProvider } from './react-query-provider'
import type { QueryClient } from '@tanstack/react-query'

interface GlobalProvidersProps {
  queryClient: QueryClient
}

export const GlobalProviders: React.FC<
  React.PropsWithChildren<GlobalProvidersProps>
> = ({ children, queryClient }) => {
  return (
    <ReactQueryProvider queryClient={queryClient}>
      {children}
    </ReactQueryProvider>
  )
}
