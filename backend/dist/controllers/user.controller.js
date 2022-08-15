"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const api_utils_1 = require("../utils/api/api.utils");
const httpStatus_utils_1 = __importDefault(require("../utils/constants/httpStatus.utils"));
const user_services_1 = require("../services/user/user.services");
const registerUser = async (req, res, next) => {
    try {
        const { email, name, password } = req.body;
        const registerMsg = await (0, user_services_1.createUserService)({ email, name, password });
        const response = (0, api_utils_1.apiSuccessResponse)(registerMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res, next) => {
    try {
        const { password, email } = req.body;
        const loginMsg = { email, name: password };
        const response = (0, api_utils_1.apiSuccessResponse)(loginMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.loginUser = loginUser;
//# sourceMappingURL=user.controller.js.map