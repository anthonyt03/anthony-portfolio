'use client'
import { Boxes } from '~/components/ui/background-boxes'
import { FlipWords } from '~/components/ui/flip-words'
import { cn } from '~/lib/utils'
import ContactButton from './ContactButton'
import { ShootingStars } from '~/components/ui/shooting-stars'
import { StarsBackground } from '~/components/ui/stars-background'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HomePage() {
  const flipWords = [
    'Software Engineer',
    'Full Stack Developer',
    'Gamer',
    'Gym-goer',
    'Programmer',
    'Techie',
  ]
  const { scrollYProgress } = useScroll()
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-1%'])

  return (
    <>
      <div className='relative h-full w-full p-8'>
        {/* Fixed Background */}
        <div className='fixed inset-0 h-full w-full bg-neutral-900'>
          <div className='h-full w-full bg-cover bg-fixed bg-center'>
            <ShootingStars />
            <StarsBackground />
          </div>
        </div>

        {/* Parallax Content */}
        <motion.div
          className='relative z-10 flex flex-col place-items-center'
          style={{ y: contentY }}
        >
          {/* Each "section" is its own div */}
          <div className='-mt-20 flex h-screen flex-col items-start justify-center sm:max-w-[70%] lg:max-w-full 2xl:max-w-full'>
            <h3
              className={cn(
                'relative z-20 mb-4 mt-8 text-sm font-normal text-neutral-300 md:text-xl',
              )}
            >
              Hi, my name is
            </h3>
            <h1
              className={cn(
                'relative z-20 mb-3 text-3xl font-bold text-neutral-100 md:text-6xl',
              )}
            >
              Anthony Tran.
            </h1>
            <div
              className={cn(
                'z-20 flex flex-row text-lg font-normal text-neutral-300 dark:text-neutral-400 md:text-3xl',
              )}
            >
              I&apos;m a
              <div className='font-bold'>
                <FlipWords words={flipWords} /> <br />
              </div>
            </div>
            <p className={cn('z-20 mt-6 w-3/4 text-neutral-300 md:w-1/2')}>
              Based in Northern Virginia, I specialize in building amazing
              frontend applications and everything in between.
            </p>
            <div className='z-20 -ml-4 mt-10'>
              <ContactButton />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
