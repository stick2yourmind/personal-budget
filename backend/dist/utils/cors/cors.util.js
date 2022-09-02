"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = __importDefault(require("../../config/server.config"));
const corsOptions = {
    credentials: true,
    exposedHeaders: ['set-cookie'],
    optionsSuccessStatus: 200,
    origin: (origin, callback) => {
        if (server_config_1.default.ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin)
            callback(null, true);
        else
            callback(new Error('Not allowed by CORS'));
    }
};
exports.default = corsOptions;
//# sourceMappingURL=cors.util.js.map