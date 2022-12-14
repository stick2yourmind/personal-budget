import { Router } from 'express'
import errorMiddleware from '../middlewares/errors/error.middleware'
import notFoundMiddleware from '../middlewares/errors/notFound.middleware'
import apiRoute from './api/api.routes'

const router = Router()

// API routes
router.use('/api', apiRoute)

// Not found middleware
router.use(notFoundMiddleware)

// Error middleware
router.use(errorMiddleware)

export default router
