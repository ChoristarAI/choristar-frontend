import { TanstackDevtools } from '@tanstack/react-devtools'
import type { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import TanStackQueryDevtools from '../integrations/devtools'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    title: 'Choristar AI - Revolutionizing Music Creation',
    meta: [
      {
        name: 'keywords',
        content:
          'AI music, music creation, vocalists, musicians, instrumentalists, music technology',
      },
      { name: 'author', content: 'Choristar AI' },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },

      // Open Graph (Facebook)
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://choristar.io' },
      {
        property: 'og:title',
        content: 'Choristar AI - Revolutionizing Music Creation',
      },
      {
        property: 'og:description',
        content:
          'Create amazing music with AI. Join musicians, vocalists, and instrumentalists on our platform.',
      },
      { property: 'og:image', content: 'https://choristar.io/og-image.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: 'Choristar AI - Music Creation Platform',
      },
      { property: 'og:site_name', content: 'Choristar AI' },
      { property: 'og:locale', content: 'en_US' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@choristaraiapp' },
      { name: 'twitter:creator', content: '@choristaraiapp' },
      {
        name: 'twitter:title',
        content: 'Choristar AI - Revolutionizing Music Creation',
      },
      {
        name: 'twitter:description',
        content:
          'Create amazing music with AI. Join our waitlist for early access.',
      },
      {
        name: 'twitter:image',
        content: 'https://choristar.io/og-image.png',
      },
      { name: 'twitter:image:alt', content: 'Choristar AI Platform' },

      { name: 'apple-mobile-web-app-title', content: 'Choristar AI' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      { name: 'format-detection', content: 'telephone=no' },

      { name: 'msapplication-TileColor', content: '#F9F8FB' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'msapplication-tap-highlight', content: 'no' },

      { link: { rel: 'canonical', href: 'https://choristar.io' } },
    ],
    links: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#F9F8FB' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument() {
  return (
    <>
      <HeadContent />
      <Outlet />
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Choristar AI Panel',
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
        ]}
      />
      <Scripts />
    </>
  )
}
