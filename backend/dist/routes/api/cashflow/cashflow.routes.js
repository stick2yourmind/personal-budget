"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashflow_controller_1 = require("../../../controllers/cashflow.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
// Route to create a cashflow record
router.post('/', cashflow_controller_1.createCashflowCtrlr);
router.get('/:id', cashflow_controller_1.getCashflowCtrlr);
exports.default = router;
//# sourceMappingURL=cashflow.routes.js.map