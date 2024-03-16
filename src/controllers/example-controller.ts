import { Request, Response } from 'express'
import { ExampleService } from '../services/example-service'

export class ExampleController {
  static async example (req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body
      if (!name) throw new Error('Missing param: name')
      const example = await ExampleService.create({
        name
      })

      res.status(201).json({ data: example })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async exampleList (req: Request, res: Response): Promise<void> {
    try {
      const examples = await ExampleService.list()
      res.status(200).json({ data: examples })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}
