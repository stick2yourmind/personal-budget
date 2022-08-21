import { apiSuccessResponse } from '../utils/api/api.utils'
import { NextFunction, Request, Response } from 'express'
import STATUS from '../utils/constants/httpStatus.utils'
import { createUserService, loginUserService } from '../services/user/user.services'
import JWT_CFG from '../config/jwt.config'
import SERVER_CFG from '../config/server.config'

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
    const { refreshToken, ...data } = await loginUserService({ email, password })
    SERVER_CFG.MODE === 'production'
      ? res.cookie('refreshToken', refreshToken,
        {
          httpOnly: true,
          maxAge: Number(JWT_CFG.EXPIRES_REFRESH_TOKEN_MILLISECONDS),
          sameSite: 'none',
          secure: true
        })
      : res.cookie('refreshToken', refreshToken,
        {
          httpOnly: true,
          maxAge: Number(JWT_CFG.EXPIRES_REFRESH_TOKEN_MILLISECONDS),
          sameSite: 'none'
        })

    const response = apiSuccessResponse(data, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}
