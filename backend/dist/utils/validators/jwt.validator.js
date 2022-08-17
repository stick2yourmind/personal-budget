"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessTokenVerifier = void 0;
const customError_utils_1 = require("./../error/customError.utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_config_1 = __importDefault(require("../../config/jwt.config"));
const httpStatus_utils_1 = __importDefault(require("../constants/httpStatus.utils"));
const accessTokenVerifier = ({ accessToken }) => {
    if (typeof accessToken === 'string' && typeof jwt_config_1.default.ACCESS_TOKEN_SECRET === 'string') {
        const decoded = jsonwebtoken_1.default.verify(accessToken, jwt_config_1.default.ACCESS_TOKEN_SECRET);
        return { id: Number(decoded.id) };
    }
    throw new customError_utils_1.CustomError(jwt_config_1.default.ACCESS_TOKEN_SECRET ? 'Missing accessToken' : 'Error while verifiying access token', { detailMsg: 'Missing access token or access token secret' }, jwt_config_1.default.ACCESS_TOKEN_SECRET ? httpStatus_utils_1.default.UNAUTHORIZED : httpStatus_utils_1.default.SERVER_ERROR);
};
exports.accessTokenVerifier = accessTokenVerifier;
//# sourceMappingURL=jwt.validator.js.map