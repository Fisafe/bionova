import * as dotenv from 'dotenv'
dotenv.config()

export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://127.0.0.1:27017/hackaton-biofy',
  port: process.env.PORT ?? 3000,
  chatGptSecretKey: process.env.CHAT_GPT_SECRET_KEY ?? 'sadsaksa'
}
