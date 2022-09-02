"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user/user.routes"));
const cashflow_routes_1 = __importDefault(require("./cashflow/cashflow.routes"));
const auth_middleware_1 = __importDefault(require("../../middlewares/users/auth.middleware"));
const router = (0, express_1.Router)();
// User API routes
router.use('/user', user_routes_1.default);
// Budget API routes
router.use('/cashflow', auth_middleware_1.default, cashflow_routes_1.default);
exports.default = router;
//# sourceMappingURL=api.routes.js.map