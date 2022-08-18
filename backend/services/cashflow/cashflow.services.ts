import { ValidationError } from 'yup'
import STATUS from '../../utils/constants/httpStatus.utils'
import CustomError from '../../utils/error/customError.utils'
import { createCashflowModel, getCashflowModel, delCashflowModel } from '../../models/cashflow/cashflow.model'
import { ErrorDetails } from '../../ts/utils'
import {
  CreateCashflowValidator, getCashflowValidator, delCashflowValidator
} from '../../utils/validators/cashflow.validator'
import { CreateCashflowService, GetCashflowService, DelCashflowService } from '../../ts/services'
import { accessTokenVerifier } from '../../utils/validators/jwt.validator'

export const createCashflowService:CreateCashflowService = async (payload) => {
  try {
    await CreateCashflowValidator.validate(payload, { abortEarly: false })
    await createCashflowModel({
      amount: Number(payload.amount),
      category: payload.category,
      details: payload.details,
      isExpense: payload.isExpense,
      userId: Number(payload.userId)
    })
    return {
      amount: Number(payload.amount),
      category: payload.category,
      details: payload.details,
      isExpense: payload.isExpense,
      userId: Number(payload.userId)
    }
  } catch (err) {
    if (err instanceof CustomError) {
      const details:ErrorDetails = {
        modelErr: (err as CustomError)?.details?.modelErr,
        serviceErr: 'Error at service while trying to create a user'
      }
      throw new CustomError(err.message, details, err.statusCode)
    }
    if (err instanceof ValidationError)
      throw new CustomError(
        'Error while trying to create a user: ' + err.errors,
        { serviceErr: JSON.stringify(err.errors) }, STATUS.UNPROCESSABLE_ENTITY)

    throw new CustomError('Error while trying to create a user',
      { detailMsg: (err as Error).message }, STATUS.SERVER_ERROR)
  }
}

export const getCashflowService:GetCashflowService = async (payload) => {
  try {
    await getCashflowValidator.validate(payload, { abortEarly: false })
    const user = accessTokenVerifier({ accessToken: payload.accessToken })
    const cashflow = await getCashflowModel({
      id: Number(payload.id),
      offset: Number(payload.offset) || 0,
      userId: user.id
    })
    if (cashflow.length)
      return {
        amount: cashflow[0].amount,
        category: cashflow[0].category,
        details: cashflow[0].details,
        isExpense: cashflow[0].isExpense
      }
    else throw new CustomError('No cashflow records could be found',
      { detailMsg: 'No cashflow records could be found' }, STATUS.NOT_FOUND)
  } catch (err) {
    if (err instanceof CustomError) {
      const details:ErrorDetails = {
        modelErr: (err as CustomError)?.details?.modelErr,
        serviceErr: 'Error at service while trying to get a cashflow record'
      }
      throw new CustomError(err.message, details, err.statusCode)
    }
    if (err instanceof ValidationError)
      throw new CustomError(
        'Error while trying to get a cashflow record: ' + err.errors,
        { serviceErr: JSON.stringify(err.errors) }, STATUS.UNPROCESSABLE_ENTITY)

    throw new CustomError('Error while trying to get a cashflow record',
      { detailMsg: (err as Error).message }, STATUS.SERVER_ERROR)
  }
}

export const deleteCashflowService:DelCashflowService = async (payload) => {
  try {
    await delCashflowValidator.validate(payload, { abortEarly: false })
    const user = accessTokenVerifier({ accessToken: payload.accessToken })
    const cashflow = await delCashflowModel({
      id: Number(payload.id),
      userId: user.id
    })
    if (cashflow.count)
      return {
        deleted: true
      }
    else throw new CustomError('No cashflow records could be found',
      { detailMsg: 'No cashflow records could be found' }, STATUS.NOT_FOUND)
  } catch (err) {
    if (err instanceof CustomError) {
      const details:ErrorDetails = {
        modelErr: (err as CustomError)?.details?.modelErr,
        serviceErr: 'Error at service while trying to delete a cashflow record'
      }
      throw new CustomError(err.message, details, err.statusCode)
    }
    if (err instanceof ValidationError)
      throw new CustomError(
        'Error while trying to delete a cashflow record: ' + err.errors,
        { serviceErr: JSON.stringify(err.errors) }, STATUS.UNPROCESSABLE_ENTITY)

    throw new CustomError('Error while trying to delete a cashflow record',
      { detailMsg: (err as Error).message }, STATUS.SERVER_ERROR)
  }
}
