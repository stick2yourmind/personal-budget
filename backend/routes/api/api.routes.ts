import { Router } from 'express'
import userRoutes from './user/user.routes'

const router = Router()

// User API routes
router.use('/user', userRoutes)

// Budget API routes
// router.use('/budget', budgetRoutes)

export default router
