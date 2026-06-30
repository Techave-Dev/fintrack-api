import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string('Email is required.').min(1, 'Email is required.').email('Invalid email format.'),
  password: z
    .string('Password is required.')
    .min(1, 'Password is required.')
    .max(128, 'Password must be at most 128 characters.'),
})

export type LoginDto = z.infer<typeof LoginSchema>
