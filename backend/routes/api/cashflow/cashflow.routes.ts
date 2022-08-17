import { createCashflowCtrlr, getCashflowCtrlr } from '../../../controllers/cashflow.controller'
import { Router } from 'express'

const router = Router()

// Route to create a cashflow record
router.post('/', createCashflowCtrlr)

router.get('/:id', getCashflowCtrlr)

export default router
