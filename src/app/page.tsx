'use client'
import { FlipWords } from '~/components/ui/flip-words'
import { cn } from '~/lib/utils'
import ContactButton from './ContactButton'
import { ShootingStars } from '~/components/ui/shooting-stars'
import { StarsBackground } from '~/components/ui/stars-background'
import { Timeline } from '~/components/ui/timeline'
import React from 'react'
import { AnimatedTooltip } from '~/components/ui/animated-tooltip'

export default function HomePage() {
  const flipWords = [
    'Software Engineer',
    'Full Stack Developer',
    'Gamer',
    'Gym-goer',
    'Programmer',
    'Techie',
  ]

  const people = [
    {
      id: 1,
      name: 'Svelte',
      image: '/svelte.webp',
    },
    {
      id: 3,
      name: 'JavaScript',
      image: '/js.png',
    },
    {
      id: 4,
      name: 'shadcn/ui',
      image: '/shadcn.png',
    },
    {
      id: 5,
      name: 'Skeleton',
      image: '/skeleton.png',
    },
    {
      id: 2,
      name: 'Docker',
      image: '/docker.png',
    },
  ]
  const people2 = [
    {
      id: 1,
      name: 'React',
      image: '/react.png',
    },
    {
      id: 2,
      name: 'JavaScript',
      image: '/js.png',
    },
    {
      id: 3,
      name: 'Material UI',
      image: '/mui.png',
    },
    {
      id: 4,
      name: 'CesiumJS',
      image: '/cesium.png',
    },
    {
      id: 5,
      name: 'SpringBoot',
      image: '/springboot.png',
    },
  ]
  const people3 = [
    {
      id: 1,
      name: 'React',
      image: '/react.png',
    },
    {
      id: 2,
      name: 'JavaScript',
      image: '/js.png',
    },
    {
      id: 3,
      name: 'Material UI',
      image: '/mui.png',
    },
    {
      id: 5,
      name: 'SpringBoot',
      image: '/springboot.png',
    },
  ]
  const data = [
    {
      title: 'Software Engineer',
      company: 'Peraton',
      time: 'June 2024 - Present',
      content: (
        <div className='flex h-full flex-col'>
          <p>
            • Developing frontend UI for a graph-based encrypted signal
            communication application.
          </p>
          <p>
            • Integrating sub applications using Docker, enabling
            cross-container communication and application workflows.
          </p>
          <p>
            • Frontend development efforts played a role in securing a $2.2
            million contract increase in funding
          </p>
          <div className='justify-left flex h-full w-full flex-row pt-4'>
            <AnimatedTooltip items={people} />
          </div>
        </div>
      ),
    },
    {
      title: 'SWE Intern',
      company: 'Peraton',
      time: 'June 2023 - August 2023',
      content: (
        <div className='flex flex-col'>
          <p>
            • Collaborated on the development of a new Cesium-based application
          </p>
          <p>
            • Developed Spring Boot backend to facilitate inter-application
            communication
          </p>
          <p>
            • Created an image display grid and manipulation component to
            enhance user accessibility
          </p>
          <div className='justify-left flex h-full w-full flex-row pt-4'>
            <AnimatedTooltip items={people2} />
          </div>
        </div>
      ),
    },
    {
      title: 'SWE Intern',
      company: 'Peraton',
      time: 'January 2023 - June 2023',
      content: (
        <div className='flex flex-col'>
          <p>
            • Collaborated on a real-time vehicle and object simulation
            application.
          </p>
          <p>
            • Maintained codebase to ensure stability adhering to best DevOps
            practices
          </p>
          <p>
            • Adapted application to meet project requirements from client
            through new features
          </p>
          <div className='justify-left flex h-full w-full flex-row pt-4'>
            <AnimatedTooltip items={people3} />
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      <div className='mx-auto'>
        {/* Fixed Background */}
        <div className='fixed inset-0 z-[-1] bg-neutral-900'>
          <ShootingStars />
          <StarsBackground />
        </div>
        {/* Introduction */}
        <div
          className='relative z-20 flex h-screen w-full flex-col items-center justify-center px-4'
          id='intro'
        >
          <div className='flex flex-col items-start gap-4'>
            <h3
              className={cn('text-md font-normal text-neutral-300 lg:text-xl')}
            >
              Hi, my name is
            </h3>
            <h1
              className={cn('text-4xl font-bold text-neutral-100 lg:text-6xl')}
            >
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
              Based in Northern Virginia, I specialize in building amazing
              frontend applications and everything in between.
            </p>
            <div className='-ml-4'>
              <ContactButton />
            </div>
          </div>
        </div>
        {/* Professional Experience */}
        <div className='h-full' id='experience'>
          <Timeline data={data} />
        </div>
        <div className='h-screen w-full'></div>
      </div>
    </>
  )
}
