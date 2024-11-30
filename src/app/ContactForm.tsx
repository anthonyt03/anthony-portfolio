'use client'
import React from 'react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { InputTextarea } from '../components/ui/input-textarea'
import { cn } from '~/lib/utils'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form'
import { Textarea } from '../components/ui/textarea'

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  message: z.string().min(2).max(200),
})

export default function ContactForm() {
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
                      type='text'
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
