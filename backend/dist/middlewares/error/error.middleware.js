"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_utils_1 = require("../../utils/api/api.utils");
const logger_utils_1 = require("../../utils/logger/logger.utils");
const server_config_1 = __importDefault(require("../../config/server.config"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (error, req, res, next) => {
    console.log('errorMiddleware');
    console.log(error);
    const status = error.code || 500;
    logger_utils_1.errorLogger.error(error);
    const errorResponse = server_config_1.default.MODE === 'development'
        ? (0, api_utils_1.apiFailedResponse)({ errorMessage: error.message }, status)
        : (0, api_utils_1.apiFailedResponse)({ errorDetails: { ...error.details }, errorMessage: 'error.message' }, status);
    return res.status(status).json(errorResponse);
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map