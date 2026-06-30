import { z } from 'zod'

export const CreateCategorySchema = z.object({
  name: z.string().min(1, 'Name is required.').max(255, 'Name must be at most 255 characters.'),
  type: z.enum(['income', 'expense'], { message: 'Type must be income or expense.' }),
})

export type CreateCategoryDto = z.infer<typeof CreateCategorySchema>
