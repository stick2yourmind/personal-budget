"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./../../../controllers/user.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
// login user route
router.get('/login', user_controller_1.loginUser);
// Register user route
router.post('/register', user_controller_1.registerUser);
// Refresh access token route
router.get('/refresh', user_controller_1.refreshAuth);
exports.default = router;
//# sourceMappingURL=user.routes.js.map