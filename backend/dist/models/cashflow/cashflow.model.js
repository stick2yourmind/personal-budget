"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCashflowModel = exports.updateCashflowModel = exports.getCashflowModel = exports.createCashflowModel = void 0;
const intance_db_1 = __importDefault(require("../../db/intance.db"));
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const createCashflowModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const Cashflow = await intance_db_1.default.cashflow.create({
                data: {
                    amount: payload.amount,
                    category: payload.category,
                    details: payload.details,
                    isExpense: payload.isExpense,
                    userId: payload.userId
                }
            });
            return Cashflow;
        }
        else
            throw new customError_utils_1.default('Error at model while trying to create a cashflow record', { modelErr: 'Prisma database instance is undefined' }, httpStatus_utils_1.default.SERVER_ERROR);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.details, err.statusCode);
        const errorCode = err?.code === 'P2002' ? httpStatus_utils_1.default.CONFLICT : httpStatus_utils_1.default.SERVER_ERROR;
        throw new customError_utils_1.default('Error while trying to create a cashflow record', {
            modelErr: {
                clientVersion: err?.clientVersion,
                code: err?.code,
                message: err.message,
                meta: err?.meta
            }
        }, errorCode);
    }
};
exports.createCashflowModel = createCashflowModel;
const getCashflowModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const Cashflow = await intance_db_1.default.cashflow.findMany({
                // include: {
                //   user: true
                // },
                // skip: payload.offset,
                // take: 11,
                where: {
                    // AND: [
                    //   {
                    //     userId: {
                    //       equals: payload.userId
                    //     }
                    //   },
                    //   {
                    //     id: {
                    //       equals: payload.id
                    //     }
                    //   }
                    // ]
                    AND: [{ userId: { equals: payload.userId } }, { id: { equals: payload.id } }]
                }
            });
            // console.log('🚀 ~ file: cashflow.model.ts ~ line 56 ~ getCashflowModel ~ Cashflow', Cashflow)
            return Cashflow;
        }
        else
            throw new customError_utils_1.default('Error at model while trying to get a cashflow record', { modelErr: 'Prisma database instance is undefined' }, httpStatus_utils_1.default.SERVER_ERROR);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.details, err.statusCode);
        const errorCode = err?.code === 'P2002' ? httpStatus_utils_1.default.CONFLICT : httpStatus_utils_1.default.SERVER_ERROR;
        throw new customError_utils_1.default('Error while trying to get a cashflow record', {
            modelErr: {
                clientVersion: err?.clientVersion,
                code: err?.code,
                message: err.message,
                meta: err?.meta
            }
        }, errorCode);
    }
};
exports.getCashflowModel = getCashflowModel;
const updateCashflowModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const Cashflow = await intance_db_1.default.cashflow.update({
                data: {
                    amount: payload.amount,
                    category: payload.category,
                    details: payload.details
                },
                where: {
                    id: payload.id
                }
            });
            return Cashflow;
        }
        else
            throw new customError_utils_1.default('Error at model while trying to update a cashflow record', { modelErr: 'Prisma database instance is undefined' }, httpStatus_utils_1.default.SERVER_ERROR);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.details, err.statusCode);
        const errorCode = err?.code === 'P2002' ? httpStatus_utils_1.default.CONFLICT : httpStatus_utils_1.default.SERVER_ERROR;
        throw new customError_utils_1.default('Error while trying to update a cashflow record', {
            modelErr: {
                clientVersion: err?.clientVersion,
                code: err?.code,
                message: err.message,
                meta: err?.meta
            }
        }, errorCode);
    }
};
exports.updateCashflowModel = updateCashflowModel;
const deleteCashflowModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const Cashflow = await intance_db_1.default.cashflow.delete({
                where: {
                    id: payload.id
                }
            });
            return Cashflow;
        }
        else
            throw new customError_utils_1.default('Error at model while trying to delete a cashflow record', { modelErr: 'Prisma database instance is undefined' }, httpStatus_utils_1.default.SERVER_ERROR);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default)
            throw new customError_utils_1.default(err.message, err.details, err.statusCode);
        const errorCode = err?.code === 'P2002' ? httpStatus_utils_1.default.CONFLICT : httpStatus_utils_1.default.SERVER_ERROR;
        throw new customError_utils_1.default('Error while trying to delete a cashflow record', {
            modelErr: {
                clientVersion: err?.clientVersion,
                code: err?.code,
                message: err.message,
                meta: err?.meta
            }
        }, errorCode);
    }
};
exports.deleteCashflowModel = deleteCashflowModel;
//# sourceMappingURL=cashflow.model.js.map