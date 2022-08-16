import prisma from '../../db/intance.db'
import CustomError from '../../utils/error/customError.utils'
import STATUS from '../../utils/constants/httpStatus.utils'
import { PrismaErr } from '../../ts/utils'
import { CreateUser, GetUser, UpdateUserByEmailLogin } from '../../ts/models'

export const createUserModel = async (payload:CreateUser) => {
  try {
    if (prisma) {
      const User = await prisma.user.create({
        data: {
          email: payload.email,
          name: payload.name,
          password: payload.password
        }
      })
      return User
    } else
      throw new CustomError(
        'Error at model while trying to create a user',
        { modelErr: 'Prisma database instance is undefined' },
        STATUS.SERVER_ERROR)
  } catch (err) {
    if (err instanceof CustomError)
      throw new CustomError(err.message, err.details, err.statusCode)
    const errorCode = (err as PrismaErr)?.code === 'P2002' ? STATUS.CONFLICT : STATUS.SERVER_ERROR
    throw new CustomError('Error while trying to create a user',
      {
        modelErr: {
          clientVersion: (err as PrismaErr)?.clientVersion,
          code: (err as PrismaErr)?.code,
          message: (err as PrismaErr).message,
          meta: (err as PrismaErr)?.meta
        }
      },
      errorCode)
  }
}

export const getUserByEmailModel = async (payload:GetUser) => {
  try {
    if (prisma) {
      const User = await prisma.user.findUnique({
        where: {
          email: payload.email
        }
      })
      return User
    } else
      throw new CustomError(
        'Error at model while trying to login an user',
        { modelErr: 'Prisma database instance is undefined' },
        STATUS.SERVER_ERROR)
  } catch (err) {
    if (err instanceof CustomError)
      throw new CustomError(err.message, err.details, err.statusCode)
    const errorCode = (err as PrismaErr)?.code === 'P2002' ? STATUS.CONFLICT : STATUS.SERVER_ERROR
    throw new CustomError('Error while trying to login an user',
      {
        modelErr: {
          clientVersion: (err as PrismaErr)?.clientVersion,
          code: (err as PrismaErr)?.code,
          message: (err as PrismaErr).message,
          meta: (err as PrismaErr)?.meta
        }
      },
      errorCode)
  }
}

export const updateUserByEmailModel = async (payload:UpdateUserByEmailLogin) => {
  try {
    if (prisma) {
      const User = await prisma.user.update({
        data: {
          refreshToken: payload.refreshToken
        },
        where: {
          email: payload.email
        }
      })
      return User
    } else
      throw new CustomError(
        'Error at model while trying to login an user',
        { modelErr: 'Prisma database instance is undefined' },
        STATUS.SERVER_ERROR)
  } catch (err) {
    if (err instanceof CustomError)
      throw new CustomError(err.message, err.details, err.statusCode)
    const errorCode = (err as PrismaErr)?.code === 'P2002' ? STATUS.CONFLICT : STATUS.SERVER_ERROR
    throw new CustomError('Error while trying to login an user',
      {
        modelErr: {
          clientVersion: (err as PrismaErr)?.clientVersion,
          code: (err as PrismaErr)?.code,
          message: (err as PrismaErr).message,
          meta: (err as PrismaErr)?.meta
        }
      },
      errorCode)
  }
}
