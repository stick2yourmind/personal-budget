import { Router } from 'express'
import userRoutes from './user/user.routes'
import cashflowRoutes from './cashflow/cashflow.routes'

const router = Router()

// User API routes
router.use('/user', userRoutes)

// Budget API routes
router.use('/cashflow', cashflowRoutes)

export default router
