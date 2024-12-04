import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center bg-neutral-800 pt-4 text-neutral-100'>
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} Anthony Tran. All rights reserved.
      </p>
      <div className='flex flex-row justify-center'>
        {/* LinkedIn Icon */}
        <a
          href='https://www.linkedin.com/in/anthony03/'
          target='_blank'
          rel='noopener noreferrer'
          className='relative z-10 m-2 inline-block p-2'
        >
          <FaLinkedin size={16} />
        </a>

        {/* GitHub Icon */}
        <a
          href='https://github.com/anthonyt03'
          target='_blank'
          rel='noopener noreferrer'
          className='relative z-10 m-2 inline-block p-2'
        >
          <FaGithub size={16} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
