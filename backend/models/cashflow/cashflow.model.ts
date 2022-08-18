import prisma from '../../db/intance.db'
import CustomError from '../../utils/error/customError.utils'
import STATUS from '../../utils/constants/httpStatus.utils'
import { PrismaErr } from '../../ts/utils'
import { GetCashflow, UpdateCashflow, CreateCashflow, DeleteCashflow, CashflowRelated } from '../../ts/models'

export const createCashflowModel = async (payload:CreateCashflow) => {
  try {
    if (prisma) {
      const Cashflow = await prisma.cashflow.create({
        data: {
          amount: payload.amount,
          category: payload.category,
          details: payload.details,
          isExpense: payload.isExpense,
          userId: payload.userId
        }
      })
      return Cashflow
    } else
      throw new CustomError(
        'Error at model while trying to create a cashflow record',
        { modelErr: 'Prisma database instance is undefined' },
        STATUS.SERVER_ERROR)
  } catch (err) {
    if (err instanceof CustomError)
      throw new CustomError(err.message, err.details, err.statusCode)
    const errorCode = (err as PrismaErr)?.code === 'P2002' ? STATUS.CONFLICT : STATUS.SERVER_ERROR
    throw new CustomError('Error while trying to create a cashflow record',
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

export const getCashflowModel = async (payload:GetCashflow) => {
  try {
    if (prisma) {
      const Cashflow:CashflowRelated = await prisma.cashflow.findMany({
        // include: {
        //   user: true
        // },
        // skip: payload.offset,
        // take: 11,
        where: {
          // AND: [
          //   {
          //     userId: {
          //       equals: payload.userId
          //     }
          //   },
          //   {
          //     id: {
          //       equals: payload.id
          //     }
          //   }
          // ]
          AND: [{ userId: { equals: payload.userId } }, { id: { equals: payload.id } }]
        }
      })
      // console.log('🚀 ~ file: cashflow.model.ts ~ line 56 ~ getCashflowModel ~ Cashflow', Cashflow)
      return Cashflow
    } else
      throw new CustomError(
        'Error at model while trying to get a cashflow record',
        { modelErr: 'Prisma database instance is undefined' },
        STATUS.SERVER_ERROR)
  } catch (err) {
    if (err instanceof CustomError)
      throw new CustomError(err.message, err.details, err.statusCode)
    const errorCode = (err as PrismaErr)?.code === 'P2002' ? STATUS.CONFLICT : STATUS.SERVER_ERROR
    throw new CustomError('Error while trying to get a cashflow record',
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

export const updateCashflowModel = async (payload:UpdateCashflow) => {
  try {
    if (prisma) {
      const Cashflow = await prisma.cashflow.update({
        data: {
          amount: payload.amount,
          category: payload.category,
          details: payload.details
        },
        where: {
          id: payload.id
        }
      })
      return Cashflow
    } else
      throw new CustomError(
        'Error at model while trying to update a cashflow record',
        { modelErr: 'Prisma database instance is undefined' },
        STATUS.SERVER_ERROR)
  } catch (err) {
    if (err instanceof CustomError)
      throw new CustomError(err.message, err.details, err.statusCode)
    const errorCode = (err as PrismaErr)?.code === 'P2002' ? STATUS.CONFLICT : STATUS.SERVER_ERROR
    throw new CustomError('Error while trying to update a cashflow record',
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

export const delCashflowModel = async (payload:DeleteCashflow) => {
  try {
    if (prisma) {
      const Cashflow = await prisma.cashflow.deleteMany({
        where: {
          AND: [{ userId: { equals: payload.userId } }, { id: { equals: payload.id } }]
        }
      })
      return Cashflow
    } else
      throw new CustomError(
        'Error at model while trying to delete a cashflow record',
        { modelErr: 'Prisma database instance is undefined' },
        STATUS.SERVER_ERROR)
  } catch (err) {
    if (err instanceof CustomError)
      throw new CustomError(err.message, err.details, err.statusCode)
    const errorCode = (err as PrismaErr)?.code === 'P2002' ? STATUS.CONFLICT : STATUS.SERVER_ERROR
    throw new CustomError('Error while trying to delete a cashflow record',
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
