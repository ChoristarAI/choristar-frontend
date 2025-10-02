import { X } from 'lucide-react'
import { motion } from 'motion/react'

import { Button } from '../ui'
import { ButtonWithOutline } from './waitlist-form'

import { CommonIcons } from '@/assets'
import { cn } from '@/lib/utils'

export const RehearsalReminders = () => {
  return (
    <section className="section-container w-full px-4 md:px-8 lg:px-10 xl:px-16">
      <div className="grid h-full w-full grid-cols-2 items-center gap-16 py-14 md:gap-4 md:py-24">
        <div className="col-span-2 w-full place-content-center place-items-center items-center-safe md:col-span-1">
          <div className="relative flex min-h-96 w-full items-center justify-center">
            <div className="absolute -bottom-5 h-[163px] w-full max-w-78 rounded-br-2xl rounded-bl-2xl bg-[#F5F5F7] shadow-2xl md:max-w-[310px]"></div>
            <div className="absolute z-10 flex min-h-80 w-full max-w-68 flex-col gap-3 rounded-2xl bg-[#F5F5F7] px-4 py-4.5 shadow-2xl md:max-w-[276px]">
              <div className="absolute -top-8 -right-10">
                <motion.div
                  initial={{ y: 5 }}
                  animate={{
                    rotate: [-10, 10, -10, 0],
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  className="absolute z-10 flex h-13 w-13 items-center justify-center rounded-full bg-choristar-primary shadow-[0px_4.38px_54.81px_0px_#7B4FFF]"
                >
                  <CommonIcons.notification fill="white" />
                </motion.div>
                <motion.div
                  initial={{ y: 5 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  className="shadow-3xl mt-2 ml-4 flex items-center rounded border border-[#D7D7DB] bg-white px-4 py-2.5 pl-10 font-inter-tight text-[9px] text-[#8E8E94]"
                >
                  Set Reminder
                </motion.div>
              </div>
              <div className="flex w-full flex-col gap-3">
                <div className="overflow-hidden rounded-md border border-[#D7D7DB] bg-white">
                  <div className="relative">
                    <div className="absolute inset-0 w-full backdrop-blur-[2px]"></div>
                    <div className="flex flex-col gap-3 px-2.5 py-2">
                      <span className="block text-[10px] font-semibold text-pretty text-main-text">
                        When do you want to rehearse?
                      </span>
                      <div className="z-1 grid grid-cols-3 gap-2">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <div
                            key={`time-rem-${index}`}
                            className="flex items-center gap-1 rounded-[4px] bg-full-background px-1.5 py-2"
                          >
                            <span className="block font-inter-tight text-[9px] font-medium text-pretty whitespace-nowrap text-main-text">
                              11:00 AM
                            </span>
                            <X className="h-4 w-4 text-[#1C113B]" />
                          </div>
                        ))}
                      </div>
                      <div className="z-1 flex w-full items-center justify-between">
                        <div className="inline-flex items-center gap-1.5">
                          <div className="flex h-13.5 items-center justify-center rounded-sm bg-full-background p-1.5 px-3.5">
                            <span className="block font-inter-tight text-base font-semibold text-pretty whitespace-nowrap text-main-text">
                              00
                            </span>
                          </div>
                          <span className="block font-inter-tight text-base font-semibold text-pretty whitespace-nowrap text-main-text">
                            :
                          </span>
                          <div className="flex h-13.5 items-center justify-center rounded-sm bg-full-background p-1.5 px-3.5">
                            <span className="block font-inter-tight text-base font-semibold text-pretty whitespace-nowrap text-main-text">
                              00
                            </span>
                          </div>
                          <div className="flex h-13.5 flex-col overflow-hidden rounded-sm bg-full-background">
                            <div className="flex h-1/2 w-full items-center justify-center bg-choristar-primary-light px-3.5">
                              <span className="block font-inter-tight text-[9px] font-semibold text-pretty whitespace-nowrap text-choristar-primary">
                                AM
                              </span>
                            </div>
                            <div className="flex h-1/2 w-full items-center justify-center bg-full-background px-3.5">
                              <span className="block text-center font-inter-tight text-[9px] font-semibold text-pretty text-[#6F6F75]">
                                PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="px-0 font-semibold text-choristar-primary uppercase"
                          variant="ghost"
                          disabled
                        >
                          add
                        </Button>
                      </div>
                      <span className="block text-[10px] font-semibold text-pretty text-main-text">
                        Which days of the week?
                      </span>
                      <div className="z-1 inline-flex items-center justify-center gap-1.5">
                        {days.map(
                          ({ className, text, textClassName }, index) => (
                            <div
                              key={`${text}-${index}`}
                              className={cn(
                                'flex h-7.5 w-6.5 items-center justify-center rounded-3xl bg-full-background p-1.5',
                                className,
                              )}
                            >
                              <span
                                className={cn(
                                  'block text-center font-inter-tight text-[9px] font-semibold text-pretty text-main-text uppercase',
                                  textClassName,
                                )}
                              >
                                {text}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-md border border-[#D7D7DB] bg-white">
                  <div className="relative">
                    <div className="absolute inset-0 w-full px-2.5 py-2 backdrop-blur-[2px]"></div>
                    <div className="flex flex-col gap-4.5 px-2.5 py-2">
                      <span className="block text-[9px] font-semibold text-pretty whitespace-nowrap text-main-text">
                        What song or medley do you want to rehearse?
                      </span>
                      <div className="flex w-full items-center justify-between rounded-sm bg-full-background px-2.5 py-2">
                        <span className="block text-[9px] font-medium text-pretty whitespace-nowrap text-main-text">
                          There&apos;s an overflow - Sinach
                        </span>
                        <X className="z-1 h-4 w-4 text-[#1C113B]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative left-16">
                  <Button
                    type="button"
                    className="w-full max-w-sm rounded-4xl capitalize"
                  >
                    set reminder
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-9.5 md:col-span-1">
          <div className="flex flex-col gap-4">
            <span className="block font-inter-tight text-lg leading-6 font-semibold text-pretty text-[#6F46E5]">
              Rehearsal Reminders
            </span>
            <p className="text-3xl leading-8.5 font-semibold text-pretty text-main-text">
              Never miss practice, set reminders that fit your schedule.
            </p>
            <span className="block font-inter-tight text-lg">
              Consistency is everything in choir practice. Forgetting rehearsals
              kills progress. Choristar becomes your accountability partner.
            </span>
          </div>
          <ButtonWithOutline />
        </div>
      </div>
    </section>
  )
}

const days = [
  {
    text: 'm',
    textClassName: 'text-choristar-primary',
    className: 'bg-choristar-primary-light',
  },
  {
    text: 't',
  },
  {
    text: 'w',
    textClassName: 'text-choristar-primary',
    className: 'bg-choristar-primary-light',
  },
  {
    text: 't',
  },
  {
    text: 'f',
  },
  {
    text: 's',
    textClassName: 'text-choristar-primary',
    className: 'bg-choristar-primary-light',
  },
  {
    text: 's',
  },
]
