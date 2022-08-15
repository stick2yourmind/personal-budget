"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError {
    code;
    details;
    name;
    message;
    constructor(message, status, details) {
        this.code = status;
        this.details = details;
        this.name = 'CustomError';
        this.message = message;
        // set immutable object properties
        Object.defineProperty(this, 'message', {
            get() {
                return this.error;
            }
        });
        Object.defineProperty(this, 'name', {
            get() {
                return this.name;
            }
        });
        Object.defineProperty(this, 'code', {
            get() {
                return this.code;
            }
        });
        Object.defineProperty(this, 'details', {
            get() {
                return this.details;
            }
        });
        // capture where error occured
        Error.captureStackTrace(this, CustomError);
        return this;
    }
}
exports.default = CustomError;
//# sourceMappingURL=customError.utils.js.map