import { z } from 'zod'

const nameRegex = /^(?!.*\s{2,})[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+(?:[\s]+[a-zA-ZÀ-ÖØ-ÿĀ-ſǄ-ɏʜ-ʯʼ˥˧ʽ˯\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+)*$/;

export const signUpSchema = z.object({
  firstName: z.string().min(1).max(150).regex(nameRegex),
  lastName: z.string().min(1).max(150).regex(nameRegex),
	email: z.string().max(50).email()
})
