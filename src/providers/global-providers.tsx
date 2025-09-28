import type { QueryClient } from '@tanstack/react-query'

import { ReactQueryProvider } from './react-query-provider'

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
