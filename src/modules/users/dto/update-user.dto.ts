import { z } from 'zod'

export const UpdateUserSchema = z
  .object({
    name: z.string().optional(),
    email: z
      .string()
      .email('Invalid email format.')
      .max(254, 'Email must be at most 254 characters.')
      .optional(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .max(128, 'Password must be at most 128 characters.')
      .optional(),
    currentPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.password && !data.currentPassword) return false
      return true
    },
    { message: 'Current password is required when changing password.', path: ['currentPassword'] },
  )

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>
