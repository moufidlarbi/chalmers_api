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
  req.context = {
    models,
    // me: models.shelters[1]
  }
  next()
})

app.use('/shelters', routes.shelter)

app.use('/meals', routes.meal)

app.use('/dropins', routes.dropin)

app.use('/clothing', routes.clothing)


app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
)
