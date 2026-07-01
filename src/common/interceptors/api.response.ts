export class ApiResponse {
  constructor(
    public readonly message: string,
    public readonly data?: unknown,
    public readonly meta?: Record<string, unknown>,
  ) {}
}
