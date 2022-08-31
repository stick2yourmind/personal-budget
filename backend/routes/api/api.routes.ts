import { Router } from 'express'
import userRoutes from './user/user.routes'
import cashflowRoutes from './cashflow/cashflow.routes'
import verifyAuth from '../../middlewares/users/auth.middleware'

const router = Router()

// User API routes
router.use('/user', userRoutes)

// Budget API routes
router.use('/cashflow', verifyAuth, cashflowRoutes)

export default router
