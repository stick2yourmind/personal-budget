import { ErrorDetails } from './../../utils/error/customError.utils'

import { NextFunction, Request, Response } from 'express'
import { apiFailedResponse } from '../../utils/api/api.utils'
import { errorLogger } from '../../utils/logger/logger.utils'
import CustomError from '../../utils/error/customError.utils'
import SERVER_CFG from '../../config/server.config'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (error: CustomError, req:Request, res:Response, next:NextFunction) => {
  // console.log('errorMiddleware')
  // console.log(error)
  const status = error.statusCode || 500
  errorLogger.error(error)
  const errorResponse = SERVER_CFG.MODE === 'development'
    ? apiFailedResponse({ errorMessage: error.message }, status)
    : apiFailedResponse({
      errorDetails: ({ ...error.details } as ErrorDetails),
      errorMessage: error.message
    }, status)
  return res.status(status).json(errorResponse)
}

export default errorMiddleware
