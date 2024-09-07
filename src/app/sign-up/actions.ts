'use server'

import { z } from 'zod'

interface SignUpState {
	errors: {
		firstName: boolean
		lastName: boolean
		email: boolean
	}
}

const nameRegex = /^(?!.*\s{2,})[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+(?:[\s]+[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+)*$/;

const signUpSchema = z.object({
  firstName: z.string().min(1).max(150).regex(nameRegex),
  lastName: z.string().min(1).max(150).regex(nameRegex),
	email: z.string().max(50).email()
})

export async function signUp(prevState: SignUpState, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 2000))

	const firstName = formData.get('firstName') as string
	const lastName = formData.get('lastName') as string
	const email = formData.get('email') as string

	const signUpValidation = signUpSchema.safeParse({
		firstName,
		lastName,
		email
	})

	if (signUpValidation.error) {
		const fieldWithErrors = signUpValidation.error.errors.map(errors => {
			return errors.path[0]
		})

		return {
			errors: {
				firstName: fieldWithErrors.includes('firstName'),
				lastName: fieldWithErrors.includes('lastName'),
				email: fieldWithErrors.includes('email')
			}
		}
	}

	// TODO: request for sign up

	return prevState
}
