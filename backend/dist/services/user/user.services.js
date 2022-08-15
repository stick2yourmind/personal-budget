"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const yup_1 = require("yup");
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const user_validator_1 = __importDefault(require("../../utils/validators/user.validator"));
const user_model_1 = require("./../../models/user/user.model");
const createUserService = async ({ email, name, password }) => {
    try {
        await user_validator_1.default.validate({ email, name, password }, { abortEarly: false });
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
//# sourceMappingURL=user.services.js.map