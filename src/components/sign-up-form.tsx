'use client'

import clsx from 'clsx'
import * as Form from '@radix-ui/react-form'

import { useFormState } from 'react-dom'

interface Props {
	signUp(prevState: SignUpState, formData: FormData): Promise<SignUpState>
}

interface SignUpState {
	errors: {
		firstName: boolean
		lastName: boolean
		email: boolean
	}
}

export function SignUpForm({ signUp }: Props) {
  const [state, dispatch] = useFormState(signUp, {
		errors: {
			firstName: false,
			lastName: false,
			email: false
		}
	})

  return (
    <Form.Root action={dispatch} className='gap-3 grid'>
			<div className='gap-3 grid grid-cols-2'>
				<Form.Field name='firstName' className='gap-2 grid content-start'>
					<Form.Label className='justify-self-start text-xs data-[invalid=true]:text-rose-600'>
						First Name
					</Form.Label>

					<Form.Control
						placeholder='John'
						required
						type='text'
						className={clsx(
							'w-full p-2 rounded-[4px] outline outline-1 outline-gray-500 text-gray-900 peer',
							'data-[invalid=true]:outline-[3px] data-[invalid=true]:outline-rose-600',
							state.errors.firstName && 'outline-[3px] outline-rose-600',
							'placeholder:text-gray-300',
							'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100 dark:placeholder:text-gray-400 dark:bg-gray-200'
						)}
					/>

					{state.errors.firstName && ( 
						<Form.Message className='text-rose-600'>
							Please enter your first name.
						</Form.Message>
					)}
				</Form.Field>

				<Form.Field name='lastName' className='gap-2 grid content-start'>
					<Form.Label className='justify-self-start text-xs data-[invalid=true]:text-rose-600'>
						Last Name
					</Form.Label>

					<Form.Control
						placeholder='Doe'
						required
						type='text'
						className={clsx(
							'w-full p-2 rounded-[4px] outline outline-1 outline-gray-500 text-gray-900 peer',
							'data-[invalid=true]:outline-[3px] data-[invalid=true]:outline-rose-600',
							state.errors.lastName && 'outline-[3px] outline-rose-600',
							'placeholder:text-gray-300',
							'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100 dark:placeholder:text-gray-400 dark:bg-gray-200'
						)}
					/>

					{state.errors.lastName && (
						<Form.Message className='text-rose-600'>
							Please enter your last name.
						</Form.Message>
					)}
				</Form.Field>
			</div>

			<Form.Field name='email' className='gap-2 grid content-start'>
				<Form.Label className='justify-self-start text-xs data-[invalid=true]:text-rose-600'>
					Email
				</Form.Label>

				<Form.Control
					placeholder='johndoe@mail.com'
					required
					type='email'
					className={clsx(
						'w-full p-2 rounded-[4px] outline outline-1 outline-gray-500 text-gray-900 peer',
						'data-[invalid=true]:outline-[3px] data-[invalid=true]:outline-rose-600',
						state.errors.email && 'outline-[3px] outline-rose-600',
						'placeholder:text-gray-300',
						'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100 dark:placeholder:text-gray-400 dark:bg-gray-200'
					)}
				/>

				{state.errors.email && (
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
