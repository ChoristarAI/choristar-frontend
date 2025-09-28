import { createFileRoute } from '@tanstack/react-router'

import {
  Hero,
  PoweredMedleys,
  RehearsalReminders,
  ScoringAssistant,
  WaitListCard,
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
        <main className="flex flex-1 gap-6.5 bg-white pt-3 flex-col">
          <PoweredMedleys />
          <ScoringAssistant />
          <RehearsalReminders />
          <WaitListCard />
        </main>
        <Footer />
      </div>
    </div>
  )
}
