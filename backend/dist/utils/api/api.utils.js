"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiFailedResponse = exports.apiSuccessResponse = void 0;
const apiSuccessResponse = (data, statusCode = 200) => {
    return {
        data,
        error: false,
        statusCode
    };
};
exports.apiSuccessResponse = apiSuccessResponse;
const apiFailedResponse = (error, statusCode = 500) => {
    if (!error.errorDetails)
        return {
            error: true,
            message: error.errorMessage,
            statusCode
        };
    return {
        details: error.errorDetails,
        error: true,
        message: error.errorMessage,
        statusCode
    };
};
exports.apiFailedResponse = apiFailedResponse;
//# sourceMappingURL=api.utils.js.map