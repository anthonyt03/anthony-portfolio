'use client'
import { ShootingStars } from '~/components/ui/shooting-stars'
import { StarsBackground } from '~/components/ui/stars-background'
import { FloatingNav } from '~/components/ui/floating-navbar'
import React from 'react'
import IntroSection from './IntroSection'
import TimelineSection from './TimelineSection'
import ScrollIndicator from '~/components/ScrollIndicator'
import { navItems } from '~/constants/constants'
import { FormspreeProvider } from '@formspree/react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import ProjectSection from './ProjectSection'

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

export default function HomePage() {
  return (
    <FormspreeProvider project='2622133391079768007'>
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
        <div className='mx-auto'>
          {/* Fixed Background */}
          <div className='fixed inset-0 z-[-1] bg-neutral-900'>
            <ShootingStars />
            <StarsBackground />
          </div>
          <FloatingNav navItems={navItems} />
          <ScrollIndicator />
          {/* Introduction */}
          <IntroSection />
          {/* Professional Experience */}
          <TimelineSection />
          <ProjectSection />
        </div>
      </GoogleReCaptchaProvider>
    </FormspreeProvider>
  )
}
