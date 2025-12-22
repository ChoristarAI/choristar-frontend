import { nigerianChurches } from '@/data/churches'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/churches')({
  server: {
    handlers: {
      GET: async () => {
        try {
          return new Response(
            JSON.stringify({
              message: 'Churches API Endpoint',
              data: nigerianChurches,
              success: true,
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            },
          )
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : 'Internal server error'

          return new Response(
            JSON.stringify({
              success: false,
              error: errorMessage,
            }),
            {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            },
          )
        }
      },
    },
  },
})
