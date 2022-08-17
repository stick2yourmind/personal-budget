import { CashflowDataResponse } from './../../ts/controllers.d'
import { LoginUserResponse, ApiFailedResponseFn } from '../../ts/utils'

export const apiSuccessResponse = (data:(LoginUserResponse | CashflowDataResponse), statusCode = 200) => {
  return {
    data,
    error: false,
    statusCode
  }
}

export const apiFailedResponse:ApiFailedResponseFn = (error, statusCode = 500) => {
  if (!error.errorDetails)
    return {
      error: true,
      message: error.errorMessage,
      statusCode
    }

  return {
    details: error.errorDetails,
    error: true,
    message: error.errorMessage,
    statusCode
  }
}
