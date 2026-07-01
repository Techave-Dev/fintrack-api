import { z } from 'zod'

export const CreateTransactionSchema = z.object({
  amount: z
    .string('Amount is required.')
    .min(1, 'Amount is required.')
    .regex(/^\d+(\.\d{1,2})?$/, 'Amount must be a positive number with at most 2 decimal places.')
    .max(50, 'Amount must be at most 50 characters.')
    .refine((val) => parseFloat(val) > 0, { message: 'Amount must be greater than 0.' }),
  description: z
    .string('Description is required.')
    .min(1, 'Description cannot be empty.')
    .max(1000, 'Description must be at most 1000 characters.'),
  type: z.enum(['income', 'expense'], { message: 'Type must be income or expense.' }),
  categoryId: z
    .number('Category ID is required.')
    .int('Category ID must be an integer.')
    .positive('Category ID must be positive.'),
  date: z
    .string('Date is required.')
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format.'),
})

export type CreateTransactionDto = z.infer<typeof CreateTransactionSchema>
