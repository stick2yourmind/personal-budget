"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const user_model_1 = require("./../../models/user/user.model");
const createUserService = async ({ email, name, password }) => {
    try {
        const User = await (0, user_model_1.createUserModel)({ email, name, password });
        console.log('🚀 ~ file: user.services.ts ~ line 6 ~ createUserService ~ user', User);
        return {
            email: User.email,
            name: User.name
        };
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.code, err.details);
        const details = {
            modelErr: err?.details?.modelErr,
            serviceErr: 'Error at service while trying to create a user'
        };
        throw new customError_utils_1.default('Error while trying to create a user', httpStatus_utils_1.default.SERVER_ERROR, details);
    }
};
exports.createUserService = createUserService;
//# sourceMappingURL=user.services.js.map