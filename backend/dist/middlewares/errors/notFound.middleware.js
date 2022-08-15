"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_utils_1 = require("../../utils/api/api.utils");
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const logger_utils_1 = require("../../utils/logger/logger.utils");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFoundMiddleware = (req, res, next) => {
    const status = httpStatus_utils_1.default.NOT_FOUND;
    const message = `${req.method}: ${req.baseUrl}${req.path}: Resource not found :(`;
    logger_utils_1.warnLogger.error({ errorMessage: message });
    const errorResponse = (0, api_utils_1.apiFailedResponse)({ errorMessage: message }, status);
    return res.status(status).json(errorResponse);
};
exports.default = notFoundMiddleware;
//# sourceMappingURL=notFound.middleware.js.map