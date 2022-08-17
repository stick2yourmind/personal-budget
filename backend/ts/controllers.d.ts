import { User } from '@prisma/client'
import { EmailType, NameType, CreateCashflow } from './models'
import { ParsedQs } from 'qs'
/* -------------------------------------------------------------------------- */
/*                              CONTROLLER'S TYPE                             */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- USER ---------------------------------- */
export interface UserDataResponse{
  email: EmailType
  name: NameType
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
