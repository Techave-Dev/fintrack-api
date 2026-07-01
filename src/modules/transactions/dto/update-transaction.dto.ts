import { z } from 'zod'

export const UpdateTransactionSchema = z
  .object({
    amount: z
      .string()
      .regex(/^\d+(\.\d{1,2})?$/, 'Amount must be a positive number with at most 2 decimal places.')
      .max(50, 'Amount must be at most 50 characters.')
      .refine((val) => parseFloat(val) > 0, { message: 'Amount must be greater than 0.' })
      .optional(),
    description: z
      .string()
      .min(1, 'Description cannot be empty.')
      .max(1000, 'Description must be at most 1000 characters.')
      .optional(),
    type: z.enum(['income', 'expense']).optional(),
    categoryId: z
      .number()
      .int('Category ID must be an integer.')
      .positive('Category ID must be positive.')
      .optional(),
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format.')
      .optional(),
  })
  .refine((d) => Object.keys(d).length > 0, {
    message: 'At least one field must be provided.',
    path: ['amount'],
  })

export type UpdateTransactionDto = z.infer<typeof UpdateTransactionSchema>
