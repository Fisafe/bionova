import { Router } from 'express'
import { AIController } from '../controllers/ai-controller'

export default (router: Router): void => {
  router.post('/ai/sprayerCalc', AIController.sprayerCalc)
  router.post('/ai/imageProcessing/:assistantId/file', AIController.imageProcessing)
}
