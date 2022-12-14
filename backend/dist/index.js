"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_config_1 = __importDefault(require("./config/server.config"));
const app_routes_1 = __importDefault(require("./routes/app.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const cors_util_1 = __importDefault(require("./utils/cors/cors.util"));
const app = (0, express_1.default)();
// App middlewares
// Middleware to handle Cross Origin Resource Sharing
app.use((0, cors_1.default)(cors_util_1.default));
// Middleware for binding req.headers.cookie to req.cookies
app.use((0, cookie_parser_1.default)());
// Middleware to handle JSON
app.use(express_1.default.json());
// Middleware to handle urlencoded form data
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use('/', app_routes_1.default);
if (server_config_1.default.PORT && server_config_1.default.HOST) {
    const server = app.listen(server_config_1.default.PORT, server_config_1.default.HOST, () => {
        console.log(`Server is up and running on port => ${server_config_1.default.PORT}`);
    });
    server.on('error', (error) => {
        console.log('There was an unexpected error in the server');
        console.log(error);
    });
}
else
    console.log('Missing SERVER_CFG.PORT or SERVER_CFG.HOST');
//# sourceMappingURL=index.js.map