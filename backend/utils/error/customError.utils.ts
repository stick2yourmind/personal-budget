import { ErrorDetails } from '../../ts/utils'
/**
 *Custom error instance used to propagate error in diferents layers
 * @property {string} message - Error message
 * @property {ErrorDetails} details - Error details
 * @property {number} statusCode - HTTP error code
 * @export
 * @class CustomError
 * @extends {Error}
 */
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
