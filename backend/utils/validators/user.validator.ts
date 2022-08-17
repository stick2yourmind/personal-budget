import * as Yup from 'yup'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import JWT_CFG from '../../config/jwt.config'
import { UserIdType } from './../../ts/models.d'

const onlyText = /^[A-Za-z]*$/

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
      onlyText,
      "Name can only contains alphabet's letters"
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

export const jwtLoginSign = ({ userId }:{userId: UserIdType}) => {
  if (typeof JWT_CFG.ACCESS_TOKEN_SECRET === 'string' && typeof JWT_CFG.REFRESH_TOKEN_SECRET === 'string') {
    const accessToken = jwt.sign(
      { id: userId },
      JWT_CFG.ACCESS_TOKEN_SECRET,
      { expiresIn: JWT_CFG.EXPIRES_ACCESS_TOKEN }
    )
    const refreshToken = jwt.sign(
      { id: userId },
      JWT_CFG.REFRESH_TOKEN_SECRET,
      { expiresIn: JWT_CFG.EXPIRES_REFRESH_TOKEN }
    )
    return { accessToken, refreshToken }
  } else throw new Error('JWT secret keys must be provided')
}
