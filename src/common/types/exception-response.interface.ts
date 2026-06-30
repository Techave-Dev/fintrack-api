export interface ValidationError {
  field: string
  code: string
  message: string
}

export interface ExceptionResponseObject {
  message: string
  requestId: string
  code: string
  error?: ValidationError[]
}
