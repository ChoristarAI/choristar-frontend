import { MoveRight } from 'lucide-react'

import { Button, Input } from '../ui'

import {
  PolygonLeftBottom,
  PolygonLeftTop,
  PolygonRightBottom,
  PolygonRightTop,
} from '@/assets/svg'

export const WaitListCard = () => {
  return (
    <section className="section-container  w-full px-4 md:px-8 lg:px-10 xl:px-16">
      <div className="py-14 md:py-24">
        <div className="w-full relative h-[250px] bg-choristar-primary rounded-3xl overflow-hidden">
          <div className="md:block hidden">
            <div className="absolute -bottom-1 z-1">
              <PolygonLeftBottom />
            </div>
            <div className="absolute -bottom-1">
              <PolygonLeftTop />
            </div>
            <div className="absolute -bottom-1 right-0">
              <PolygonRightTop />
            </div>
            <div className="absolute -bottom-1 right-0 z-1">
              <PolygonRightBottom />
            </div>
          </div>
          <div className="flex h-full items-center justify-center w-full md:flex-row flex-col gap-8 md:gap-7 px-4">
            <p className="text-pretty text-white text-center text-2xl">
              Join our Waitlist
            </p>
            <Input
              className="px-2 md:px-4 placeholder:font-light placeholder:text-sm"
              containerClassName="lg:w-md md:w-sm rounded-4xl bg-[#F5F5F7] h-13.5"
              placeholder="Type your email"
              endAdornment={
                <Button className="rounded-4xl capitalize">
                  <span className="block text-sm">join the waitlist</span>
                  <MoveRight className="h-6 w-6 text-white md:h-4 md:w-4 lg:h-5 lg:w-5" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
