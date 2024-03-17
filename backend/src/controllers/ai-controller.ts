import { Request, Response } from 'express'
import { AIService } from '../services/ai-service'

export class AIController {
  static async sprayerCalc (req: Request, res: Response): Promise<void> {
    try {
      const { body } = req
      const sprayerCalc = await AIService.sprayerCalc(body)
      res.status(200).json({ data: sprayerCalc })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async imageProcessing (req: Request, res: Response): Promise<void> {
    try {
      const { body } = req
      const { assistantId } = req.params
      const completions = await AIService.imageProcessing(body, assistantId)
      res.status(200).json({ data: completions })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}
