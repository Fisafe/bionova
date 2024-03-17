import { Request, Response } from 'express'
import { ChatGptService } from '../services/chat-gpt-service'

export class ChatGptController {
  static async completions (req: Request, res: Response): Promise<void> {
    try {
      const { body } = req
      const completions = await ChatGptService.completions(body)
      res.status(200).json({ data: completions })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async assistants (req: Request, res: Response): Promise<void> {
    try {
      const { body } = req
      const completions = await ChatGptService.assistants(body)
      res.status(200).json({ data: completions })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async assistantFile (req: Request, res: Response): Promise<void> {
    try {
      const { body } = req
      const completions = await ChatGptService.assistantFile(body)
      res.status(200).json({ data: completions })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}
