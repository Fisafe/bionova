export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://127.0.0.1:27017/hackaton-biofy',
  port: process.env.PORT ?? 3000
}
