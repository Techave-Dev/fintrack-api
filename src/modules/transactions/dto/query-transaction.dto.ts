import { z } from 'zod'

export const QueryTransactionSchema = z.object({
  page: z.coerce.number().int().positive('Page must be positive.').default(1),
  limit: z.coerce
    .number()
    .int()
    .min(1, 'Limit must be at least 1.')
    .max(100, 'Limit must be at most 100.')
    .default(20),
  type: z.enum(['income', 'expense']).optional(),
  categoryId: z.coerce.number().int().positive('Category ID must be positive.').optional(),
  from: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format.')
    .optional(),
  to: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format.')
    .optional(),
})

export type QueryTransactionDto = z.infer<typeof QueryTransactionSchema>
