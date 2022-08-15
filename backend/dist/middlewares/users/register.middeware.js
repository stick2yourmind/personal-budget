"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const codification_config_1 = __importDefault(require("../../config/codification.config"));
const customError_utils_1 = __importDefault(require("../../utils/error/customError.utils"));
const httpStatus_utils_1 = __importDefault(require("../../utils/constants/httpStatus.utils"));
/**
 *Creates a salt to be used for encryptation
 *
 * @return {string} salt - Generated salt
 */
const salt = async () => {
    if (codification_config_1.default.BCRYPT_SALT)
        return await bcrypt_1.default.genSalt(Number(codification_config_1.default.BCRYPT_SALT));
    else
        throw new customError_utils_1.default('Error while trying to register an user', { modelErr: "Bcrypt's salt has not been defined" }, httpStatus_utils_1.default.SERVER_ERROR);
};
/**
 *Encrypt password
 *
 * @param {string} password
 * @retuen {string} hash - Encrypted password
 */
const hashPassword = async (password) => await bcrypt_1.default.hash(password, await salt());
/**
 *Encrypts password in order to save a secure password at database
 *
 * @param {PrismaClientType} prisma
 */
const createUserMiddleware = (prisma) => {
    prisma?.$use(async (params, next) => {
        try {
            // Check incoming model
            if (params.model === 'User')
                // Check incoming query type
                if (params.action === 'create')
                    // Change action to an update
                    params.args.data = { ...params.args.data, password: await hashPassword(params.args.data.password) };
        }
        catch (err) {
            console.log(err);
        }
        finally {
            // eslint-disable-next-line no-unsafe-finally
            return next(params);
        }
    });
};
exports.default = createUserMiddleware;
//# sourceMappingURL=register.middeware.js.map