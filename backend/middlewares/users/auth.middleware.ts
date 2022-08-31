import { TokenExpiredError } from 'jsonwebtoken'
import CustomError from '../../utils/error/customError.utils'
import STATUS from '../../utils/constants/httpStatus.utils'
import { NextFunction, Request, Response } from 'express'
import { accessTokenVerifier } from '../../utils/validators/jwt.validator'

const verifyAuth = (req:Request, res:Response, next:NextFunction) => {
  // console.log('🚀 ~ file: auth.middleware.js ~ line 8 ~ verifyJWT ~ req.headers', req.headers)
  const authHeader = req.headers.authorization
  if (!authHeader)
    throw new CustomError('Missing access token', { detailMsg: 'Missing access token' }, STATUS.UNAUTHORIZED)
  const token = authHeader.split(' ')[1]
  try {
    accessTokenVerifier({ accessToken: token })
  } catch (err) {
    if (err instanceof TokenExpiredError)
      throw new CustomError(
        'Error while trying access to an unauthorized endpoint: ' + err.message,
        { serviceErr: JSON.stringify(err.message) }, STATUS.UNAUTHORIZED)
  }
  next()
}

export default verifyAuth
