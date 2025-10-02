import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import { GlobalProviders, getContext } from './providers'
import { routeTree } from './routeTree.gen'

export const getRouter = () => {
  const rqCtx = getContext()

  const router = createTanstackRouter({
    routeTree,
    context: { ...rqCtx },
    defaultPreload: 'intent',
    Wrap: (props: { children: React.ReactNode }) => {
      return <GlobalProviders {...rqCtx}>{props.children}</GlobalProviders>
    },
    defaultPreloadStaleTime: 0,
    scrollRestoration: true,
    defaultNotFoundComponent: () => <div>Page Not Found</div>,
  })

  setupRouterSsrQueryIntegration({ router, queryClient: rqCtx.queryClient })

  return router
}
