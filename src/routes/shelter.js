import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.shelters))
})

router.get('/:shelterId', (req, res) => {
  return res.send(req.context.models.shelters[req.params.shelterId])
})

export default router
