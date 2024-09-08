'use client'

import Link from 'next/link'

import { useForm } from "react-hook-form"
import { useFormState } from 'react-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel, 
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { signUpSchema, SignUpSchema } from '@/lib/zod/sign-up'

interface Props {
	signUp(_: null, formData: FormData): Promise<null>
}

export function SignUpForm({ signUp }: Props) {
  const [, dispatch] = useFormState(signUp, null)

	const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
			firstName: '',
			lastName: '',
			email: ''
    }
  })

  return (
    <Form {...form}>
			<form action={dispatch} className='gap-3 grid'>
				<div className='gap-3 grid grid-cols-2'>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									First Name
								</FormLabel>

								<FormControl>
									<Input
										placeholder='John'
										type='text'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='lastName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Last Name
								</FormLabel>

								<FormControl>
									<Input
										placeholder='Doe'
										type='text'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Email
							</FormLabel>

							<FormControl>
								<Input
									placeholder='johndoe@mail.com'
									type='email'
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit' className='py-2 rounded-lg text-white bg-red-400 hover:bg-rose-600'>
					Sign up
				</Button>

				{/*TODO: create terms and conditions page*/}
				<p className='text-center'>
					By clicking &quot;Sign Up&quot;, you agree to our
					<Button asChild variant='link' className='px-1'>
						<Link href='/'>Terms of Service</Link>
					</Button>
					and
					<Button asChild variant='link' className='px-1'>
						<Link href='/'>Privacy Policy</Link>
					</Button>.
				</p>
			</form>
    </Form>
  )
}
