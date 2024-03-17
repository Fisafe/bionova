import { Router } from 'express'
import { ChatGptController } from '../controllers/chat-gpt-controller'

export default (router: Router): void => {
  router.post('/chat-gpt/completions', ChatGptController.completions)
  router.post('/chat-gpt/assistants', ChatGptController.assistants)
  router.post('/chat-gpt/assistants/:assistantId/file', ChatGptController.assistantFile)
}
