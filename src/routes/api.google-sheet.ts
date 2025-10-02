import { createFileRoute } from '@tanstack/react-router'
import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import type { WaitListSchema } from '@/shared/schemas'
import { env } from '@/shared/constants/env'

const initializeGoogleSheets = () => {
  const email = env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const key = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  const sheetID = env.GOOGLE_SHEET_ID
  if (!email || !key || !sheetID) {
    throw new Error('Missing required Google Sheets environment variables')
  }

  const auth = new JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return new GoogleSpreadsheet(sheetID, auth)
}

export const Route = createFileRoute('/api/google-sheet')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const doc = initializeGoogleSheets()
          await doc.loadInfo()

          const sheet = doc.sheetsByIndex[0]

          const list = await sheet.getRows()
          const emailList = list.map((l) => l.get('email'))

          const body: WaitListSchema = await request.json()
          const { email: postEmail, title, name } = body

          if (emailList.includes(postEmail)) {
            throw new Error('Email Already Exist')
          }

          await sheet.addRow({
            email: postEmail,
            name: name,
            title: title,
            timestamp: new Date().toISOString(),
          })
          return new Response(
            JSON.stringify({
              success: true,
              message: 'Successfully joined waitlist!',
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
      GET: async () => {
        try {
          const doc = initializeGoogleSheets()
          await doc.loadInfo()

          return new Response(
            JSON.stringify({
              success: true,
              data: doc.timeZone,
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
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            },
          )
        }
      },
    },
  },
})
