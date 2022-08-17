"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_CFG = {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    EXPIRES_ACCESS_TOKEN: process.env.EXPIRES_ACCESS_TOKEN,
    EXPIRES_ACCESS_TOKEN_MILLISECONDS: process.env.EXPIRES_ACCESS_TOKEN_MILLISECONDS,
    EXPIRES_REFRESH_TOKEN: process.env.EXPIRES_REFRESH_TOKEN,
    EXPIRES_REFRESH_TOKEN_MILLISECONDS: process.env.EXPIRES_REFRESH_TOKEN_MILLISECONDS,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET
};
exports.default = JWT_CFG;
//# sourceMappingURL=jwt.config.js.map