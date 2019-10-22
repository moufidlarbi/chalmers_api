import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.clothing))
})

router.get('/:clothingId', (req, res) => {
  return res.send(req.context.models.clothing[req.params.clothingId])
})

export default router
