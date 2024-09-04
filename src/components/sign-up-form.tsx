'use client'

import clsx from 'clsx'
import * as Form from '@radix-ui/react-form'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  signUp(data: FormData): Promise<void>
}

const signUpSchema = z.object({
  firstName: z.string().min(1).regex(/\S+/),
  lastName: z.string().min(1).regex(/\S+/),
	email: z.string().email()
})

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUpForm({ signUp }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur'
  })

  async function onSubmit(data: SignUpSchema) {
    const formData = new FormData()

    formData.append('firstName', data.firstName)
    formData.append('lastName', data.lastName)
    formData.append('email', data.email)

		await signUp(formData)
  }

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} className='gap-3 grid'>
			<div className='gap-3 grid grid-cols-2'>
				<Form.Field name='firstName' className='gap-2 grid content-start'>
					<Form.Label className='justify-self-start text-xs peer-focus:font-bold'>
						First Name
					</Form.Label>

					<Form.Control
						minLength={1}
						maxLength={150}
						placeholder='John'
						required
						type='text'
						className={clsx(
							'w-full p-2 rounded-[4px] outline outline-1 outline-gray-500 text-gray-900 peer',
							errors.firstName && 'outline-[3px] outline-rose-600',
							'placeholder:text-gray-300',
							'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100'
						)}
						{...register('firstName')}
					/>

					{errors.firstName && (
						<Form.Message className='text-rose-600'>
							Please enter your first name.
						</Form.Message>
					)}
				</Form.Field>

				<Form.Field name='lastName' className='gap-2 grid content-start'>
					<Form.Label className='justify-self-start text-xs peer-focus:font-bold'>
						Last Name
					</Form.Label>

					<Form.Control
						minLength={1}
						maxLength={150}
						placeholder='Doe'
						required
						type='text'
						className={clsx(
							'w-full p-2 rounded-[4px] outline outline-1 outline-gray-500 text-gray-900 peer',
							errors.lastName && 'outline-[3px] outline-rose-600',
							'placeholder:text-gray-300',
							'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100'
						)}
						{...register('lastName')}
					/>

					{errors.lastName && (
						<Form.Message className='text-rose-600'>
							Please enter your last name.
						</Form.Message>
					)}
				</Form.Field>

			</div>

			<Form.Field name='email' className='gap-2 grid content-start'>
				<Form.Label className='justify-self-start text-xs peer-focus:font-bold'>
					Email
				</Form.Label>

				<Form.Control
					maxLength={150}
					placeholder='johndoe@mail.com'
					required
					type='email'
					className={clsx(
						'w-full p-2 rounded-[4px] outline outline-1 outline-gray-500 text-gray-900 peer',
						errors.email && 'outline-[3px] outline-rose-600',
						'placeholder:text-gray-300',
						'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100'
					)}
					{...register('email')}
				/>

				{errors.email && (
					<Form.Message className='text-rose-600'>
						Please enter your email.
					</Form.Message>
				)}
			</Form.Field>

      <Form.Submit className='py-2 rounded-lg text-white bg-red-400 hover:bg-rose-600'>
        Sign up
      </Form.Submit>
    </Form.Root>
  )
}
