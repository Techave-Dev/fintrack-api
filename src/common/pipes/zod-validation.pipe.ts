import {
  type ArgumentMetadata,
  BadRequestException,
  Injectable,
  type PipeTransform,
} from '@nestjs/common'
import type { ZodError, ZodSchema } from 'zod'
import type { ValidationError } from '../types/exception-response.interface'

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}

  transform(value: unknown, _metadata: ArgumentMetadata): unknown {
    const result = this.schema.safeParse(value)

    if (!result.success) {
      throw new BadRequestException({
        message: 'Validation failed.',
        code: 'validation.failed',
        error: this.formatErrors(result.error),
      })
    }

    return result.data
  }

  private formatErrors(error: ZodError): ValidationError[] {
    return error.issues.map((issue) => ({
      field: issue.path.join('.'),
      code: issue.code,
      message: issue.message,
    }))
  }
}
