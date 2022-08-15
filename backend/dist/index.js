"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_config_1 = __importDefault(require("./config/server.config"));
const app_routes_1 = __importDefault(require("./routes/app.routes"));
const app = (0, express_1.default)();
// App middlewares
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