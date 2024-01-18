import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

// GET localhost:3000/meals/new  - adds a meal
router.get('/new', mealsCtrl.new)

// POST localhost:3000/meals - goes to page to create
router.post('/', mealsCtrl.create)


export { router }