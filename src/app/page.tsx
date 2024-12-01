'use client'
import { Boxes } from '~/components/ui/background-boxes'
import { FlipWords } from '~/components/ui/flip-words'
import { cn } from '~/lib/utils'
import ContactButton from './ContactButton'

export default function HomePage() {
  const flipWords = [
    'Software Engineer',
    'Full Stack Developer',
    'Digital Craftsman',
    'Gamer',
    'Gym-goer',
    'Programmer',
    'Techie',
  ]
  return (
    <>
      <div className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900'>
        <div className='pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]' />
        <Boxes />
        <div className='flex flex-col content-start p-16'>
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
          <div className='-ml-4 mt-10'>
            <ContactButton />
          </div>
        </div>
      </div>
    </>
  )
}
