import { Router } from 'express'
import fetch from 'node-fetch'

const router = Router()

router.get('/', function (req, res, next) {
  fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/dropins')
    .then(response => response.json())
    .then(json => res.send(json))
})

export default router
