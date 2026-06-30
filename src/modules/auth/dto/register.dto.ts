import { z } from 'zod'

export const RegisterSchema = z.object({
  email: z.string('Email is required.').min(1, 'Email is required.').email('Invalid email format.'),
  password: z
    .string('Password is required.')
    .min(8, 'Password must be at least 8 characters.')
    .max(128, 'Password must be at most 128 characters.'),
  name: z
    .string('Name is required.')
    .min(1, 'Name cannot be empty.')
    .max(255, 'Name must be at most 255 characters.'),
})

export type RegisterDto = z.infer<typeof RegisterSchema>
