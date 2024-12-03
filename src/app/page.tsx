'use client'
import { ShootingStars } from '~/components/ui/shooting-stars'
import { StarsBackground } from '~/components/ui/stars-background'
import React from 'react'
import IntroSection from './IntroSection'
import TimelineSection from './TimelineSection'
import ScrollIndicator from '~/components/ScrollIndicator'

export default function HomePage() {
  return (
    <>
      <div className='mx-auto'>
        {/* Fixed Background */}
        <div className='fixed inset-0 z-[-1] bg-neutral-900'>
          <ShootingStars />
          <StarsBackground />
        </div>
        <ScrollIndicator />
        {/* Introduction */}
        <IntroSection />
        {/* Professional Experience */}
        <TimelineSection />
        <div className='h-screen w-full'></div>
      </div>
    </>
  )
}
