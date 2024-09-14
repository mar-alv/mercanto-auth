'use server'

import { signUpSchema } from './schema'

export async function signUp(_: null, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 2000))

	const data = Object.fromEntries(formData)
	const signUpValidation = signUpSchema.safeParse(data)

	if (signUpValidation.error) {
		// TODO: show error toast
	}

	// TODO: request for sign up

	return null // TODO: if request is successful then redirect user back to home authenticated
}
