import { ValidationError } from 'yup'
import STATUS from '../../utils/constants/httpStatus.utils'
import CustomError from '../../utils/error/customError.utils'
import { createUserModel, loginUserModel } from './../../models/user/user.model'
import { ErrorDetails } from '../../ts/utils'
import { LoginUserService, CreateUserService } from '../../ts/services'
import {
  RegisterValidator, LoginValidator,
  isValidPassword, jwtLoginSign
} from '../../utils/validators/user.validator'

export const createUserService:CreateUserService = async ({ email, name, password }) => {
  try {
    await RegisterValidator.validate({ email, name, password }, { abortEarly: false })
    const User = await createUserModel({ email, name, password })
    return {
      email: User.email,
      name: User.name
    }
  } catch (err) {
    if (err instanceof CustomError) {
      const details:ErrorDetails = {
        modelErr: (err as CustomError)?.details?.modelErr,
        serviceErr: 'Error at service while trying to create a user'
      }
      throw new CustomError(err.message, details, err.statusCode)
    }
    if (err instanceof ValidationError)
      throw new CustomError(
        'Error while trying to create a user: ' + err.errors,
        { serviceErr: JSON.stringify(err.errors) }, STATUS.UNPROCESSABLE_ENTITY)

    throw new CustomError('Error while trying to create a user',
      { detailMsg: (err as Error).message }, STATUS.SERVER_ERROR)
  }
}

export const loginUserService:LoginUserService = async ({ email, password }) => {
  try {
    await LoginValidator.validate({ email, password }, { abortEarly: false })
    const User = await loginUserModel({ email })
    const isValidLogin = isValidPassword(password, User?.password)
    if (User !== null && isValidLogin) {
      const { accessToken, refreshToken } = jwtLoginSign({ email })
      // await UserDao.updateByEmail(email, { refreshToken })
      return {
        accessToken,
        email: User.email,
        name: User.name,
        refreshToken
      }
    } else throw new CustomError(
      'Error while trying to login an user: email or password are invalid',
      { serviceErr: 'Error while trying to login an user: user can not be found' }, STATUS.UNAUTHORIZED)
  } catch (err) {
    if (err instanceof CustomError) {
      const details:ErrorDetails = {
        modelErr: (err as CustomError)?.details?.modelErr,
        serviceErr: 'Error at service while trying to login an user'
      }
      throw new CustomError(err.message, details, err.statusCode)
    }
    if (err instanceof ValidationError)
      throw new CustomError(
        'Error while trying to login an user: ' + err.errors,
        { serviceErr: JSON.stringify(err.errors) }, STATUS.UNPROCESSABLE_ENTITY)

    throw new CustomError('Error while trying to login an user',
      { detailMsg: (err as Error).message }, STATUS.SERVER_ERROR)
  }
}
