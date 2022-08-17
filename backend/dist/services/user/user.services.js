"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.createUserService = void 0;
const yup_1 = require("yup");
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const user_model_1 = require("../../models/user/user.model");
const user_validator_1 = require("../../utils/validators/user.validator");
const createUserService = async ({ email, name, password }) => {
    try {
        await user_validator_1.RegisterValidator.validate({ email, name, password }, { abortEarly: false });
        const User = await (0, user_model_1.createUserModel)({ email, name, password });
        return {
            email: User.email,
            name: User.name
        };
    }
    catch (err) {
        if (err instanceof customError_utils_1.default) {
            const details = {
                modelErr: err?.details?.modelErr,
                serviceErr: 'Error at service while trying to create a user'
            };
            throw new customError_utils_1.default(err.message, details, err.statusCode);
        }
        if (err instanceof yup_1.ValidationError)
            throw new customError_utils_1.default('Error while trying to create a user: ' + err.errors, { serviceErr: JSON.stringify(err.errors) }, httpStatus_utils_1.default.UNPROCESSABLE_ENTITY);
        throw new customError_utils_1.default('Error while trying to create a user', { detailMsg: err.message }, httpStatus_utils_1.default.SERVER_ERROR);
    }
};
exports.createUserService = createUserService;
const loginUserService = async ({ email, password }) => {
    try {
        await user_validator_1.LoginValidator.validate({ email, password }, { abortEarly: false });
        const User = await (0, user_model_1.getUserByEmailModel)({ email });
        const isValidLogin = (0, user_validator_1.isValidPassword)(password, User?.password);
        if (User !== null && isValidLogin) {
            const { accessToken, refreshToken } = (0, user_validator_1.jwtLoginSign)({ userId: User.id });
            await (0, user_model_1.updateUserByEmailModel)({ email, refreshToken });
            return {
                accessToken,
                email: User.email,
                name: User.name,
                refreshToken,
                userId: User.id
            };
        }
        else
            throw new customError_utils_1.default('Error while trying to login an user: email or password are invalid', { serviceErr: 'Error while trying to login an user: user can not be found' }, httpStatus_utils_1.default.UNAUTHORIZED);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default) {
            const details = {
                modelErr: err?.details?.modelErr,
                serviceErr: 'Error at service while trying to login an user'
            };
            throw new customError_utils_1.default(err.message, details, err.statusCode);
        }
        if (err instanceof yup_1.ValidationError)
            throw new customError_utils_1.default('Error while trying to login an user: ' + err.errors, { serviceErr: JSON.stringify(err.errors) }, httpStatus_utils_1.default.UNPROCESSABLE_ENTITY);
        throw new customError_utils_1.default('Error while trying to login an user', { detailMsg: err.message }, httpStatus_utils_1.default.SERVER_ERROR);
    }
};
exports.loginUserService = loginUserService;
//# sourceMappingURL=user.services.js.map