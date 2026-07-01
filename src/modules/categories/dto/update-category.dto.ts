import { z } from 'zod'

export const UpdateCategorySchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name cannot be empty.')
      .max(255, 'Name must be at most 255 characters.')
      .optional(),
    type: z.enum(['income', 'expense']).optional(),
  })
  .refine((d) => d.name !== undefined || d.type !== undefined, {
    message: 'At least one field must be provided.',
    path: ['name'],
  })

export type UpdateCategoryDto = z.infer<typeof UpdateCategorySchema>
