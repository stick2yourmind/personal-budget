"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCashflowCtrlr = exports.createCashflowCtrlr = void 0;
const api_utils_1 = require("../utils/api/api.utils");
const httpStatus_utils_1 = __importDefault(require("../utils/constants/httpStatus.utils"));
const cashflow_services_1 = require("../services/cashflow/cashflow.services");
const createCashflowCtrlr = async (req, res, next) => {
    try {
        const { amount, category, details, isExpense, userId } = req.body;
        const createCashflowMsg = await (0, cashflow_services_1.createCashflowService)({ amount, category, details, isExpense, userId });
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
        const authHeader = req.headers.authorization;
        const accessToken = authHeader?.split(' ')[1];
        const { id } = req.params;
        const { offset } = req.query;
        const createCashflowMsg = await (0, cashflow_services_1.getCashflowService)({ accessToken, id, offset });
        const response = (0, api_utils_1.apiSuccessResponse)(createCashflowMsg, httpStatus_utils_1.default.OK);
        return res.status(httpStatus_utils_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.getCashflowCtrlr = getCashflowCtrlr;
//# sourceMappingURL=cashflow.controller.js.map