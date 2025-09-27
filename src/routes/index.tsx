import { createFileRoute } from '@tanstack/react-router'

import {
  Hero,
  PoweredMedleys,
  ScoringAssistant,
} from '@/shared/components/misc'
import { Footer, Header } from '@/shared/components/navigation'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-[#F9F8FB]">
      <div className="relative z-10">
        <Header />
        <Hero />
        <main className="flex flex-1 gap-9 bg-white pt-3 flex-col">
          <PoweredMedleys />
          <ScoringAssistant />
        </main>
        <Footer />
      </div>
    </div>
  )
}
