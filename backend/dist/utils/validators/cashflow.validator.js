"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updCashflowValidator = exports.delCashflowValidator = exports.getCashflowByIdValidator = exports.getCashflowValidator = exports.CreateCashflowValidator = void 0;
const Yup = __importStar(require("yup"));
const onlyNumbers = /^[0-9]+$/;
/* -------------------------------------------------------------------------- */
/*                          CREATE A CASHFLOW RECORD                          */
/* -------------------------------------------------------------------------- */
exports.CreateCashflowValidator = Yup.object({
    amount: Yup.number()
        .typeError('amount must be a number')
        .required('amount is required'),
    category: Yup.string()
        .typeError('category must be an string of characters')
        .required('category is required'),
    details: Yup.string()
        .typeError('details must be an string of characters')
        .required('details are required'),
    isExpense: Yup.boolean()
        .typeError('isExpense must be a boolean')
        .required('isExpense is required'),
    userId: Yup.number()
        .typeError('userId must be a number')
        .required('userId is required')
});
/* -------------------------------------------------------------------------- */
/*                   GET CASHFLOW RECORD WITH LIMIT AND PAGE                  */
/* -------------------------------------------------------------------------- */
exports.getCashflowValidator = Yup.object({
    limit: Yup.string()
        .matches(onlyNumbers, 'limit must be a positive number')
        .required('limit is required'),
    page: Yup.string()
        .matches(onlyNumbers, 'page must be a positive number')
        .required('page is required')
});
/* -------------------------------------------------------------------------- */
/*                        GET CASHFLOW RECORD FROM BY ID                      */
/* -------------------------------------------------------------------------- */
exports.getCashflowByIdValidator = Yup.object({
    id: Yup.string()
        .matches(onlyNumbers, 'id must be a positive number')
        .required('id is required'),
    offset: Yup.string()
        .matches(onlyNumbers, 'offset must be a positive number')
});
/* -------------------------------------------------------------------------- */
/*                      DELETE CASHFLOW RECORD FROM BY ID                     */
/* -------------------------------------------------------------------------- */
exports.delCashflowValidator = Yup.object({
    id: Yup.string()
        .matches(onlyNumbers, 'id must be a positive number')
        .required('id is required')
});
/* -------------------------------------------------------------------------- */
/*                      UPDATE CASHFLOW RECORD FROM BY ID                     */
/* -------------------------------------------------------------------------- */
exports.updCashflowValidator = Yup.object().shape({
    amount: Yup.string()
        .matches(onlyNumbers, 'id must be a positive number')
        .when(['category', 'details'], {
        is: (category, details) => !category && !details,
        then: Yup.string().required('One of < amount | category | details > is required')
    }),
    category: Yup.string()
        .typeError('details must be an string of characters')
        .when(['details', 'amount'], {
        is: (details, amount) => Number.isNaN(amount) && !details,
        then: Yup.string().required('One of < amount | category | details > is required')
    }),
    details: Yup.string()
        .typeError('details must be an string of characters')
        .when(['category', 'amount'], {
        is: (category, amount) => Number.isNaN(amount) && !category,
        then: Yup.string().required('One of < amount | category | details > is required')
    }),
    id: Yup.string()
        .matches(onlyNumbers, 'id must be a positive number')
        .required('id is required')
}, [['amount', 'category'], ['amount', 'details'], ['category', 'details']]);
//# sourceMappingURL=cashflow.validator.js.map