export interface ApiFailedResponseParams{
  errorMessage: string
  errorDetails?: string
}
export type ApiFailedResponseFn = (error:ApiFailedResponseParams, statusCode: number) =>
  {error:boolean, message:string, details?:string, statusCode: number}

// !data need to be modified

export interface RegisterUserResponse{
  email: string
  name: string
  password: string
}
export type LoginUserResponse = Pick<RegisterUserResponse, 'email' | 'password'>

export const apiSuccessResponse = (data:(RegisterUserResponse | LoginUserResponse), statusCode = 200) => {
  return {
    data,
    error: false,
    statusCode
  }
}

export const apiFailedResponse:ApiFailedResponseFn = (error, statusCode = 500) => {
  if (!error.errorDetails) {
    return {
      error: true,
      message: error.errorMessage,
      statusCode
    }
  }
  return {
    error: true,
    message: error.errorMessage,
    details: error.errorDetails,
    statusCode
  }
}
