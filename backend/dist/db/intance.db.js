"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
let dbIsInstanced = false;
let dbInstance;
const setInstance = () => {
    if (!dbIsInstanced) {
        dbIsInstanced = true;
        dbInstance = new client_1.PrismaClient();
    }
    return dbInstance;
};
setInstance();
exports.default = dbInstance;
//# sourceMappingURL=intance.db.js.map