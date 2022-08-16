import { loginUser, registerUser } from './../../../controllers/user.controller'
import { Router } from 'express'

const router = Router()

// login user route
router.get('/login', loginUser)

// Register user route
router.post('/register', registerUser)

export default router
