'use client'
import React from 'react'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { InputTextarea } from '~/components/ui/input-textarea'
import { cn } from '~/lib/utils'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '~/components/ui/form'
import { useToast } from '~/hooks/use-toast'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  message: z.string().min(2).max(200),
})

export default function ContactForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement authentication (NextAuth) and link to my email
    console.log(values)
    toast({
      variant: 'success',
      description: 'Your message has been sent.',
    })
  }
  return (
    <div className='mx-auto w-full max-w-md bg-white dark:bg-black'>
      <h2 className='text-xl font-bold text-neutral-800 dark:text-neutral-200'>
        Let&apos;s Connect
      </h2>
      <p className='mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300'>
        Whether you&apos;re interested in working together or simply want to
        connect, I&apos;m here to chat.
      </p>

      <Form {...form}>
        <form className='my-8' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <LabelInputContainer>
                  <Label htmlFor='firstName'>First Name</Label>
                  <FormItem>
                    <FormControl>
                      <Input
                        id='firstName'
                        placeholder='John'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                </LabelInputContainer>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <LabelInputContainer>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <FormItem>
                    <FormControl>
                      <Input
                        id='lastName'
                        placeholder='Doe'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                </LabelInputContainer>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <LabelInputContainer className='mb-4'>
                <Label htmlFor='email'>Email Address</Label>
                <FormItem>
                  <FormControl>
                    <Input
                      id='email'
                      placeholder='john.doe@email.com'
                      type='email'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              </LabelInputContainer>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <LabelInputContainer className='mb-8'>
                <Label htmlFor='message'>Message</Label>
                <FormItem>
                  <FormControl>
                    <InputTextarea
                      id='message'
                      placeholder=''
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              </LabelInputContainer>
            )}
          />
          <Button
            className='group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
            type='submit'
          >
            Send &rarr;
            <BottomGradient />
          </Button>

          <div className='my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700' />
          <div className='flex flex-col space-y-4'>
            <a
              href='https://github.com/anthonyt03'
              target='_blank'
              rel='noopener noreferrer'
              className='group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            >
              <svg
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
              >
                <title>GitHub</title>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
              </svg>
              <span className='text-sm text-neutral-700 dark:text-neutral-300'>
                GitHub
              </span>
              <BottomGradient />
            </a>
            <a
              href='https://www.linkedin.com/in/anthony03/'
              target='_blank'
              rel='noopener noreferrer'
              className='group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            >
              <svg
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
              >
                <title>LinkedIn</title>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
              <span className='text-sm text-neutral-700 dark:text-neutral-300'>
                LinkedIn
              </span>
              <BottomGradient />
            </a>
          </div>
        </form>
      </Form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className='absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100' />
      <span className='absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100' />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  )
}
