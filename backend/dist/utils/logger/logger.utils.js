"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogger = exports.warnLogger = exports.infoLogger = void 0;
const log4js_1 = __importDefault(require("log4js"));
const path_1 = __importDefault(require("path"));
log4js_1.default.configure({
    appenders: {
        console: { type: 'console' },
        errorFile: { filename: path_1.default.join(__dirname, '../../log/error.log'), type: 'file' },
        warningFile: { filename: path_1.default.join(__dirname, '../../log/warn.log'), type: 'file' }
    },
    categories: {
        default: { appenders: ['console'], level: 'trace' },
        error: { appenders: ['console', 'errorFile'], level: 'error' },
        info: { appenders: ['console'], level: 'info' },
        warn: { appenders: ['console', 'warningFile'], level: 'warn' }
    }
});
exports.infoLogger = log4js_1.default.getLogger('info');
exports.warnLogger = log4js_1.default.getLogger('warn');
exports.errorLogger = log4js_1.default.getLogger('error');
//# sourceMappingURL=logger.utils.js.map