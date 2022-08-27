import * as Yup from 'yup'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import JWT_CFG from '../../config/jwt.config'
import { RefreshTokenType, UserIdType } from './../../ts/models.d'

const onlyTextSpaces = /^[A-Za-z ]*$/

/* -------------------------------------------------------------------------- */
/*                                REGISTER USER                               */
/* -------------------------------------------------------------------------- */

export const RegisterValidator = Yup.object({
  email: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Email is required')
    .email('Email is invalid'),
  name: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Name is required')
    .matches(
      onlyTextSpaces,
      "Name can only contains alphabet's letters and spaces"
    ),
  password: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Password is required')
    .min(8, 'Password must contains at least 8 characters')
    .max(16, 'Password must contains up to 16 characters')
})

export const RegisterUserInit = {
  email: '',
  name: '',
  password: ''
}

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

export const LoginValidator = Yup.object({
  email: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Password is required')
    .min(8, 'Password must contains at least 8 characters')
    .max(16, 'Password must contains up to 16 characters')
})

export const isValidPassword = (password:string, encriptedPassword:string | undefined) => {
  if (encriptedPassword !== undefined)
    return bcrypt.compareSync(password, encriptedPassword)
  else return false
}

export const signAccessToken = (data:{id: UserIdType}) => {
  if (JWT_CFG.ACCESS_TOKEN_SECRET) {
    const accessToken = jwt.sign(
      data,
      JWT_CFG.ACCESS_TOKEN_SECRET,
      { expiresIn: JWT_CFG.EXPIRES_ACCESS_TOKEN }
    )
    return accessToken
  } else throw new Error('JWT access token secret key must be provided')
}

export const signRefreshToken = (data:{id: UserIdType}) => {
  if (JWT_CFG.REFRESH_TOKEN_SECRET) {
    const accessToken = jwt.sign(
      data,
      JWT_CFG.REFRESH_TOKEN_SECRET,
      { expiresIn: JWT_CFG.EXPIRES_REFRESH_TOKEN }
    )
    return accessToken
  } else throw new Error('JWT access token secret key must be provided')
}

export const jwtLoginSign = ({ userId }:{userId: UserIdType}) => {
  if (typeof JWT_CFG.ACCESS_TOKEN_SECRET === 'string' && typeof JWT_CFG.REFRESH_TOKEN_SECRET === 'string') {
    const accessToken = signAccessToken({ id: userId })
    const refreshToken = signRefreshToken({ id: userId })
    return { accessToken, refreshToken }
  } else throw new Error('JWT secret keys must be provided')
}

export const refreshTokenValidator = async ({ refreshToken }:{refreshToken: RefreshTokenType }) => {
  if (JWT_CFG.REFRESH_TOKEN_SECRET) {
    const decoded = await jwt.verify(
      refreshToken || '',
      JWT_CFG.REFRESH_TOKEN_SECRET
    )
    return decoded as { exp: number, iat: number, id: number }
  } else throw new Error('JWT refresh token secret key must be provided')
}
