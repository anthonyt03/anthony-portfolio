'use client'
import { cn } from '~/lib/utils'
import React from 'react'
import { BentoGrid, BentoGridItem } from '~/components/ui/bento-grid'
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'

const Skeleton = () => (
  <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]'></div>
)
const items = [
  {
    title: 'VEYM Main Page',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'CTTDVA Website',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Personal Portfolio',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
  },
]

export default function ProjectSection() {
  return (
    <div className='w-full px-8 font-sans'>
      <div className='mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10'>
        <h2 className='mb-4 max-w-4xl text-lg text-neutral-100 dark:text-white md:text-4xl'>
          Projects
        </h2>
        <p className='max-w-sm text-sm text-neutral-300 dark:text-neutral-300 md:text-base'>
          Things I work on in my freetime
        </p>
      </div>
      <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  )
}
