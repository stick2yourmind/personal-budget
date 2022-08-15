"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserModel = void 0;
const intance_db_1 = __importDefault(require("../../db/intance.db"));
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const createUserModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const User = await intance_db_1.default.user.create({
                data: {
                    email: payload.email,
                    name: payload.name,
                    password: payload.password
                }
            });
            console.log('🚀 ~ file: user.model.ts ~ line 17 ~ createUserModel ~ user', User);
            return User;
        }
        else
            throw new customError_utils_1.default('Error at model while trying to create a user', httpStatus_utils_1.default.SERVER_ERROR, { modelErr: 'Prisma database instance is undefined' });
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.code, err.details);
        throw new customError_utils_1.default('Error at model while trying to create a user', httpStatus_utils_1.default.SERVER_ERROR, {
            modelErr: {
                clientVersion: err?.clientVersion,
                code: err?.code,
                errorCode: err?.errorCode,
                message: err.message,
                meta: JSON.stringify(err?.meta)
            }
        });
    }
};
exports.createUserModel = createUserModel;
//# sourceMappingURL=user.model.js.map