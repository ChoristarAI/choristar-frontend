import { useCallback, useState } from 'react'

import { Input } from '../ui'
import { ButtonWithArrow } from './waitlist-form'

import {
  PolygonLeftBottom,
  PolygonLeftTop,
  PolygonRightBottom,
  PolygonRightTop,
} from '@/assets/svg'

export const WaitListCard = () => {
  const [email, setEmailValue] = useState('')
  const [displayEmail, setDisplayEmail] = useState('')

  const handleClear = useCallback(() => {
    setEmailValue(displayEmail)
    setDisplayEmail('')
  }, [displayEmail])

  return (
    <section className="section-container w-full px-4 md:px-8 lg:px-10 xl:px-16">
      <div className="py-8 pb-11 md:py-20">
        <div className="relative h-fit w-full overflow-hidden rounded-3xl bg-choristar-primary px-4 py-10 md:h-[250px] md:px-0 md:py-0">
          <div className="hidden md:block">
            <div className="absolute -bottom-1 z-1">
              <PolygonLeftBottom />
            </div>
            <div className="absolute -bottom-1">
              <PolygonLeftTop />
            </div>
            <div className="absolute right-0 -bottom-1">
              <PolygonRightTop />
            </div>
            <div className="absolute right-0 -bottom-1 z-1">
              <PolygonRightBottom />
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-7">
            <p className="text-center text-2xl text-pretty text-white">
              Join our Waitlist
            </p>
            <Input
              className="px-2 placeholder:text-sm placeholder:font-light md:px-4"
              containerClassName="lg:w-md md:w-sm bg-[#F5F5F7] h-13.5 rounded-4xl"
              innerClassName="rounded-4xl"
              placeholder="Type your email"
              onChange={(e) => setDisplayEmail(e.target.value)}
              value={displayEmail}
              endAdornment={
                <ButtonWithArrow
                  className="rounded-4xl capitalize"
                  email={email}
                  clear={handleClear}
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
