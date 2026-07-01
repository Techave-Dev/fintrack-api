export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface ControllerResponse<T = unknown> {
  message: string
  requestId: string
  data?: T
  meta?: Record<string, unknown>
}
