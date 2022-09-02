"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashflow_controller_1 = require("../../../controllers/cashflow.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
// Route to create a cashflow record
router.post('/', cashflow_controller_1.createCashflowCtrlr);
// Route to get last cashflows records
router.get('/', cashflow_controller_1.getCashflowCtrlr);
// Route to get a balance cashflow
router.get('/balance', cashflow_controller_1.getBalanceCashflowCtrlr);
// Route to get a cashflow by its id
router.get('/:id', cashflow_controller_1.getCashflowByIdCtrlr);
// Route to delete a cashflow by its id
router.delete('/:id', cashflow_controller_1.deleteCashflowCtrlr);
// Route to update a cashflow by its id
router.put('/:id', cashflow_controller_1.updateCashflowCtrlr);
exports.default = router;
//# sourceMappingURL=cashflow.routes.js.map