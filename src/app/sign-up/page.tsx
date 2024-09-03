import { clsx } from 'clsx'
import * as Form from '@radix-ui/react-form'
import { AppleLogo, GoogleLogo, MetaLogo } from '@phosphor-icons/react/dist/ssr'

import Image from 'next/image'
import Link from 'next/link'

import { SsoButton } from '@/components/sso-button'
import { Logo } from '@/components/logo'

export default function SignUp() {
  return (
		<div className='h-svh p-6 gap-10 grid justify-content-center sm:grid-cols-[auto_auto] bg-gray-50 overflow-hidden dark:bg-gray-900'>
			<main className='sm:justify-self-center text-gray-900 dark:text-gray-100'>
				<Logo />

				<div className='h-full gap-6 flex flex-col justify-center'>
					<div className='gap-1 grid'>
						<h1 className='text-3xl font-bold'>
							Create your account
						</h1>

						<p className='text-md'>
							Sign up to unlock exclusive deals and track your orders!
						</p>
					</div>

					<div className='gap-1 grid grid-cols-3'>
						<SsoButton>
							<GoogleLogo />
						</SsoButton>
						<SsoButton>
							<MetaLogo />
						</SsoButton>
						<SsoButton>
							<AppleLogo />
						</SsoButton>
					</div>

					<div className='gap-2 flex items-center'>
						<hr className='w-full border-gray-300 dark:border-gray-100' />
						<span className='text-md'>or</span>
						<hr className='w-full border-gray-300 dark:border-gray-100' />
					</div>

					<Form.Root className='grid gap-3'>
						<Form.Field name='name' className='grid gap-2'>
							<Form.Label className='text-xs peer-focus:font-bold'>
								Name
							</Form.Label>

							<Form.Control type='text' className='w-full rounded-[4px] outline outline-1 outline-gray-500 focus:outline-2 focus:outline-gray-900 dark:focus:outline-offset-2 dark:focus:outline-gray-100 peer' />
						</Form.Field>

						<Form.Submit>
							Sign up
						</Form.Submit>
					</Form.Root>

					<span>Already have an account? <Link href='/sign-in' className='text-rose-400 font-bold underline hover:text-rose-600'>Sign in</Link> </span>
				</div>
			</main>

			<Image
				src='/bg-sign-up.jpg'
				alt='Grayscale image of people walking down a street and having lunch, with a large, bright yellow SALE text dominating the scene, reflected as if in a store window.'
				width={16}
				height={9}
				layout='responsive'
				className='max-w-[756px] max-h-[670px] hidden self-center sm:block rounded-3xl object-cover dark:opacity-75'
			/>
		</div>
  )
}
