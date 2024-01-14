import { Router } from 'express'

const router = Router()

// GET localhost:3000/index
router.get('/', function(req, res) {
  res.render('index', { title: 'Flights' })
})

export { router }
