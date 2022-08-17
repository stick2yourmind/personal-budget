"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCashflowService = exports.createCashflowService = void 0;
const yup_1 = require("yup");
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const cashflow_model_1 = require("../../models/cashflow/cashflow.model");
const cashflow_validator_1 = require("../../utils/validators/cashflow.validator");
const jwt_validator_1 = require("../../utils/validators/jwt.validator");
const createCashflowService = async (payload) => {
    try {
        await cashflow_validator_1.CreateCashflowValidator.validate(payload, { abortEarly: false });
        await (0, cashflow_model_1.createCashflowModel)({
            amount: Number(payload.amount),
            category: payload.category,
            details: payload.details,
            isExpense: payload.isExpense,
            userId: Number(payload.userId)
        });
        return {
            amount: Number(payload.amount),
            category: payload.category,
            details: payload.details,
            isExpense: payload.isExpense,
            userId: Number(payload.userId)
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
        await cashflow_validator_1.getCashflowValidator.validate(payload, { abortEarly: false });
        const user = (0, jwt_validator_1.accessTokenVerifier)({ accessToken: payload.accessToken });
        const cashflow = await (0, cashflow_model_1.getCashflowModel)({
            id: Number(payload.id),
            offset: Number(payload.offset) || 0,
            userId: user.id
        });
        if (cashflow.length)
            return {
                amount: cashflow[0].amount,
                category: cashflow[0].category,
                details: cashflow[0].details,
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
exports.getCashflowService = getCashflowService;
//# sourceMappingURL=cashflow.services.js.map