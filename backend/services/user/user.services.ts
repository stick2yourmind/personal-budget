import { ValidationError } from 'yup'
import STATUS from '../../utils/constants/httpStatus.utils'
import CustomError, { ErrorDetails } from '../../utils/error/customError.utils'
import RegValidator from '../../utils/validators/user.validator'
import { createUserModel, CreateUser } from './../../models/user/user.model'

export interface UserDataResponse{
  email: string
  name: string
}

export const createUserService = async ({ email, name, password }:CreateUser):Promise<UserDataResponse> => {
  try {
    await RegValidator.validate({ email, name, password }, { abortEarly: false })
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
