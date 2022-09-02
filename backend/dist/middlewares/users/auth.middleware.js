"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const jwt_validator_1 = require("../../utils/validators/jwt.validator");
const verifyAuth = (req, res, next) => {
    // console.log('🚀 ~ file: auth.middleware.js ~ line 8 ~ verifyJWT ~ req.headers', req.headers)
    const authHeader = req.headers.authorization;
    if (!authHeader)
        throw new customError_utils_1.default('Missing access token', { detailMsg: 'Missing access token' }, httpStatus_utils_1.default.UNAUTHORIZED);
    const token = authHeader.split(' ')[1];
    try {
        (0, jwt_validator_1.accessTokenVerifier)({ accessToken: token });
    }
    catch (err) {
        if (err instanceof jsonwebtoken_1.TokenExpiredError)
            throw new customError_utils_1.default('Error while trying access to an unauthorized endpoint: ' + err.message, { serviceErr: JSON.stringify(err.message) }, httpStatus_utils_1.default.UNAUTHORIZED);
    }
    next();
};
exports.default = verifyAuth;
//# sourceMappingURL=auth.middleware.js.map