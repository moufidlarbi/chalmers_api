import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import models from './models'
import routes from './routes'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Success!')
})

app.use((req, res, next) => {
  // console.log('req',req.query.cityid)
  req.context = {
    models,
    // me: models.services[1]
  }
  next()
})

app.use('/api/v1/services', routes.service)

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
)

module.exports = app
