"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceCashflowCtrlr = exports.updateCashflowCtrlr = exports.deleteCashflowCtrlr = exports.getCashflowByIdCtrlr = exports.getCashflowCtrlr = exports.createCashflowCtrlr = void 0;
const api_utils_1 = require("../utils/api/api.utils");
const httpStatus_utils_1 = __importDefault(require("../utils/constants/httpStatus.utils"));
const cashflow_services_1 = require("../services/cashflow/cashflow.services");
const createCashflowCtrlr = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader?.split(' ')[1];
        const { amount, category, details, isExpense } = req.body;
        const createCashflowMsg = await (0, cashflow_services_1.createCashflowService)({
            accessToken,
            amount,
            category,
            details,
            isExpense
        });
        const response = (0, api_utils_1.apiSuccessResponse)(createCashflowMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.createCashflowCtrlr = createCashflowCtrlr;
const getCashflowCtrlr = async (req, res, next) => {
    try {
        const page = Number.isNaN(Number(req.query?.page)) ? 0 : Number(req.query?.page);
        console.log('🚀 ~ file: cashflow.controller.ts ~ line 32 ~ getCashflowCtrlr ~ page', page);
        const limit = Number.isNaN(Number(req.query?.limit)) ? 10 : Number(req.query?.limit);
        console.log('🚀 ~ file: cashflow.controller.ts ~ line 33 ~ getCashflowCtrlr ~ limit', limit);
        const authHeader = req.headers.authorization;
        const accessToken = authHeader?.split(' ')[1] ?? '';
        const getCashflowMsg = await (0, cashflow_services_1.getCashflowService)({ accessToken, limit, page });
        const response = (0, api_utils_1.apiSuccessResponse)(getCashflowMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.getCashflowCtrlr = getCashflowCtrlr;
const getCashflowByIdCtrlr = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader?.split(' ')[1];
        const { id } = req.params;
        const { offset } = req.query;
        const getCashflowMsg = await (0, cashflow_services_1.getCashflowByIdService)({ accessToken, id: Number(id), offset });
        const response = (0, api_utils_1.apiSuccessResponse)(getCashflowMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.getCashflowByIdCtrlr = getCashflowByIdCtrlr;
const deleteCashflowCtrlr = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader?.split(' ')[1];
        const { id } = req.params;
        const deleteCashflowMsg = await (0, cashflow_services_1.deleteCashflowService)({ accessToken, id: Number(id) });
        const response = (0, api_utils_1.apiSuccessResponse)(deleteCashflowMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.deleteCashflowCtrlr = deleteCashflowCtrlr;
const updateCashflowCtrlr = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader?.split(' ')[1];
        const { id } = req.params;
        const { amount, category, details } = req.body;
        const updateCashflowMsg = await (0, cashflow_services_1.updateCashflowService)({ accessToken, amount, category, details, id: Number(id) });
        const response = (0, api_utils_1.apiSuccessResponse)(updateCashflowMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.updateCashflowCtrlr = updateCashflowCtrlr;
const getBalanceCashflowCtrlr = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader?.split(' ')[1];
        const getBalanceCashflowMsg = await (0, cashflow_services_1.getBalanceCashflowService)({ accessToken });
        const response = (0, api_utils_1.apiSuccessResponse)(getBalanceCashflowMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.getBalanceCashflowCtrlr = getBalanceCashflowCtrlr;
//# sourceMappingURL=cashflow.controller.js.map