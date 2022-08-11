
import { NextFunction, Request, Response } from 'express'
import { apiFailedResponse } from '../utils/api/api.utils'
import { errorLogger } from '../utils/logger/logger.utils'
import { ICustomError } from '../utils/error/customError.utils'
import SERVER_CFG from '../config/server.config'

const errorMiddleware = (error: InstanceType<ICustomError>, req:Request, res:Response, next:NextFunction) => {
  console.log('errorMiddleware')
  console.log(error)
  const status = error.code || 500
  errorLogger.error(error)
  const errorResponse = SERVER_CFG.MODE === 'development'
    ? apiFailedResponse({ errorMessage: error.message }, status)
    : apiFailedResponse({ errorMessage: error.message, errorDetails: error.details }, status)
  return res.status(status).json(errorResponse)
}

export default errorMiddleware
