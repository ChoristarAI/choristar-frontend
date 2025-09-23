import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/shared/components/misc'
import { Footer, Header } from '@/shared/components/navigation'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-[#F9F8FB]">
      <div className="absolute inset-1 bg-gradient-to-tl from-[#6F46E50D] via-purple-50 to-[#FF647F0D] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        {/* <section className="container mx-auto flex h-screen items-center justify-center bg-gradient-to-b from-[#F9F8FB] to-white">
          Section Hero
        </section> */}
        <main className="flex-1 bg-white">My Main is here</main>
        <footer className="w-full bg-gray-100 py-6 text-center">
          My Footer is here
        </footer>
        {/* 
        <Hero />
        <Footer /> */}
      </div>
    </div>
  )
}
