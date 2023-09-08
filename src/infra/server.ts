import express from 'express'
import { GenerateRouter } from './routes/generate.route'

const app = express()

app.use('/generate' ,GenerateRouter)

app.get('/', (req, res) => {
  return res.json({server: true})
})

export {
  app
}