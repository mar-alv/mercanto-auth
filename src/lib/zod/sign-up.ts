import { z } from 'zod'

const nameRegex = /^(?!.*\s{2,})[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+(?:[\s]+[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+)*$/;

export const signUpSchema = z.object({
	firstName: z.string()
    .min(1, 'First name must be at least 1 character long.')
    .max(150, 'First name cannot exceed 150 characters.')
    .regex(nameRegex, 'First name contains invalid characters.'),
  lastName: z.string()
    .min(1, 'Last name cannot be empty.')
    .max(150, 'Last name cannot exceed 150 characters.')
    .regex(nameRegex, 'Last name contains invalid characters.'),
  email: z.string()
    .max(50, 'Email cannot exceed 50 characters.')
    .email('Please enter a valid email address.'),
	// TODO: Add validations for invalid birth date, prior to 1900 and not being 13 years old
	birthDate: z.date({
    required_error: 'A date of birth is required.',
  })
})

export type SignUpSchema = z.infer<typeof signUpSchema>
