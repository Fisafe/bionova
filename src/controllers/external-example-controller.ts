import { Request, Response } from 'express'
import { ExternalExampleService } from '../services/external-example-service'

export class ExternalExampleController {
  static async externalExample (req: Request, res: Response): Promise<void> {
    try {
      const examples = await ExternalExampleService.advice()
      res.status(200).json({ data: examples })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}
