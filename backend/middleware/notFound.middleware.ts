import { NextFunction, Request, Response } from 'express'
import { apiFailedResponse } from '../utils/api/api.utils'
import HTTP_STATUS from '../utils/constants/httpStatus.utils'
import { warnLogger } from '../utils/logger/logger.utils'

const notFoundMiddleware = (req:Request, res: Response, next: NextFunction) => {
  const status = HTTP_STATUS.NOT_FOUND
  const message = `${req.method}: ${req.baseUrl}${req.path}: Resource not found :(`
  warnLogger.error({ errorMessage: message })
  const errorResponse = apiFailedResponse({ errorMessage: message }, status)
  return res.status(status).json(errorResponse)
}

export default notFoundMiddleware
