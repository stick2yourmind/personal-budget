"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const register_middeware_1 = __importDefault(require("../middlewares/users/register.middeware"));
let dbIsInstanced = false;
let dbInstance;
const setInstance = () => {
    if (dbIsInstanced !== true) {
        dbIsInstanced = true;
        dbInstance = new client_1.PrismaClient();
        (0, register_middeware_1.default)(dbInstance);
    }
    return dbInstance;
};
setInstance();
exports.default = setInstance();
//# sourceMappingURL=intance.db.js.map