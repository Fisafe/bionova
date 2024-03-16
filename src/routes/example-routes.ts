import { Router } from 'express'
import { ExampleController } from '../controllers/example-controller'

export default (router: Router): void => {
  router.post('/example', ExampleController.example)
  router.get('/example', ExampleController.exampleList)
}
