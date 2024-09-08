'use client'

import { CalendarIcon } from '@radix-ui/react-icons'

import { format } from 'date-fns'

import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { useFormState } from 'react-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel, 
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import { cn } from '@/lib/utils'
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

	function onSubmit(data: SignUpSchema) {
		const formData = new FormData()

		formData.append('firstName', data.firstName)
		formData.append('lastName', data.lastName)
		formData.append('email', data.email)
		formData.append('birthDate', data.birthDate.toISOString())

		dispatch(formData)
  }

  return (
    <Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='gap-3 grid'>
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

				<div className='gap-3 grid grid-cols-2'>
					<FormField
						control={form.control}
						name='birthDate'
						render={({ field }) => (
							<FormItem className='flex flex-col'>
								<FormLabel>
									Birth date
								</FormLabel>

								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant='outline'
												className={cn(
													'w-[240px] pl-3 text-left font-normal',
													!field.value && 'text-muted-foreground'
												)}
											>
												{/*TODO: Change format based on the current idiom*/}
												{field.value ? (
													format(field.value, 'PPP')
												) : (
													<span>Pick a date</span>
												)}

												<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
											</Button>
										</FormControl>
									</PopoverTrigger>

									<PopoverContent className='w-auto p-0' align='start'>
										<Calendar
											autoFocus
											disabled={(date) => {
												const today = new Date()
												const minDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate())
												const maxDate = new Date('1900-01-01')

												return date > today || date < maxDate || date > minDate
											}}
											mode='single'
											onSelect={field.onChange}
											selected={field.value}
											showYearSwitcher
										/>
									</PopoverContent>
								</Popover>

								<FormMessage />
							</FormItem>
						)}
					/>

					{/*TODO: phone number field*/}
				</div>

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
