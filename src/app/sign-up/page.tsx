import * as Form from '@radix-ui/react-form'

import { GoogleLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { SsoButton } from '@/components/sso-button'


export default function SignUp() {
  return (
		<div className='h-svh p-6 gap-32 flex bg-amber-50 overflow-hidden'>
			<main className='text-gray-800'>
				<p>LOGO AQUI</p>

				<div className='h-full gap-6 flex flex-col justify-center'>
					<div className='gap-1 grid'>
						<h1 className='text-2xl font-bold'>
							Create your account
						</h1>

						<p className='text-xs'>
							Sign up to unlock exclusive deals and track your orders!
						</p>
					</div>

					<div className='gap-1 grid grid-cols-3'>
						<SsoButton>
							<GoogleLogo />
						</SsoButton>
						<SsoButton>
							<GoogleLogo />
						</SsoButton>
						<SsoButton>
							<GoogleLogo />
						</SsoButton>
					</div>

					<div className='gap-2 flex items-center'>
						<hr className='w-full border-gray-400' />
						<span className='text-sm'>or</span>
						<hr className='w-full border-gray-400' />
					</div>

					<Form.Root>
						<Form.Field name='name'>
							<Form.Label>
								Name
							</Form.Label>

							<Form.Control type='text' />
						</Form.Field>

						<Form.Field name='email'>
							<Form.Label>
								E-mail
							</Form.Label>

							<Form.Control type='email' />
						</Form.Field>

						<Form.Field name='number'>
							<Form.Label>
								Phone number
							</Form.Label>

							<Form.Control type='number' />
						</Form.Field>

						<Form.Submit>
							Sign up
						</Form.Submit>
					</Form.Root>

					<span>Already have an account? <Link href='/sign-in' className='font-bold'>Sign in</Link> </span>
				</div>
			</main>

			<Image
				src='/bg-sign-up.jpg'
				alt='Grayscale image of people walking down a street and having lunch, with a large, bright yellow SALE text dominating the scene, reflected as if in a store window.'
				width={16}
				height={9}
				layout='responsive'
				className='hidden md:block rounded-3xl object-cover'
			/>
		</div>
  )
}
