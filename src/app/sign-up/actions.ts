'use server'

import { z } from 'zod'

interface SignUpState {
	errors: {
		firstName: boolean
		lastName: boolean
		email: boolean
	}
}

const signUpSchema = z.object({
  firstName: z.string().min(1).regex(/\S+/),
  lastName: z.string().min(1).regex(/\S+/),
	email: z.string().email()
})

export async function signUp(prevState: SignUpState, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 2000))

	const firstName = formData.get('firstName') as string
	const lastName = formData.get('lastName') as string
	const email = formData.get('email') as string

  const firstNameValidation = signUpSchema.safeParse(firstName)

	if (firstNameValidation.error) {
		prevState.errors.firstName = true
	}

	return prevState
}
