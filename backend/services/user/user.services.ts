import { ValidationError } from 'yup'
import STATUS from '../../utils/constants/httpStatus.utils'
import CustomError from '../../utils/error/customError.utils'
import {
  createUserModel, getUserByEmailModel, getUserById,
  updateUserByEmailModel
} from '../../models/user/user.model'
import {
  RegisterValidator, LoginValidator,
  isValidPassword, jwtLoginSign, refreshTokenValidator, signAccessToken
} from '../../utils/validators/user.validator'

import { ErrorDetails } from '../../ts/utils'
import { LoginUserService, CreateUserService, RefreshAuthService } from '../../ts/services'

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
    const User = await getUserByEmailModel({ email })
    const isValidLogin = isValidPassword(password, User?.password)
    if (User !== null && isValidLogin) {
      const { accessToken, refreshToken } = jwtLoginSign({ userId: User.id })
      await updateUserByEmailModel({ email, refreshToken })
      return {
        accessToken,
        email: User.email,
        name: User.name,
        refreshToken,
        role: User.role,
        userId: User.id
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

export const refreshAuthService:RefreshAuthService = async ({ refreshToken }) => {
  try {
    const decodedData = await refreshTokenValidator({ refreshToken })
    const User = await getUserById({ id: decodedData.id })
    if (User !== null) {
      const accessToken = signAccessToken({ id: User.id })
      return {
        accessToken,
        email: User.email,
        name: User.name,
        role: User.role,
        userId: User.id
      }
    } else throw new CustomError(
      'Error while trying to refresh the login to an user: token is invalid',
      { serviceErr: 'Error while trying to refresh the login to an user: user can not be found' },
      STATUS.UNAUTHORIZED)
  } catch (err) {
    if (err instanceof CustomError) {
      const details:ErrorDetails = {
        modelErr: (err as CustomError)?.details?.modelErr,
        serviceErr: 'Error at service while trying to refresh the login to an user'
      }
      throw new CustomError(err.message, details, err.statusCode)
    }
    if (err instanceof ValidationError)
      throw new CustomError(
        'Error while trying to refresh the login to an user: ' + err.errors,
        { serviceErr: JSON.stringify(err.errors) }, STATUS.UNPROCESSABLE_ENTITY)

    throw new CustomError('Error while trying to refresh the login to an user',
      { detailMsg: (err as Error).message }, STATUS.SERVER_ERROR)
  }
}
