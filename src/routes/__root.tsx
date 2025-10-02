import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { Toaster } from 'sonner'

import TanStackQueryDevtools from '../integrations/devtools'
import appCss from '../styles/global.css?url'
import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Choristar AI - Revolutionizing Music Creation',
      },
      {
        name: 'Googlebot',
        content: 'index, follow',
      },
      {
        name: 'theme-color',
        content: '#F9F8FB',
      },
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
      { name: 'twitter:url', content: 'https://choristar.io' },

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
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
  }),
  shellComponent: RootDocument,
})

const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Choristar AI',
  applicationCategory: 'MusicApplication',
  operatingSystem: 'Web Browser',
  description:
    'AI-powered music creation platform for musicians, vocalists, and instrumentalists',
  url: 'https://choristar.io/',
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <HeadContent />
        {children}
        <TanStackDevtools
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
        <Toaster />
        <Scripts />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </body>
    </html>
  )
}
