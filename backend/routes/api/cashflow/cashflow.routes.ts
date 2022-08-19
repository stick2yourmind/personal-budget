import {
  createCashflowCtrlr, getCashflowCtrlr,
  deleteCashflowCtrlr, updateCashflowCtrlr
} from '../../../controllers/cashflow.controller'
import { Router } from 'express'

const router = Router()

// Route to create a cashflow record
router.post('/', createCashflowCtrlr)

// Route to get a cashflow by its id
router.get('/:id', getCashflowCtrlr)

// Route to delete a cashflow by its id
router.delete('/:id', deleteCashflowCtrlr)

// Route to update a cashflow by its id
router.put('/:id', updateCashflowCtrlr)

export default router
