import { apiSuccessResponse } from '../utils/api/api.utils'
import { NextFunction, Request, Response } from 'express'
import STATUS from '../utils/constants/httpStatus.utils'
import {
  createCashflowService, getCashflowService,
  deleteCashflowService
} from '../services/cashflow/cashflow.services'

export const createCashflowCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { amount, category, details, isExpense, userId } = req.body
    const createCashflowMsg = await createCashflowService({ amount, category, details, isExpense, userId })
    const response = apiSuccessResponse(createCashflowMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getCashflowCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const accessToken = authHeader?.split(' ')[1]
    const { id } = req.params
    const { offset } = req.query
    const createCashflowMsg = await getCashflowService({ accessToken, id, offset })
    const response = apiSuccessResponse(createCashflowMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteCashflowCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const accessToken = authHeader?.split(' ')[1]
    const { id } = req.params
    const createCashflowMsg = await deleteCashflowService({ accessToken, id })
    const response = apiSuccessResponse(createCashflowMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}
