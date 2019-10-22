import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.meals))
})

router.get('/:mealId', (req, res) => {
  return res.send(req.context.models.meals[req.params.mealId])
})

export default router
