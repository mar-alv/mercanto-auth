import { AppleLogo, ArrowLeft, GoogleLogo, MetaLogo } from '@phosphor-icons/react/dist/ssr'

import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

import { signUp } from './actions'

import { Logo } from '@/components/logo'
import { SignUpForm } from '@/components/sign-up-form'
import { SsoButton } from '@/components/sso-button'

export const metadata: Metadata = {
  title: 'Create your account'
}

export default function SignUp() {
  return (
		<div className='h-svh p-6 gap-10 grid justify-content-center sm:grid-cols-[auto_auto] bg-gray-50 overflow-hidden dark:bg-gray-900'>
			<main className='sm:justify-self-center text-gray-900 dark:text-gray-100'>
				<div className='flex justify-between'>
					<Logo />

					<Link href='/sign-up' className='gap-1 flex items-center text-rose-400 font-bold underline hover:text-rose-600'>
						<ArrowLeft />

						Go back
					</Link>
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

					<SignUpForm signUp={signUp} />

					<span className='text-center'>
						Already have an account? <Link href='/sign-in' className='text-rose-400 font-bold underline hover:text-rose-600'>Sign in</Link>
					</span>
				</div>
			</main>

			<Image
				src='/bg-sign-up.jpg'
				alt='Grayscale image of people walking down a street and having lunch, with a large, bright yellow SALE text dominating the scene, reflected as if in a store window.'
				width={16}
				height={9}
				layout='responsive'
				className='max-w-[756px] max-h-[638px] hidden self-center sm:block rounded-3xl object-cover dark:opacity-75'
			/>
		</div>
  )
}
