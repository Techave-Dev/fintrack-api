export function isDuplicateError(error: unknown): boolean {
  if (typeof error !== 'object' || error === null) return false
  if ('message' in error && typeof error.message === 'string' && error.message.includes('23505'))
    return true
  if ('code' in error && error.code === 'P2002') return true
  if (
    'meta' in error &&
    error.meta &&
    typeof error.meta === 'object' &&
    'driverAdapterError' in error.meta &&
    error.meta.driverAdapterError &&
    typeof error.meta.driverAdapterError === 'object' &&
    'cause' in error.meta.driverAdapterError &&
    error.meta.driverAdapterError.cause &&
    typeof error.meta.driverAdapterError.cause === 'object' &&
    'code' in error.meta.driverAdapterError.cause &&
    error.meta.driverAdapterError.cause.code === '23505'
  )
    return true
  return false
}
