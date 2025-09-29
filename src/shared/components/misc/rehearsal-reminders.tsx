import { X } from 'lucide-react'
import { motion } from 'motion/react'

import { Button } from '../ui'
import { ButtonWithOutline } from './waitlist-form'

import { CommonIcons } from '@/assets'
import { cn } from '@/lib/utils'

export const RehearsalReminders = () => {
  return (
    <section className="section-container w-full px-4 md:px-8 lg:px-10 xl:px-16">
      <div className="grid h-full w-full grid-cols-2 items-center py-14 md:py-24 gap-16 md:gap-4">
        <div className="col-span-2 w-full place-content-center place-items-center items-center-safe md:col-span-1">
          <div className="relative flex min-h-96 w-full items-center justify-center">
            <div className="absolute -bottom-5 h-[163px] w-full md:max-w-[310px] rounded-br-2xl rounded-bl-2xl bg-[#F5F5F7] shadow-2xl max-w-78"></div>
            <div className="absolute z-10 flex min-h-80 w-full md:max-w-[276px] flex-col gap-3 rounded-2xl bg-[#F5F5F7] px-4 py-4.5 shadow-2xl max-w-68">
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
                  className="absolute z-10 bg-choristar-primary w-13 h-13 rounded-full flex justify-center items-center shadow-[0px_4.38px_54.81px_0px_#7B4FFF]"
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
                  className="flex ml-4 mt-2 items-center border border-[#D7D7DB] bg-white px-4 py-2.5 rounded text-[#8E8E94] text-[9px] pl-10 shadow-3xl font-inter-tight"
                >
                  Set Reminder
                </motion.div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="overflow-hidden rounded-md bg-white border border-[#D7D7DB] ">
                  <div className="relative">
                    <div className="backdrop-blur-[2px] w-full absolute inset-0"></div>
                    <div className="flex flex-col gap-3 px-2.5 py-2">
                      <span className="block text-pretty font-semibold text-[10px] text-main-text">
                        When do you want to rehearse?
                      </span>
                      <div className="grid grid-cols-3 gap-2 z-1">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <div
                            key={`time-rem-${index}`}
                            className="rounded-[4px] py-2 px-1.5 flex gap-1 bg-full-background items-center"
                          >
                            <span className="block text-pretty font-inter-tight font-medium text-main-text text-[9px] whitespace-nowrap">
                              11:00 AM
                            </span>
                            <X className="text-[#1C113B] w-4 h-4" />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center z-1 w-full">
                        <div className="inline-flex gap-1.5 items-center">
                          <div className="p-1.5 rounded-sm bg-full-background px-3.5 h-13.5 flex items-center justify-center ">
                            <span className="block text-pretty font-inter-tight font-semibold text-main-text text-base whitespace-nowrap">
                              00
                            </span>
                          </div>
                          <span className="block text-pretty font-inter-tight font-semibold text-main-text text-base whitespace-nowrap">
                            :
                          </span>
                          <div className="p-1.5 rounded-sm bg-full-background px-3.5 h-13.5 flex items-center justify-center ">
                            <span className="block text-pretty font-inter-tight font-semibold text-main-text text-base whitespace-nowrap">
                              00
                            </span>
                          </div>
                          <div className="rounded-sm bg-full-background  h-13.5 flex flex-col overflow-hidden">
                            <div className="bg-choristar-primary-light justify-center flex items-center h-1/2 w-full px-3.5">
                              <span className="block text-pretty font-inter-tight font-semibold text-choristar-primary whitespace-nowrap text-[9px]">
                                AM
                              </span>
                            </div>
                            <div className="bg-full-background flex w-full justify-center items-center px-3.5 h-1/2">
                              <span className="block text-pretty font-inter-tight font-semibold text-[#6F6F75] text-[9px] text-center">
                                PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="text-choristar-primary uppercase font-semibold px-0"
                          variant="ghost"
                          disabled
                        >
                          add
                        </Button>
                      </div>
                      <span className="block text-pretty font-semibold text-[10px] text-main-text">
                        Which days of the week?
                      </span>
                      <div className="inline-flex justify-center items-center gap-1.5 z-1">
                        {days.map(
                          ({ className, text, textClassName }, index) => (
                            <div
                              key={`${text}-${index}`}
                              className={cn(
                                'h-7.5 w-6.5 p-1.5 flex justify-center items-center rounded-3xl bg-full-background',
                                className,
                              )}
                            >
                              <span
                                className={cn(
                                  'block text-pretty font-inter-tight font-semibold text-main-text text-[9px] text-center uppercase',
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
                <div className="overflow-hidden rounded-md bg-white border border-[#D7D7DB]">
                  <div className="relative">
                    <div className="backdrop-blur-[2px] w-full absolute inset-0 px-2.5 py-2"></div>
                    <div className="flex flex-col gap-4.5 px-2.5 py-2">
                      <span className="block text-pretty font-semibold text-[9px] text-main-text whitespace-nowrap">
                        What song or medley do you want to rehearse?
                      </span>
                      <div className="bg-full-background rounded-sm w-full items-center flex justify-between px-2.5 py-2">
                        <span className="block text-pretty font-medium text-[9px] text-main-text whitespace-nowrap">
                          There&apos;s an overflow - Sinach
                        </span>
                        <X className="text-[#1C113B] w-4 h-4 z-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative left-16">
                  <Button
                    type="button"
                    className="capitalize rounded-4xl max-w-sm w-full"
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
