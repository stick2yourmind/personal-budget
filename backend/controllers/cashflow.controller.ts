import { apiSuccessResponse } from '../utils/api/api.utils'
import { NextFunction, Request, Response } from 'express'
import STATUS from '../utils/constants/httpStatus.utils'
import {
  createCashflowService, getCashflowByIdService,
  deleteCashflowService, updateCashflowService,
  getBalanceCashflowService, getCashflowService
} from '../services/cashflow/cashflow.services'

export const createCashflowCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const accessToken = authHeader?.split(' ')[1]
    const { amount, category, details, isExpense } = req.body
    const createCashflowMsg = await createCashflowService({
      accessToken,
      amount,
      category,
      details,
      isExpense
    })
    const response = apiSuccessResponse(createCashflowMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getCashflowCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const page = Number.isNaN(Number(req.query?.page)) ? 0 : Number(req.query?.page)
    console.log('🚀 ~ file: cashflow.controller.ts ~ line 32 ~ getCashflowCtrlr ~ page', page)
    const limit = Number.isNaN(Number(req.query?.limit)) ? 10 : Number(req.query?.limit)
    console.log('🚀 ~ file: cashflow.controller.ts ~ line 33 ~ getCashflowCtrlr ~ limit', limit)
    const authHeader = req.headers.authorization
    const accessToken = authHeader?.split(' ')[1] ?? ''
    const getCashflowMsg = await getCashflowService({ accessToken, limit, page })
    const response = apiSuccessResponse(getCashflowMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getCashflowByIdCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const accessToken = authHeader?.split(' ')[1]
    const { id } = req.params
    const { offset } = req.query
    const getCashflowMsg = await getCashflowByIdService({ accessToken, id: Number(id), offset })
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

export const getBalanceCashflowCtrlr = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const accessToken = authHeader?.split(' ')[1]
    const getBalanceCashflowMsg = await
    getBalanceCashflowService({ accessToken })
    const response = apiSuccessResponse(getBalanceCashflowMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}
