import {
  RouterProvider,
  createRouter as createTanstackRouter,
} from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalProviders, getContext } from './providers'
import { routeTree } from './routeTree.gen'
import './styles/global.css'

export const createRouter = () => {
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
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={createRouter()} />
    </StrictMode>,
  )
}
