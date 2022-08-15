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

export class CustomError extends Error {
  statusCode
  details
  constructor (message: string, details:ErrorDetails, statusCode:number) {
    super(message)
    this.details = details
    this.statusCode = statusCode
    Object.setPrototypeOf(this, CustomError.prototype)
  }
}

export default CustomError
