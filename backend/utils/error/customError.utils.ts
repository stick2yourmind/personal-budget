class CustomError {
  code: number
  details: string
  name: string
  message: string
  constructor (message: string, status: number, details: string) {
    this.code = status
    this.details = details
    this.name = 'CustomError'
    this.message = message
    // set immutable object properties
    Object.defineProperty(this, 'message', {
      get () {
        return this.error
      }
    })
    Object.defineProperty(this, 'name', {
      get () {
        return this.name
      }
    })
    Object.defineProperty(this, 'code', {
      get () {
        return this.code
      }
    })
    Object.defineProperty(this, 'details', {
      get () {
        return this.details
      }
    })
    // capture where error occured
    Error.captureStackTrace(this, CustomError)
    return this
  }
}

export interface ICustomError {
  new (name: string, status: number, details: string): CustomError
}

export default CustomError
