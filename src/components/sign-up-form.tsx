'use client'

import clsx from 'clsx'
import * as Form from '@radix-ui/react-form'

import { z } from 'zod'

interface Props {
	signUp(data: FormData): Promise<void>
}

const signUpSchema = z.object({
  name: z.string().regex(/^\s*\S+(\s+\S+)+\s*$/, {
    message: 'The text must contain at least two words'
  })
})

export function SignUpForm({ signUp }: Props) {
  return (
		<Form.Root action={signUp} className='grid gap-3'>
			<Form.Field name='name' className='grid gap-2'>
				<Form.Label className='justify-self-start text-xs peer-focus:font-bold'>
					Name
				</Form.Label>

				<Form.Control
					maxLength={150}
					placeholder='John Doe'
					type='text'
					className={clsx(
						'w-full p-2 rounded-[4px] outline outline-1 outline-gray-500 text-gray-900 peer',
						'data-[invalid=true]:outline-[3px] data-[invalid=true]:outline-rose-600',
						'placeholder:text-gray-300',
						'focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100'
					)}
				/>

				<Form.Message
					match={(value) => {
						return !signUpSchema.safeParse({ name: value }).success
					}}
					className='text-rose-600'
				>
					Please enter your first and last name.
				</Form.Message>
			</Form.Field>

			<Form.Submit className='py-2 rounded-lg text-white bg-red-400 hover:bg-rose-600'>
				Sign up
			</Form.Submit>
		</Form.Root>
  )
}
