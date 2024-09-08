'use client'

import clsx from 'clsx'
import * as Form from '@radix-ui/react-form'

import Link from 'next/link'

import { useFormState } from 'react-dom'
import { z } from 'zod'

interface Props {
	signUp(_: null, formData: FormData): Promise<null>
}

const nameRegex = /^(?!.*\s{2,})[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+(?:[\s]+[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+)*$/;

const signUpSchema = z.object({
  firstName: z.string().min(1).max(150).regex(nameRegex),
  lastName: z.string().min(1).max(150).regex(nameRegex),
	email: z.string().max(50).email()
})

export function SignUpForm({ signUp }: Props) {
  const [, dispatch] = useFormState(signUp, null)

	function firstNameValidation(value: string) {
		const schema = signUpSchema.pick({ firstName: true })
		const validation = schema.safeParse({
			firstName: value
		})

		return !validation.success
	}

	function lastNameValidation(value: string) {
		const schema = signUpSchema.pick({ lastName: true })
		const validation = schema.safeParse({
			lastName: value
		})

		return !validation.success
	}

	function emailValidation(value: string) {
		const schema = signUpSchema.pick({ email: true })
		const validation = schema.safeParse({
			email: value
		})

		return !validation.success
	}

  return (
    <Form.Root action={dispatch} className='gap-3 grid'>
			<div className='gap-3 grid grid-cols-2'>
				<Form.Field name='firstName' className='gap-2 grid content-start'>
					<Form.Label className='justify-self-start text-xs data-[invalid=true]:text-rose-600'>
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
							'data-[invalid=true]:outline-[3px] data-[invalid=true]:outline-rose-600',
							'placeholder:text-gray-300',
							'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100 dark:placeholder:text-gray-400 dark:bg-gray-200'
						)}
					/>

					<Form.Message match={firstNameValidation} className='text-rose-600'>
						Please enter your first name.
					</Form.Message>
				</Form.Field>

				<Form.Field name='lastName' className='gap-2 grid content-start'>
					<Form.Label className='justify-self-start text-xs data-[invalid=true]:text-rose-600'>
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
							'data-[invalid=true]:outline-[3px] data-[invalid=true]:outline-rose-600',
							'placeholder:text-gray-300',
							'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100 dark:placeholder:text-gray-400 dark:bg-gray-200'
						)}
					/>

					<Form.Message match={lastNameValidation} className='text-rose-600'>
						Please enter your last name.
					</Form.Message>
				</Form.Field>
			</div>

			<Form.Field name='email' className='gap-2 grid content-start'>
				<Form.Label className='justify-self-start text-xs data-[invalid=true]:text-rose-600'>
					Email
				</Form.Label>

				<Form.Control
					minLength={1}
					maxLength={50}
					placeholder='johndoe@mail.com'
					required
					type='text'
					className={clsx(
						'w-full p-2 rounded-[4px] outline outline-1 outline-gray-500 text-gray-900 peer',
						'data-[invalid=true]:outline-[3px] data-[invalid=true]:outline-rose-600',
						'placeholder:text-gray-300',
						'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100 dark:placeholder:text-gray-400 dark:bg-gray-200'
					)}
				/>

				<Form.Message match={emailValidation} className='text-rose-600'>
					Please enter your email.
				</Form.Message>
			</Form.Field>

			<Form.Field name='terms' className='gap-2 flex justify-center'>
				<Form.Control
					required
					type='checkbox'
					className='cursor-pointer data-[valid=true]:accent-rose-400'
				/>

				{/*TODO: create terms and conditions page*/}
				<Form.Label className='my-2 justify-self-start text-xs cursor-pointer'>
					I have read and agree to the <Link href='/' target='_blank' className='text-rose-400 font-bold underline hover:text-rose-600'>Terms and Conditions</Link> and <Link href='/' target='_blank' className='text-rose-400 font-bold underline hover:text-rose-600'>Privacy Policy</Link>.
				</Form.Label>
			</Form.Field>

			<Form.Submit className='py-2 rounded-lg text-white bg-red-400 hover:bg-rose-600'>
				Sign up
			</Form.Submit>
    </Form.Root>
  )
}
