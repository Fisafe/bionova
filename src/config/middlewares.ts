import { Express } from 'express'
import { CORS, bodyParser, contentType } from '../middlewares'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(CORS)
  app.use(contentType)
}
