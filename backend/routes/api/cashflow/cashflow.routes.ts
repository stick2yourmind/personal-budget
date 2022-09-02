import {
  createCashflowCtrlr, getCashflowByIdCtrlr, getCashflowCtrlr,
  deleteCashflowCtrlr, updateCashflowCtrlr, getBalanceCashflowCtrlr
} from '../../../controllers/cashflow.controller'
import { Router } from 'express'

const router = Router()

// Route to create a cashflow record
router.post('/', createCashflowCtrlr)

// Route to get last cashflows records
router.get('/', getCashflowCtrlr)

// Route to get a balance cashflow
router.get('/balance', getBalanceCashflowCtrlr)

// Route to get a cashflow by its id
router.get('/:id', getCashflowByIdCtrlr)

// Route to delete a cashflow by its id
router.delete('/:id', deleteCashflowCtrlr)

// Route to update a cashflow by its id
router.put('/:id', updateCashflowCtrlr)

export default router
