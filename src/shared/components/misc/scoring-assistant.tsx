import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { ButtonWithOutline } from './waitlist-form'

import { MessageQuestionIcon, PauseIcon, PlayIcon } from '@/assets/svg'
import { cn } from '@/lib/utils'

export const ScoringAssistant = () => (
  <section className="section-container w-full px-4 md:px-8 lg:px-10 xl:px-16">
    <div className="grid h-full w-full grid-cols-2 items-center py-14 md:py-24 md:gap-4 gap-16">
      <div className="col-span-2 flex flex-col gap-9.5 md:col-span-1 md:order-1 order-2">
        <div className="flex flex-col gap-4">
          <span className="block font-inter-tight text-lg leading-6 font-semibold text-pretty text-[#6F46E5]">
            AI Scoring Assistant
          </span>
          <p className="text-3xl leading-8.5 font-semibold text-pretty text-main-text">
            Sing, and receive AI-powered scoring & tips Real-time analysis of
            pitch, timing, and tone.
          </p>
          <span className="block font-inter-tight text-lg">
            Vocalists want honest, reliable feedback, not guesswork. This
            feature positions ChoristarAI as their digital vocal coach.
          </span>
        </div>
        <ButtonWithOutline className="w-max rounded-3xl px-5 py-3.5 font-medium" />
      </div>
      <div className="col-span-2 w-full place-content-center place-items-center items-center-safe md:col-span-1 order-1 md:order-2">
        <div className="relative flex min-h-96 w-full items-center justify-center">
          <div className="absolute z-40 -top-3 md:left-0 -left-10">
            <SoundWaveLoader data={soundWaveData} />
          </div>
          <div className="absolute z-10 flex min-h-80 w-full max-w-90 flex-col gap-5 rounded-2xl bg-[#F5F5F7] px-6 py-9 shadow-2xl">
            <div className="mt-9.5 md:pl-6.5 grid grid-cols-2 gap-3.5">
              {options.map(({ title, icon }) => (
                <div key={title} className="inline-flex gap-1.5 items-center">
                  {icon}
                  <span className="block font-semibold text-sub-text font-inter-tight text-[12.69px] text-pretty">
                    {title}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sub-text font-medium text-[12px]">
              Okay, playing you the instrumentals now.
            </p>
            <div className="md:pl-6.5 overflow-hidden">
              <div className="inline-flex gap-1.5 items-center">
                <PauseIcon />
                <span className="block font-semibold text-sub-text font-inter-tight text-[12.69px] text-pretty">
                  Overflow Instrumental
                </span>
              </div>
              <SongSections />
            </div>
            <SoundWaveLoader
              data={secondWaveData}
              className="min-h-11"
              ease="linear"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const options = [
  {
    title: 'Play Only Vocals',
    icon: <PlayIcon />,
  },
  {
    title: 'Guide me',
    icon: <MessageQuestionIcon />,
  },
  {
    title: 'Play Instrumental',
    icon: <PlayIcon />,
  },
]

const songSections = [
  'intro',
  'verse',
  'pre-chorus',
  'chorus',
  'post-chorus',
  'vamp 1',
  'vamp 2',
  'bridge',
  'solo',
  'outro',
]

const SongSections = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % songSections.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const duplicatedSections = [...songSections, ...songSections]

  return (
    <motion.div
      animate={{
        x: `-${currentIndex * 65}px`,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.5,
        ease: 'linear',
      }}
      className="flex gap-2 items-center mt-2.5"
    >
      {duplicatedSections.map((sect, idx) => {
        const realIndex = idx % songSections.length
        const isActive = realIndex === currentIndex

        return (
          <motion.div
            key={`${sect}-${idx}`}
            initial={{
              y: 10,
              opacity: 1,
            }}
            animate={{
              y: 0,
              opacity: 0.85,
            }}
            className={cn(
              'px-3 py-2 bg-white rounded-3xl flex items-center justify-center',
              isActive &&
                'border-choristar-primary border bg-choristar-primary-light',
            )}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span
              className={cn(
                'font-normal text-sub-text text-pretty whitespace-nowrap capitalize text-[12.69px]',
                isActive && 'font-semibold',
              )}
            >
              {sect}
            </span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

const soundWaveData = [
  20, 44, 32, 32, 20, 44, 20, 32, 32, 44, 44, 32, 32, 20, 32, 32, 20, 20, 44,
  32, 44, 44, 32, 32, 20, 32, 32, 20, 20, 44, 20, 44, 32, 32, 20, 44, 20, 32,
  32, 44, 44, 20, 32, 32, 20, 20, 44, 20, 44, 32, 20, 32, 32, 20, 20, 44, 32,
  44, 44, 20, 32, 32, 44, 44, 32, 32, 20, 44, 20, 32, 32, 20, 20, 44,
]

const secondWaveData = soundWaveData.map((height) => Math.round(height * 0.65))

interface SoundWaveLoaderProps {
  className?: string
  data: Array<number>
  ease?: 'backInOut' | 'linear' | 'easeInOut'
}

const SoundWaveLoader: React.FC<SoundWaveLoaderProps> = ({
  className,
  data,
  ease = 'backInOut',
}) => (
  <div
    className={cn('flex flex-row items-center gap-x-0.5 min-h-20', className)}
  >
    {data.map((height, idx) => (
      <motion.div
        key={idx}
        initial={{
          height: height * 0.5,
          backgroundColor: 'var(--color-choristar-primary-light)',
        }}
        animate={{
          height: [height * 0.25, height, height * 0.65],
          backgroundColor: [
            'var(--color-choristar-primary-light)',
            'var(--color-choristar-primary)',
            'var(--color-choristar-primary-light)',
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease,
          delay: idx * 0.1,
        }}
        className="w-1 rounded-full"
      />
    ))}
  </div>
)
