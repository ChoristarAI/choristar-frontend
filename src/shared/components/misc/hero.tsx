import { motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Input } from '../ui'
import { ButtonWithArrow } from './waitlist-form'

import { CommonIcons } from '@/assets'
import {
  MusicFilterIcon,
  SMSEmailIcon,
  VoiceCircleIcon,
  VolumeHighIcon,
} from '@/assets/svg'

export const Hero = () => {
  const [email, setEmailValue] = useState('')
  const [displayEmail, setDisplayEmail] = useState('')

  const handleClear = useCallback(() => {
    setEmailValue(displayEmail)
    setDisplayEmail('')
  }, [displayEmail])

  return (
    <section className="section-container z-10 h-[calc(100lvh-80px)] bg-[linear-gradient(180deg,#F9F8FB_70.67%,#FFFFFF_100%)] px-4 md:px-10 lg:px-14 xl:px-24">
      <div className="relative mt-5 flex h-full w-full flex-col md:mt-3 md:flex-row lg:mt-0">
        <div className="lg:w-2/5">
          <div className="flex h-full w-full flex-col items-start justify-center gap-3">
            <HeadingEffect />
            <p className="text-left text-pretty">
              Choristar helps you create medleys and set-lists, score songs, and
              stay rehearsal-ready — powered by AI.
            </p>
            <div className="mt-1 grid w-full grid-cols-3 gap-2">
              <div className="col-span-3 w-full md:col-span-2">
                <Input
                  name="email"
                  type="email"
                  startAdornment={<SMSEmailIcon />}
                  containerClassName="h-12"
                  className="pl-1"
                  placeholder="Email"
                  value={displayEmail}
                  onChange={(e) => setDisplayEmail(e.target.value)}
                />
              </div>
              <div className="col-span-3 h-12 w-full md:col-span-1">
                <ButtonWithArrow email={email} clear={handleClear} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex h-full w-full items-center lg:w-3/5">
          <CircularIcons />
          <div className="flex items-center">
            <motion.div
              initial={{ y: 0, rotate: -2 }}
              className="absolute block align-middle"
              animate={{
                y: [0, -15, 0],
                rotate: [-2, 1, -2],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut',
              }}
            >
              <img src="/phone-left.png" alt="Choristar AI Mobile App" />
            </motion.div>
            <motion.div
              initial={{ y: 0, rotate: 2 }}
              className="absolute block align-middle"
              animate={{
                y: [0, -25, 0],
                rotate: [2, -1, 2],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'easeInOut',
              }}
            >
              <img src="/phone-right.png" alt="Choristar AI Mobile App" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const icons = [
  {
    id: 'mic',
    wrapper:
      'absolute top-[47px] left-[90px] flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg md:left-[120px] xl:top-[80px]',
    inner:
      'flex h-14.5 w-14.5 items-center justify-center rounded-full bg-choristar-secondary-light',
    component: <CommonIcons.microphone />,
    animate: { scale: [0.5, 1.2, 1, 1.3, 1] },
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut' as const,
    },
  },
  {
    id: 'music',
    wrapper:
      'absolute top-[233px] left-[10px] sm:top-[150px] sm:left-[40px] md:top-[233px] md:left-[10px]  flex h-13 w-13 items-center justify-center rounded-full bg-white shadow-lg lg:top-[350px] lg:left-[50px]',
    inner:
      'flex h-11.5 w-11.5 items-center justify-center rounded-full bg-choristar-primary-light',
    component: <MusicFilterIcon />,
    animate: { y: [0, -8, 0, 8, 0] },
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' as const },
  },
  {
    id: 'volume',
    wrapper:
      'absolute bottom-[35px] left-[120px] flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg xl:bottom-[95px]',
    inner:
      'flex h-8.5 w-8.5 items-center justify-center rounded-full bg-choristar-primary-light',
    component: <VolumeHighIcon />,
    animate: { scale: [1, 1.3, 1] },
    transition: {
      repeat: Infinity,
      duration: 1.2,
      ease: 'easeInOut' as const,
    },
  },
  {
    id: 'voice',
    wrapper:
      'absolute right-[20px] bottom-[120px] flex h-10.5 w-10.5 items-center justify-center rounded-full bg-white shadow-lg xl:right-[80px] xl:bottom-[150px]',
    inner:
      'flex h-9 w-9 items-center justify-center rounded-full bg-choristar-primary-light',
    component: <VoiceCircleIcon />,
    animate: { scale: [1, 1.4, 1], opacity: [1, 0.7, 1] },
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'easeInOut' as const,
    },
  },
  {
    id: 'notification',
    wrapper:
      'absolute top-[12px] right-[80px] flex h-13.5 w-13.5 items-center justify-center rounded-full bg-white shadow-lg md:right-[120px] lg:right-[190px] xl:top-[25px]',
    inner:
      'flex h-12 w-12 items-center justify-center rounded-full bg-choristar-primary-light',
    component: <CommonIcons.notification />,
    animate: { rotate: [-10, 10, -10, 0] },
    transition: {
      repeat: Infinity,
      duration: 1.2,
      ease: 'easeInOut' as const,
    },
  },
]

const words = ['Create.', 'Lead.', 'Harmonize.']

const CircularIcons = () => (
  <>
    {icons.map((icon) => (
      <motion.div
        key={icon.id}
        className={icon.wrapper}
        animate={icon.animate}
        transition={icon.transition}
        style={{
          originX: 0.5,
          originY: 0.5,
        }}
      >
        <div className={icon.inner}>{icon.component}</div>
      </motion.div>
    ))}
  </>
)

const HeadingEffect = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const type = useCallback(() => {
    const currentWord = words[currentWordIndex]

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        timeoutRef.current = setTimeout(type, 500)
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 10)
      }
    } else {
      if (displayedText.length > 0) {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1))
        timeoutRef.current = setTimeout(type, 100)
      } else {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        timeoutRef.current = setTimeout(type, 500)
      }
    }
  }, [currentWordIndex, displayedText, isDeleting])

  useEffect(() => {
    timeoutRef.current = setTimeout(type, 550)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [type])

  return (
    <h1 className="leading-[1.3] text-pretty lg:text-6xl">
      <span className="block text-choristar-secondary">
        {currentWordIndex === 0 ? displayedText : 'Create.'}
      </span>
      <span className="block text-main-text italic">
        {currentWordIndex === 1 ? displayedText : 'Lead.'}
      </span>
      <span className="block text-choristar-primary-dark">
        {currentWordIndex === 2 ? displayedText : 'Harmonize.'}
      </span>
    </h1>
  )
}
