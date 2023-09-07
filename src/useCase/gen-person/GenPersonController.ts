import type { Request, Response } from 'express'
import { GenPersonUseCase } from "./GenPersonUseCase"

export class GenPersonController {
  constructor(
    private readonly useCase: GenPersonUseCase
  ) {}
  async handle (_req: Request<{}, {}, {}>, res: Response): Promise<Response> {
    try {
      const data = await this.useCase.execute()

      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}