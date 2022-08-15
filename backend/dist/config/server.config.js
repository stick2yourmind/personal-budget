"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_CFG = {
    ALLOWED_ORIGINS: [
        process.env.ALLOWED_ORIGINS,
        process.env.ALLOWED_ORIGINS_ALTER,
        process.env.ALLOWED_ORIGINS_TESTING,
        process.env.ALLOWED_ORIGINS_TESTING_ALTER
    ],
    HOST: process.env.HOST,
    MODE: process.env.MODE,
    PORT: Number(process.env.PORT)
};
exports.default = SERVER_CFG;
//# sourceMappingURL=server.config.js.map