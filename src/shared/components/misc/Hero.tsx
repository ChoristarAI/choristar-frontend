interface HeroProps {}

export const Hero: React.FC<React.PropsWithChildren<HeroProps>> = ({
  children,
}) => {
  return (
    <section className="relative w-full">
      <div className="bg-[linear-gradient(180deg,#F9F8FB_70.67%,#FFFFFF_100%)] absolute z-10 w-full h-[670px]"></div>
      <div className="absolute -top-[119px] left-[146.74px] -z-10 h-[431.46px] w-[442.3px] rotate-[34.68deg] bg-[#FF647F0D] opacity-100 backdrop-blur-[150px]" />
      <div className="absolute -top-[294px] -left-[244.23px] -z-10 h-[620.34px] w-[641.63px] rotate-[34.68deg] bg-[#6F46E50D] opacity-100 backdrop-blur-[150px]" />
      <div>Loa</div>
    </section>
  )
}
