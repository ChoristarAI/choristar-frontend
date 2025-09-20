import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/shared/components/misc'
import { Footer, Header } from '@/shared/components/navigation'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex w-full max-w-[1440px] flex-col">
      <Header />
      <Hero />

      <Footer />
    </div>
  )
}
