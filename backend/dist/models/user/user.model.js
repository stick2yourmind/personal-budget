"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserByEmailModel = exports.getUserByEmailModel = exports.createUserModel = void 0;
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
            return User;
        }
        else
            throw new customError_utils_1.default('Error at model while trying to create a user', { modelErr: 'Prisma database instance is undefined' }, httpStatus_utils_1.default.SERVER_ERROR);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.details, err.statusCode);
        const errorCode = err?.code === 'P2002' ? httpStatus_utils_1.default.CONFLICT : httpStatus_utils_1.default.SERVER_ERROR;
        throw new customError_utils_1.default('Error while trying to create a user', {
            modelErr: {
                clientVersion: err?.clientVersion,
                code: err?.code,
                message: err.message,
                meta: err?.meta
            }
        }, errorCode);
    }
};
exports.createUserModel = createUserModel;
const getUserByEmailModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const User = await intance_db_1.default.user.findUnique({
                where: {
                    email: payload.email
                }
            });
            return User;
        }
        else
            throw new customError_utils_1.default('Error at model while trying to login an user', { modelErr: 'Prisma database instance is undefined' }, httpStatus_utils_1.default.SERVER_ERROR);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.details, err.statusCode);
        const errorCode = err?.code === 'P2002' ? httpStatus_utils_1.default.CONFLICT : httpStatus_utils_1.default.SERVER_ERROR;
        throw new customError_utils_1.default('Error while trying to login an user', {
            modelErr: {
                clientVersion: err?.clientVersion,
                code: err?.code,
                message: err.message,
                meta: err?.meta
            }
        }, errorCode);
    }
};
exports.getUserByEmailModel = getUserByEmailModel;
const updateUserByEmailModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const User = await intance_db_1.default.user.update({
                data: {
                    refreshToken: payload.refreshToken
                },
                where: {
                    email: payload.email
                }
            });
            return User;
        }
        else
            throw new customError_utils_1.default('Error at model while trying to login an user', { modelErr: 'Prisma database instance is undefined' }, httpStatus_utils_1.default.SERVER_ERROR);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.details, err.statusCode);
        const errorCode = err?.code === 'P2002' ? httpStatus_utils_1.default.CONFLICT : httpStatus_utils_1.default.SERVER_ERROR;
        throw new customError_utils_1.default('Error while trying to login an user', {
            modelErr: {
                clientVersion: err?.clientVersion,
                code: err?.code,
                message: err.message,
                meta: err?.meta
            }
        }, errorCode);
    }
};
exports.updateUserByEmailModel = updateUserByEmailModel;
//# sourceMappingURL=user.model.js.map