"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error_middleware_1 = __importDefault(require("../middlewares/errors/error.middleware"));
const notFound_middleware_1 = __importDefault(require("../middlewares/errors/notFound.middleware"));
const api_routes_1 = __importDefault(require("./api/api.routes"));
const router = (0, express_1.Router)();
// API routes
router.use('/api', api_routes_1.default);
// Not found middleware
router.use(notFound_middleware_1.default);
// Error middleware
router.use(error_middleware_1.default);
exports.default = router;
//# sourceMappingURL=app.routes.js.map