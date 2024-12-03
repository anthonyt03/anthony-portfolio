'use client'
import { FlipWords } from '~/components/ui/flip-words'
import { cn } from '~/lib/utils'
import ContactButton from '../components/ContactButton'
import React from 'react'

export default function IntroSection() {
  const flipWords = [
    'Software Engineer',
    'Full Stack Developer',
    'Gamer',
    'Gym-goer',
    'Programmer',
    'Techie',
  ]
  return (
    <div
      className='relative z-20 flex h-screen w-full flex-col items-center justify-center px-4'
      id='intro'
    >
      <div className='flex flex-col items-start gap-4'>
        <h3 className={cn('text-md font-normal text-neutral-300 lg:text-xl')}>
          Hi, my name is
        </h3>
        <h1 className={cn('text-4xl font-bold text-neutral-100 lg:text-6xl')}>
          Anthony Tran.
        </h1>
        <div
          className={cn(
            'flex flex-row font-normal text-neutral-300 dark:text-neutral-400 lg:text-3xl',
          )}
        >
          I&apos;m a
          <div className='font-bold'>
            <FlipWords words={flipWords} /> <br />
          </div>
        </div>
        <p className={cn('text-md w-3/4 text-neutral-300 sm:w-1/2')}>
          Based in Northern Virginia, I specialize in building amazing frontend
          applications and everything in between.
        </p>
        <div className='-ml-4'>
          <ContactButton />
        </div>
      </div>
    </div>
  )
}
