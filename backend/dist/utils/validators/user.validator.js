"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtLoginSign = exports.isValidPassword = exports.LoginValidator = exports.RegisterUserInit = exports.RegisterValidator = void 0;
const Yup = __importStar(require("yup"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_config_1 = __importDefault(require("../../config/jwt.config"));
const onlyText = /^[A-Za-z]*$/;
/* -------------------------------------------------------------------------- */
/*                                REGISTER USER                               */
/* -------------------------------------------------------------------------- */
exports.RegisterValidator = Yup.object({
    email: Yup.string()
        .typeError('Name must be an string of characters')
        .required('Email is required')
        .email('Email is invalid'),
    name: Yup.string()
        .typeError('Name must be an string of characters')
        .required('Name is required')
        .matches(onlyText, "Name can only contains alphabet's letters"),
    password: Yup.string()
        .typeError('Name must be an string of characters')
        .required('Password is required')
        .min(8, 'Password must contains at least 8 characters')
        .max(16, 'Password must contains up to 16 characters')
});
exports.RegisterUserInit = {
    email: '',
    name: '',
    password: ''
};
// RegisterUserSchema.validate(
//   { name: "11", age: 11 },
//   { abortEarly: false }
// ).catch(function (err) {
//   console.log(err.name); // => 'ValidationError'
//   console.log(err.errors); // => ["Name can only contains alphabet's letters", "Email is required", "Password is required"]
// });
/* -------------------------------------------------------------------------- */
/*                                 LOGIN USER                                 */
/* -------------------------------------------------------------------------- */
exports.LoginValidator = Yup.object({
    email: Yup.string()
        .typeError('Name must be an string of characters')
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .typeError('Name must be an string of characters')
        .required('Password is required')
        .min(8, 'Password must contains at least 8 characters')
        .max(16, 'Password must contains up to 16 characters')
});
const isValidPassword = (password, encriptedPassword) => {
    if (encriptedPassword !== undefined)
        return bcrypt_1.default.compareSync(password, encriptedPassword);
    else
        return false;
};
exports.isValidPassword = isValidPassword;
const jwtLoginSign = ({ userId }) => {
    if (typeof jwt_config_1.default.ACCESS_TOKEN_SECRET === 'string' && typeof jwt_config_1.default.REFRESH_TOKEN_SECRET === 'string') {
        const accessToken = jsonwebtoken_1.default.sign({ id: userId }, jwt_config_1.default.ACCESS_TOKEN_SECRET, { expiresIn: jwt_config_1.default.EXPIRES_ACCESS_TOKEN });
        const refreshToken = jsonwebtoken_1.default.sign({ id: userId }, jwt_config_1.default.REFRESH_TOKEN_SECRET, { expiresIn: jwt_config_1.default.EXPIRES_REFRESH_TOKEN });
        return { accessToken, refreshToken };
    }
    else
        throw new Error('JWT secret keys must be provided');
};
exports.jwtLoginSign = jwtLoginSign;
//# sourceMappingURL=user.validator.js.map