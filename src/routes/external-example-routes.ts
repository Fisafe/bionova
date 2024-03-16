import { Router } from 'express'
import { ExternalExampleController } from '../controllers/external-example-controller'

export default (router: Router): void => {
  router.get('/external-example', ExternalExampleController.externalExample)
}
