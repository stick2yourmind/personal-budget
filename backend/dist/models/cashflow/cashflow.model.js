"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceCashflowModel = exports.delCashflowModel = exports.updCashflowModel = exports.getCashflowByIdModel = exports.getCashflowModel = exports.createCashflowModel = void 0;
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
const getCashflowModel = async ({ page, limit, userId }) => {
    try {
        if (intance_db_1.default) {
            const count = await intance_db_1.default.cashflow.count({
                where: {
                    // eslint-disable-next-line object-shorthand
                    userId: userId
                }
            });
            console.log('🚀 ~ file: cashflow.model.ts ~ line 49 ~ getCashflowModel ~ count', count);
            const maxPage = Math.ceil((count / 10)) - 1;
            const cashflow = await intance_db_1.default.cashflow.findMany({
                select: {
                    amount: true,
                    category: true,
                    details: true,
                    id: true,
                    isExpense: true,
                    updatedAt: true
                },
                skip: 10 * page,
                take: limit,
                where: {
                    userId: { equals: userId }
                }
            });
            console.log('🚀 ~ file: cashflow.model.ts ~ line 56 ~ getCashflowModel ~ Cashflow', cashflow);
            return { cashflow, maxPage };
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
const getCashflowByIdModel = async (payload) => {
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
exports.getCashflowByIdModel = getCashflowByIdModel;
const updCashflowModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const Cashflow = await intance_db_1.default.cashflow.updateMany({
                data: payload.data,
                where: {
                    AND: [{ userId: { equals: payload.userId } }, { id: { equals: payload.id } }]
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
exports.updCashflowModel = updCashflowModel;
const delCashflowModel = async (payload) => {
    try {
        if (intance_db_1.default) {
            const Cashflow = await intance_db_1.default.cashflow.deleteMany({
                where: {
                    AND: [{ userId: { equals: payload.userId } }, { id: { equals: payload.id } }]
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
exports.delCashflowModel = delCashflowModel;
const getBalanceCashflowModel = async (payload) => {
    const data = [];
    try {
        if (intance_db_1.default) {
            const Cashflow = await intance_db_1.default.cashflow.groupBy({
                _sum: {
                    amount: true
                },
                by: ['isExpense'],
                where: {
                    userId: { equals: payload.userId }
                }
            });
            if (Cashflow.length)
                for (let i = 0; i < Cashflow.length; i++)
                    data.push({
                        amount: Cashflow[i]._sum?.amount,
                        type: Cashflow[i].isExpense === true ? 'expense' : 'income'
                    });
            return data;
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
exports.getBalanceCashflowModel = getBalanceCashflowModel;
//# sourceMappingURL=cashflow.model.js.map