"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
/**
 *Custom error instance used to propagate error in diferents layers
 * @property {string} message - Error message
 * @property {ErrorDetails} details - Error details
 * @property {number} statusCode - HTTP error code
 * @export
 * @class CustomError
 * @extends {Error}
 */
class CustomError extends Error {
    statusCode;
    details;
    constructor(message, details, statusCode) {
        super(message);
        this.details = details;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
exports.default = CustomError;
//# sourceMappingURL=customError.utils.js.map