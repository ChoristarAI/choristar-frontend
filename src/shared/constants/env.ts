import { createEnv } from '@t3-oss/env-core'

import { z } from 'zod'

export const env = createEnv({
  server: {
    SERVER_URL: z.string().url().optional(),
    GOOGLE_SHEET_ID: z.string(),
    GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string(),
    GOOGLE_PRIVATE_KEY: z.string(),
  },
  clientPrefix: 'VITE_',
  client: {},
  runtimeEnv: {
    GOOGLE_SHEET_ID: import.meta.env.VITE_GOOGLE_SHEET_ID,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: import.meta.env
      .VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: import.meta.env.VITE_GOOGLE_PRIVATE_KEY,
  },
  emptyStringAsUndefined: true,
})
