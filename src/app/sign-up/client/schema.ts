import { subYears } from 'date-fns';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { z } from 'zod'

const nameRegex = /^(?!.*\s{2,})[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+(?:[\s]+[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+)*$/;

export const signUpSchema = z.object({
	firstName: z.string()
		.trim()
    .min(1, 'First name must be at least 1 character long.')
    .max(150, 'First name cannot exceed 150 characters.')
    .regex(nameRegex, 'Please enter a valid name.'),
  lastName: z.string()
		.trim()
    .min(1, 'Last name cannot be empty.')
    .max(150, 'Last name cannot exceed 150 characters.')
    .regex(nameRegex, 'Last name contains invalid characters.'),
  email: z.string()
		.trim()
    .max(50, 'Email cannot exceed 50 characters.')
    .email('Please enter a valid email address.'),
	birthDate: z.date({ required_error: 'Please enter a valid birth date.' })
		.min(new Date('1900-01-01'), 'Please enter a birth date after January 1, 1900.')
		.max(subYears(new Date(), 13), 'You must be at least 13 years old to sign up.'),
	phoneNumber: z.string().refine((value) => {
		const phoneNumber = parsePhoneNumberFromString(`+${value}`);

		return phoneNumber?.isValid() ?? false;
	}, {
		message: 'Please enter a valid phone number.'
	})
})

export type SignUpSchema = z.infer<typeof signUpSchema>
