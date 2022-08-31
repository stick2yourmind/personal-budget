import { apiSuccessResponse } from '../utils/api/api.utils'
import { NextFunction, Request, Response } from 'express'
import STATUS from '../utils/constants/httpStatus.utils'
import {
  createCashflowService, getCashflowService,
  deleteCashflowService, updateCashflowService
} from '../services/cashflow/cashflow.services'

export const createCashflowCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const accessToken = authHeader?.split(' ')[1]
    const { amount, category, details, isExpense, userId } = req.body
    const createCashflowMsg = await createCashflowService({
      accessToken,
      amount,
      category,
      details,
      isExpense,
      userId
    })
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
    const getCashflowMsg = await getCashflowService({ accessToken, id: Number(id), offset })
    const response = apiSuccessResponse(getCashflowMsg, STATUS.OK)
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
    const deleteCashflowMsg = await deleteCashflowService({ accessToken, id: Number(id) })
    const response = apiSuccessResponse(deleteCashflowMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updateCashflowCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const accessToken = authHeader?.split(' ')[1]
    const { id } = req.params
    const { amount, category, details } = req.body
    const updateCashflowMsg = await
    updateCashflowService({ accessToken, amount, category, details, id: Number(id) })
    const response = apiSuccessResponse(updateCashflowMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}
