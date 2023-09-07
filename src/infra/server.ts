import express from 'express'
import { GenerateRouter } from './routes/generate.route'

const app = express()

app.use('/generate' ,GenerateRouter)

export {
  app
}