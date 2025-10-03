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
      <div className="relative z-10 w-full">
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,#6F46E50D_20%,transparent_60%),radial-gradient(circle_at_50%_50%,#FF647F0D_20%,transparent_60%)] opacity-60"></div>
        <Header />
        <Hero />
        <main className="flex flex-1 flex-col gap-6.5 bg-white pt-3">
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
