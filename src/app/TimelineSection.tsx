'use client'
import { Timeline } from '~/components/ui/timeline'
import React from 'react'
import { AnimatedTooltip } from '~/components/ui/animated-tooltip'
import { constructSkillItems } from '~/constants/constants'

export default function TimelineSection() {
  const skills1 = constructSkillItems([
    'Svelte',
    'JavaScript',
    'Shadcn',
    'Skeleton',
    'Docker',
  ])
  const skills2 = constructSkillItems([
    'React',
    'JavaScript',
    'MaterialUI',
    'CesiumJS',
    'SpringBoot',
  ])
  const skills3 = constructSkillItems([
    'React',
    'JavaScript',
    'MaterialUI',
    'SpringBoot',
  ])
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
            <AnimatedTooltip items={skills1} />
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
            <AnimatedTooltip items={skills2} />
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
            <AnimatedTooltip items={skills3} />
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className='h-full' id='experience'>
      <Timeline data={data} />
    </div>
  )
}
