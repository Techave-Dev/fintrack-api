import { createParamDecorator, type ExecutionContext } from '@nestjs/common'

export interface RequestUser {
  id: number
  email: string
  name: string
  createdAt: Date
}

export const CurrentUser = createParamDecorator(
  (key: keyof RequestUser | undefined, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<{ user: RequestUser }>()
    return key ? req.user?.[key] : req.user
  },
)
