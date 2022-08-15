import { ErrorDetails } from '../error/customError.utils'

export interface ApiFailedResponseParams{
  errorDetails?: ErrorDetails
  errorMessage: string
}
export type ApiFailedResponseFn = (error:ApiFailedResponseParams, statusCode: number) =>
  {details?:ErrorDetails, error:boolean, message:string, statusCode: number}

// !data need to be modified

export interface RegisterUserResponse{
  email: string
  name: string
  password: string
}
export type LoginUserResponse = Pick<RegisterUserResponse, 'email' | 'name'>

export const apiSuccessResponse = (data:(LoginUserResponse), statusCode = 200) => {
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
