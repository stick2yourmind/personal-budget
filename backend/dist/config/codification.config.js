"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const CODIFICATION_CFG = {
    BCRYPT_SALT: process.env.BCRYPT_SALT
};
exports.default = CODIFICATION_CFG;
//# sourceMappingURL=codification.config.js.map