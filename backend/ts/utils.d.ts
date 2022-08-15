/* -------------------------------------------------------------------------- */
/*                                 ERROR UTILS                                */
/* -------------------------------------------------------------------------- */

export interface PrismaErr{
  clientVersion?: string
  code?: string
  errorCode?: string
  message: string
  meta?: string
}
export interface ErrorDetails{
  dbErr?: string,
  detailMsg?: string,
  modelErr?: PrismaErr | string,
  serviceErr?: string
}

/* -------------------------------------------------------------------------- */
/*                                  API UTILS                                 */
/* -------------------------------------------------------------------------- */
export interface ApiFailedResponseParams{
  errorDetails?: ErrorDetails
  errorMessage: string
}
export type ApiFailedResponseFn = (error:ApiFailedResponseParams, statusCode: number) =>
  {details?:ErrorDetails, error:boolean, message:string, statusCode: number}

export interface RegisterUserResponse{
  email: string
  name: string
  password: string
}
export type LoginUserResponse = Pick<RegisterUserResponse, 'email' | 'name'>
