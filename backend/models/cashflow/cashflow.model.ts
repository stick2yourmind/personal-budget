import prisma from '../../db/intance.db'
import CustomError from '../../utils/error/customError.utils'
import STATUS from '../../utils/constants/httpStatus.utils'
import { PrismaErr } from '../../ts/utils'
import {
  GetCashflowById, GetCashflow, UpdateCashflow, CreateCashflow, DeleteCashflow,
  CashflowRelated, GetBalanceCashflow, CashflowBalanceGrouped
} from '../../ts/models'

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

export const getCashflowModel = async ({ page, limit, userId, cashflowType }:GetCashflow) => {
  try {
    if (prisma) {
      let count = 0
      let cashflow: CashflowRelated = []
      if (!cashflowType)
        count = await prisma.cashflow.count({
          where: {
            // eslint-disable-next-line object-shorthand
            userId: userId
          }
        })
      else
        count = await prisma.cashflow.count({
          where: {
            AND: [{ userId: { equals: userId } }, { isExpense: { equals: (cashflowType === 'expense') } }]
          }
        })
      console.log('🚀 ~ file: cashflow.model.ts ~ line 49 ~ getCashflowModel ~ count', count)
      const maxPage = Math.ceil((count / 10)) - 1
      if (!cashflowType)
        cashflow = await prisma.cashflow.findMany({
          select: {
            amount: true,
            category: true,
            details: true,
            id: true,
            isExpense: true,
            updatedAt: true
          },
          skip: 10 * page,
          take: limit,
          where: {
            userId: { equals: userId }
          }
        })
      else
        cashflow = await prisma.cashflow.findMany({
          select: {
            amount: true,
            category: true,
            details: true,
            id: true,
            isExpense: true,
            updatedAt: true
          },
          skip: 10 * page,
          take: limit,
          where: {
            AND: [{ userId: { equals: userId } }, { isExpense: { equals: (cashflowType === 'expense') } }]
          }
        })
      console.log('🚀 ~ file: cashflow.model.ts ~ line 56 ~ getCashflowModel ~ Cashflow', cashflow)
      return { cashflow, maxPage }
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

export const getCashflowByIdModel = async (payload:GetCashflowById) => {
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

export const updCashflowModel = async (payload:UpdateCashflow) => {
  try {
    if (prisma) {
      const Cashflow = await prisma.cashflow.updateMany({
        data: payload.data,
        where: {
          AND: [{ userId: { equals: payload.userId } }, { id: { equals: payload.id } }]
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

export const getBalanceCashflowModel = async (payload:GetBalanceCashflow) => {
  const data = []
  try {
    if (prisma) {
      const Cashflow:CashflowBalanceGrouped = await prisma.cashflow.groupBy({
        _sum: {
          amount: true
        },
        by: ['isExpense'],
        where: {
          userId: { equals: payload.userId }
        }
      })
      if (Cashflow.length)
        for (let i = 0; i < Cashflow.length; i++)
          data.push({
            amount: Cashflow[i]._sum?.amount,
            type: Cashflow[i].isExpense === true ? 'expense' : 'income'
          })
      return data
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
