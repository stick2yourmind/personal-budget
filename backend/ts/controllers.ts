import { AccessTokenType, RefreshTokenType, UserIdType, EmailType, NameType, CreateCashflow } from './models'
import { User } from '@prisma/client'
import { ParsedQs } from 'qs'

/* -------------------------------------------------------------------------- */
/*                              CONTROLLER'S TYPE                             */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- USER ---------------------------------- */
export interface UserDataResponse{
  accessToken?: AccessTokenType
  email: EmailType
  name: NameType
  refreshToken?: RefreshTokenType
  userId?: UserIdType
}
export interface UserDataNullResponse{
  email: EmailType | undefined
  name: NameType | undefined
}

/* -------------------------------- CASHFLOW -------------------------------- */
export type CashflowDataResponse = Pick<CreateCashflow, 'amount' | 'category' | 'details' | 'isExpense' | 'userId'>
export interface CashflowDataResponseRelated extends CashflowDataResponse{
  user: User
}
export type OffsetType = string | ParsedQs | string[] | ParsedQs[] | undefined

export enum CashflowType{
  expense = 'expense',
  income = 'income'
}
