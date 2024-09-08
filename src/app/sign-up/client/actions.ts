'use server'

import { signUpSchema } from '@/lib/zod/sign-up'

export async function signUp(_: null, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 2000))

	const firstName = formData.get('firstName') as string
	const lastName = formData.get('lastName') as string
	const email = formData.get('email') as string
	const birthDate = formData.get('birthDate') as string

	const signUpValidation = signUpSchema.safeParse({
		firstName,
		lastName,
		email,
		birthDate
	})

	console.log(birthDate)

	if (signUpValidation.error) {
		// TODO: show error toast
	}

	// TODO: request for sign up

	return null // TODO: if request is successful then redirect user back to home authenticated
}
