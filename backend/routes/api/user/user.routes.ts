import { loginUser, registerUser, refreshAuth } from './../../../controllers/user.controller'
import { Router } from 'express'

const router = Router()

// login user route
router.post('/login', loginUser)

// Register user route
router.post('/register', registerUser)

// Refresh access token route
router.get('/refresh', refreshAuth)

export default router
