import { AppleLogo, GoogleLogo, MetaLogo } from '@phosphor-icons/react/dist/ssr'

import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { SignUpForm } from '@/components/sign-up-form'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export const metadata: Metadata = {
  title: 'Create your account'
}

export default function SignUp() {
  return (
		<div className='h-svh p-6 gap-10 grid justify-content-center sm:grid-cols-[auto_auto] bg-gray-50 dark:bg-gray-900'>
			<main className='sm:justify-self-center text-gray-900 dark:text-gray-100'>
				{/*TODO: Turn into a header component*/}
				<div className='flex justify-between'>
					<Logo />

					<ThemeToggle />

					{/*TODO: Add language select component*/}

					<Button asChild variant='link'>
						<Link href='/sign-in'>Sign in</Link>
					</Button>
				</div>

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
						<Button variant='outline-secondary'>
							<GoogleLogo />
						</Button>
						<Button variant='outline-secondary'>
							<MetaLogo />
						</Button>
						<Button variant='outline-secondary'>
							<AppleLogo />
						</Button>
					</div>

					<div className='gap-2 flex items-center'>
						<hr className='w-full border-gray-300 dark:border-gray-100' />
						<span className='text-md'>or</span>
						<hr className='w-full border-gray-300 dark:border-gray-100' />
					</div>

					<SignUpForm />
				</div>
			</main>

			<Image
				src='/bg-sign-up.jpg'
				alt='Grayscale image of people walking down a street and having lunch, with a large, bright yellow SALE text dominating the scene, reflected as if in a store window.'
				width={756}
				height={670}
				className='max-h-[670px] hidden self-center sm:block rounded-3xl object-cover dark:opacity-75'
			/>
		</div>
  )
}
