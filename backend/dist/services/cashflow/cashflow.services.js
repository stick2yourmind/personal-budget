"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceCashflowService = exports.updateCashflowService = exports.deleteCashflowService = exports.getCashflowByIdService = exports.getCashflowService = exports.createCashflowService = void 0;
const yup_1 = require("yup");
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const cashflow_model_1 = require("../../models/cashflow/cashflow.model");
const cashflow_validator_1 = require("../../utils/validators/cashflow.validator");
const jwt_validator_1 = require("../../utils/validators/jwt.validator");
const createCashflowService = async (payload) => {
    try {
        const user = (0, jwt_validator_1.accessTokenVerifier)({ accessToken: payload.accessToken ? payload.accessToken : null });
        await cashflow_validator_1.CreateCashflowValidator.validate({ ...payload, userId: Number(user.id) }, { abortEarly: false });
        const cashflow = await (0, cashflow_model_1.createCashflowModel)({
            amount: Number(payload.amount),
            category: payload.category,
            details: payload.details,
            isExpense: payload.isExpense,
            userId: Number(user.id)
        });
        return {
            amount: Number(payload.amount),
            category: payload.category,
            details: payload.details,
            id: cashflow.id,
            isExpense: payload.isExpense,
            userId: Number(user.id)
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
exports.createCashflowService = createCashflowService;
const getCashflowService = async (payload) => {
    try {
        const { accessToken } = payload;
        const page = Number(payload.page);
        const limit = Number(payload.limit);
        const user = (0, jwt_validator_1.accessTokenVerifier)({ accessToken });
        await cashflow_validator_1.getCashflowValidator.validate({ limit, page }, { abortEarly: false });
        const { cashflow, maxPage } = await (0, cashflow_model_1.getCashflowModel)({
            limit,
            page,
            userId: user.id
        });
        if (cashflow.length)
            return { maxPage, records: cashflow };
        else
            throw new customError_utils_1.default('No cashflow records could be found', { detailMsg: 'No cashflow records could be found' }, httpStatus_utils_1.default.NOT_FOUND);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default) {
            const details = {
                modelErr: err?.details?.modelErr,
                serviceErr: 'Error at service while trying to get a cashflow record'
            };
            throw new customError_utils_1.default(err.message, details, err.statusCode);
        }
        if (err instanceof yup_1.ValidationError)
            throw new customError_utils_1.default('Error while trying to get a cashflow record: ' + err.errors, { serviceErr: JSON.stringify(err.errors) }, httpStatus_utils_1.default.UNPROCESSABLE_ENTITY);
        throw new customError_utils_1.default('Error while trying to get a cashflow record', { detailMsg: err.message }, httpStatus_utils_1.default.SERVER_ERROR);
    }
};
exports.getCashflowService = getCashflowService;
const getCashflowByIdService = async (payload) => {
    try {
        await cashflow_validator_1.getCashflowByIdValidator.validate(payload, { abortEarly: false });
        const user = (0, jwt_validator_1.accessTokenVerifier)({ accessToken: payload.accessToken ? payload.accessToken : null });
        const cashflow = await (0, cashflow_model_1.getCashflowByIdModel)({
            id: Number(payload.id),
            offset: Number(payload.offset) || 0,
            userId: user.id
        });
        if (cashflow.length)
            return {
                amount: cashflow[0].amount,
                category: cashflow[0].category,
                details: cashflow[0].details,
                id: Number(payload.id),
                isExpense: cashflow[0].isExpense
            };
        else
            throw new customError_utils_1.default('No cashflow records could be found', { detailMsg: 'No cashflow records could be found' }, httpStatus_utils_1.default.NOT_FOUND);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default) {
            const details = {
                modelErr: err?.details?.modelErr,
                serviceErr: 'Error at service while trying to get a cashflow record'
            };
            throw new customError_utils_1.default(err.message, details, err.statusCode);
        }
        if (err instanceof yup_1.ValidationError)
            throw new customError_utils_1.default('Error while trying to get a cashflow record: ' + err.errors, { serviceErr: JSON.stringify(err.errors) }, httpStatus_utils_1.default.UNPROCESSABLE_ENTITY);
        throw new customError_utils_1.default('Error while trying to get a cashflow record', { detailMsg: err.message }, httpStatus_utils_1.default.SERVER_ERROR);
    }
};
exports.getCashflowByIdService = getCashflowByIdService;
const deleteCashflowService = async (payload) => {
    try {
        await cashflow_validator_1.delCashflowValidator.validate(payload, { abortEarly: false });
        const user = (0, jwt_validator_1.accessTokenVerifier)({ accessToken: payload.accessToken ? payload.accessToken : null });
        const cashflow = await (0, cashflow_model_1.delCashflowModel)({
            id: Number(payload.id),
            userId: user.id
        });
        if (cashflow.count)
            return {
                deleted: true
            };
        else
            throw new customError_utils_1.default('No cashflow records could be found', { detailMsg: 'No cashflow records could be found' }, httpStatus_utils_1.default.NOT_FOUND);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default) {
            const details = {
                modelErr: err?.details?.modelErr,
                serviceErr: 'Error at service while trying to delete a cashflow record'
            };
            throw new customError_utils_1.default(err.message, details, err.statusCode);
        }
        if (err instanceof yup_1.ValidationError)
            throw new customError_utils_1.default('Error while trying to delete a cashflow record: ' + err.errors, { serviceErr: JSON.stringify(err.errors) }, httpStatus_utils_1.default.UNPROCESSABLE_ENTITY);
        throw new customError_utils_1.default('Error while trying to delete a cashflow record', { detailMsg: err.message }, httpStatus_utils_1.default.SERVER_ERROR);
    }
};
exports.deleteCashflowService = deleteCashflowService;
const updateCashflowService = async (payload) => {
    try {
        const amount = payload.amount;
        const category = payload.category;
        const details = payload.details;
        const id = Number(payload.id);
        await cashflow_validator_1.updCashflowValidator.validate({ amount, category, details, id }, { abortEarly: false });
        const user = (0, jwt_validator_1.accessTokenVerifier)({ accessToken: payload.accessToken ? payload.accessToken : null });
        const data = {
            ...amount && { amount },
            ...category && { category },
            ...details && { details }
        };
        const cashflow = await (0, cashflow_model_1.updCashflowModel)({
            data,
            id,
            userId: user.id
        });
        if (cashflow.count)
            return {
                updated: true
            };
        else
            throw new customError_utils_1.default('No cashflow records could be found', { detailMsg: 'No cashflow records could be found' }, httpStatus_utils_1.default.NOT_FOUND);
    }
    catch (err) {
        if (err instanceof customError_utils_1.default) {
            const details = {
                modelErr: err?.details?.modelErr,
                serviceErr: 'Error at service while trying to update a cashflow record'
            };
            throw new customError_utils_1.default(err.message, details, err.statusCode);
        }
        if (err instanceof yup_1.ValidationError)
            throw new customError_utils_1.default('Error while trying to update a cashflow record: ' + err.errors, { serviceErr: JSON.stringify(err.errors) }, httpStatus_utils_1.default.UNPROCESSABLE_ENTITY);
        throw new customError_utils_1.default('Error while trying to update a cashflow record', { detailMsg: err.message }, httpStatus_utils_1.default.SERVER_ERROR);
    }
};
exports.updateCashflowService = updateCashflowService;
const getBalanceCashflowService = async (payload) => {
    try {
        const user = (0, jwt_validator_1.accessTokenVerifier)({ accessToken: payload.accessToken ? payload.accessToken : null });
        const balance = await (0, cashflow_model_1.getBalanceCashflowModel)({
            userId: user.id
        });
        return balance;
    }
    catch (err) {
        if (err instanceof customError_utils_1.default) {
            const details = {
                modelErr: err?.details?.modelErr,
                serviceErr: 'Error at service while trying to update a cashflow record'
            };
            throw new customError_utils_1.default(err.message, details, err.statusCode);
        }
        if (err instanceof yup_1.ValidationError)
            throw new customError_utils_1.default('Error while trying to update a cashflow record: ' + err.errors, { serviceErr: JSON.stringify(err.errors) }, httpStatus_utils_1.default.UNPROCESSABLE_ENTITY);
        throw new customError_utils_1.default('Error while trying to update a cashflow record', { detailMsg: err.message }, httpStatus_utils_1.default.SERVER_ERROR);
    }
};
exports.getBalanceCashflowService = getBalanceCashflowService;
//# sourceMappingURL=cashflow.services.js.map