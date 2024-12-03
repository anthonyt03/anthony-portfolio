import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollIndicator = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true) // If the user has scrolled, hide the chevron
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='fixed bottom-5 left-1/2 -translate-x-1/2 transform'>
      {!hasScrolled && (
        <motion.div
          className='text-neutral-100' // Tailwind class for white color
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }} // Bounce effect for the chevron
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className='h-24 w-24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 16l-4-4h8l-4 4z' fill='currentColor' />
          </svg>
        </motion.div>
      )}
      {hasScrolled && (
        <motion.div
          className='text-neutral-100'
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }} // Shrink and fade out when scrolled
          transition={{ duration: 0.5 }}
        >
          <svg
            className='h-24 w-24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 16l-4-4h8l-4 4z' fill='currentColor' />
          </svg>
        </motion.div>
      )}
    </div>
  )
}

export default ScrollIndicator
