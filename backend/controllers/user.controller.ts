import { NextFunction, Request, Response } from 'express'
import { apiSuccessResponse, RegisterUserResponse, LoginUserResponse } from '../utils/api/api.utils'
import STATUS from '../utils/constants/httpStatus.utils'

export const registerUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { email, name, password } = req.body
    const registerMsg: RegisterUserResponse = { email, name, password }
    const response = apiSuccessResponse(registerMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const loginUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { email, password } = req.body
    const loginMsg:LoginUserResponse = { email, password }
    const response = apiSuccessResponse(loginMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}
