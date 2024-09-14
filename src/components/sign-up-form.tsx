'use client'

import { CalendarIcon } from '@radix-ui/react-icons'
import { Check, ChevronDown, ChevronsUpDown } from 'lucide-react'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

import { format } from 'date-fns'

import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { useFormState } from 'react-dom'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { signUp } from '@/app/sign-up/client/actions'
import { signUpSchema, SignUpSchema } from '@/app/sign-up/client/schema'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
	Form,
	FormControl,
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

import { libPhoneNumber } from '@/lib/lib-phone-number'
import { cn } from '@/lib/utils'
import { countriesUtils } from '@/utils/countries'

export function SignUpForm() {
  const [isPhoneNumberModalOpen, setIsPhoneNumberModalOpen] = useState(false)
  const [phoneNumberCountry, setPhoneNumberCountry] = useState(countriesUtils.getDefaultCountry())

  const [, dispatch] = useFormState(signUp, null)

	const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: ''
		}
  })

	function onSubmit(data: SignUpSchema) {
		const formData = new FormData()

		formData.append('firstName', data.firstName)
		formData.append('lastName', data.lastName)
		formData.append('email', data.email)
		formData.append('birthDate', data.birthDate.toISOString())
		formData.append('phoneNumber', `+${data.phoneNumber}`)

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
													'pl-3 text-left font-normal',
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

					<FormField
						control={form.control}
						name='phoneNumber'
						render={({ field, fieldState }) => (
							<FormItem className='space-y-2 flex flex-col'>
								<FormLabel>
									Phone Number
								</FormLabel>

								<div className='flex rounded-md focus-within:ring-1 focus-within:ring-ring'>
									<Popover open={isPhoneNumberModalOpen} onOpenChange={setIsPhoneNumberModalOpen}>
										<PopoverTrigger asChild>
											<Button
												variant='outline'
												role='combobox'
												aria-expanded={isPhoneNumberModalOpen}
												className='gap-1 flex items-center border-r-0 rounded-r-none focus:bg-accent'
											>
												{/*TODO: default value will be current location flag*/}
												{phoneNumberCountry
													? getUnicodeFlagIcon(phoneNumberCountry.code)
													: countriesUtils.getDefaultCountry().flag
												}
												<ChevronDown size={16} />
											</Button>
										</PopoverTrigger>

										<PopoverContent className='w-48 p-0'>
											<Command>
												<CommandInput placeholder='Search country...' />
												<CommandList>
													<CommandEmpty>Country not found.</CommandEmpty>

													<CommandGroup>
														{countriesUtils.getCountries().map((country) => (
															<CommandItem
																key={country.name}
																value={country.name}
																onSelect={(currentValue) => {
																	const selectedCountry = countriesUtils.getCountry(currentValue)
																	const selectedTheSameCountry = currentValue === phoneNumberCountry.name

																	setPhoneNumberCountry(selectedTheSameCountry ? countriesUtils.getDefaultCountry() : selectedCountry)
																	setIsPhoneNumberModalOpen(false)
																}}
															>
																<Check
																	className={cn(
																		'mr-2 h-4 w-4',
																		phoneNumberCountry.name === country.name ? 'opacity-100' : 'opacity-0'
																	)}
																/>
																<div className='gap-1 flex items-center'>
																	<span>
																		{country.flag}
																	</span>
																	<span>
																		{country.name}
																	</span>
																</div>
															</CommandItem>
														))}
													</CommandGroup>
												</CommandList>
											</Command>
										</PopoverContent>
									</Popover>

									<FormControl>
										<Input
											placeholder={libPhoneNumber.countryPlaceholder(phoneNumberCountry.code)}
											type='text'
											className='border-l-0 rounded-l-none focus-visible:ring-0'
											{...field}
										/>
									</FormControl>
								</div>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button size='lg' type='submit'>
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
