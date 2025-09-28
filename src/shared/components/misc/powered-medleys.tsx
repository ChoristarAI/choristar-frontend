import { Loader } from 'lucide-react'
import { motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'

import { Button, Input } from '../ui'

import { MusicPrimaryIcon, MusicWhiteIcon } from '@/assets/svg'
import { cn } from '@/lib/utils'

export const PoweredMedleys = () => (
  <section className="section-container w-full px-4 md:px-8 lg:px-10 xl:px-16">
    <div className="grid h-full w-full grid-cols-2 items-center py-14 md:py-24 gap-16 md:gap-4">
      <div className="col-span-2 w-full place-content-center place-items-center items-center-safe md:col-span-1">
        <div className="relative flex min-h-96 w-full items-center justify-center">
          <div className="absolute bottom-0 h-52 w-full md:max-w-[400px] rounded-br-2xl rounded-bl-2xl bg-[#F5F5F7] shadow-2xl max-w-90">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0.6, y: 5 }}
                animate={{
                  scale: [1, 1.1, 1, 0.9, 1],
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                style={{
                  originX: 0.5,
                  originY: 0.5,
                }}
                className="absolute z-50 bg-choristar-primary w-13 h-13 rounded-full flex justify-center items-center -left-6 shadow-[0px_4.38px_54.81px_0px_#7B4FFF] -rotate-30"
              >
                <MusicWhiteIcon />
              </motion.div>
            </div>
          </div>
          <div className="absolute z-10 flex min-h-80 w-full md:max-w-90 flex-col gap-3 rounded-2xl bg-[#F5F5F7] px-6 py-9 shadow-2xl max-w-80">
            <div className="flex flex-col items-center justify-center gap-1">
              <MusicPrimaryIcon />
              <span className="block text-center font-inter-tight text-xl font-semibold text-pretty capitalize">
                create new medley
              </span>
            </div>
            <AnimatedTransitionTab />
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-9.5 md:col-span-1">
        <div className="flex flex-col gap-4">
          <span className="block font-inter-tight text-lg leading-6 font-semibold text-pretty text-[#6F46E5]">
            AI Powered Medleys
          </span>
          <p className="text-3xl leading-8.5 font-semibold text-pretty text-main-text">
            Input a theme, rhythm, and style, and let AI craft your perfect
            medley
          </p>
          <span className="block font-inter-tight text-lg">
            Lead vocalists and directors spend hours brainstorming themed
            medleys for ministrations. This feature saves time and sparks
            creativity.
          </span>
        </div>
        <Button
          className="w-max rounded-3xl px-5 py-3.5 font-medium"
          variant="outline"
        >
          Join the waitlist
        </Button>
      </div>
    </div>
  </section>
)

type TabState = 'praise' | 'special'

type TabOptions = {
  key: TabState
  title: string
}
const tabOptions: Array<TabOptions> = [
  {
    key: 'praise',
    title: 'praise medley',
  },
  {
    key: 'special',
    title: 'special themed medley',
  },
]

const demoTexts = [
  'Harmonize your world ✨',
  'Lead with purpose',
  'Create impact together',
  'Inspire through action',
  'Collaborate with ease',
  'Grow beyond limits',
  'Design your future',
  'Empower your team',
  'Simplify the complex ⚡',
  'Achieve balance with notes & chords',
]

const AnimatedTransitionTab = () => {
  const [tab, setTab] = useState<TabState>('praise')
  const [typedText, setTypedText] = useState('')
  const [cycle, setCycle] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const simulateSubmit = useCallback(() => {
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
    }, 1700)
  }, [])

  useEffect(() => {
    let currentTabIndex = 0
    const text = demoTexts[Math.floor(Math.random() * demoTexts.length)]

    setTypedText('')
    setIsTyping(true)

    const typing = setInterval(() => {
      if (currentTabIndex < text.length) {
        setTypedText(text.slice(0, currentTabIndex + 1))
        currentTabIndex++
      } else {
        clearInterval(typing)

        setTimeout(() => {
          simulateSubmit()
          setIsTyping(false)
          setTimeout(() => {
            setTab((previous) => (previous === 'praise' ? 'special' : 'praise'))
            setCycle((c) => c + 1)
          }, 1800)
        }, 800)
      }
    }, 100)

    return () => clearInterval(typing)
  }, [cycle, tab])

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="grid grid-cols-2 transition-all">
        {tabOptions.map(({ key, title }, idx) => {
          const isActive = key === tab
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 5 }}
              animate={{
                backgroundColor: isActive
                  ? 'var(--color-choristar-primary-light)'
                  : '#F5F5F7',
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
              className={cn(
                'col-span-1 flex items-center justify-center border py-2.5',
                isActive && 'border-[#C2ABFF]',
                idx === 0 && 'rounded-tl-sm rounded-bl-sm',
                idx === 1 && 'rounded-tr-sm rounded-br-sm',
              )}
            >
              <span
                className={cn(
                  'block font-inter-tight text-[12.03px] font-light text-pretty capitalize',
                  key === tab && 'font-semibold',
                )}
              >
                {title}
              </span>
            </motion.div>
          )
        })}
      </div>
      <div>
        <p className="text-center text-[12px] leading-7.5 text-pretty text-main-text">
          What would you like to title your new medley?
        </p>
        <Input
          placeholder="Medley title"
          value={typedText}
          readOnly
          endAdornment={
            isTyping ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-1/2 right-3 -translate-y-1/2 transform"
              >
                <div className="flex space-x-1">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="h-1 w-1 rounded-full bg-choristar-primary-dark"
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                    className="h-1 w-1 rounded-full bg-choristar-primary-light"
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                    className="h-1 w-1 rounded-full bg-choristar-primary"
                  />
                </div>
              </motion.div>
            ) : undefined
          }
        />
        <Button
          type="button"
          disabled={isSubmitting}
          onClick={simulateSubmit}
          className="mt-3 flex w-full items-center gap-2 rounded-3xl h-12"
        >
          {isSubmitting ? (
            <>
              <Loader className="h-4 w-4 animate-spin text-white" />
              {'  '} Creating...
            </>
          ) : (
            'Start Creating'
          )}
        </Button>
      </div>
    </div>
  )
}
