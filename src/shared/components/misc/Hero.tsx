import { PhoneMockOne } from '@/assets/svg'

interface HeroProps {}

export const Hero: React.FC<React.PropsWithChildren<HeroProps>> = ({
  children,
}) => {
  return (
    <section className="section-container z-10 h-screen bg-[linear-gradient(180deg,#F9F8FB_70.67%,#FFFFFF_100%)]">
      <div className="flex h-full w-full flex-col lg:flex-row">
        <div className="flex h-full w-full items-center justify-center lg:w-1/3">
          <h1 className="block">
            <span className="block">Create.</span>
            <span className="block">Lead.</span>
            <span className="block">Harmonize.</span>
          </h1>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="block h-72 w-64 align-middle">
            <image width={250} height={400} href="/phone-left.png" />
          </div>
        </div>
      </div>
    </section>
  )
}
