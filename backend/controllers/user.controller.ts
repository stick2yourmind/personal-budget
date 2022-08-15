import { apiSuccessResponse } from '../utils/api/api.utils'
import { NextFunction, Request, Response } from 'express'
import STATUS from '../utils/constants/httpStatus.utils'
import { createUserService } from '../services/user/user.services'
import { LoginUserResponse } from '../ts/utils'

export const registerUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { email, name, password } = req.body
    const registerMsg = await createUserService({ email, name, password })
    const response = apiSuccessResponse(registerMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const loginUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { password, email } = req.body
    const loginMsg:LoginUserResponse = { email, name: password }
    const response = apiSuccessResponse(loginMsg, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}
