import { Cashflow } from '@prisma/client'
import { UserDataResponse, CashflowDataResponse, OffsetType } from '../ts/controllers'
import { CreateUser, GetUser, PasswordType, CreateCashflow } from '../ts/models'

/* -------------------------------------------------------------------------- */
/*                               SERVICE'S TYPES                              */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- USER ---------------------------------- */
export interface LoginUserS extends GetUser{
  password: PasswordType
}

export type CreateUserS = CreateUser

export type LoginUserService = (params:LoginUserS) => Promise<UserDataResponse>

export type CreateUserService = (params:CreateUser) => Promise<UserDataResponse>

/* -------------------------------- CASHFLOW -------------------------------- */

export type CreateCashflowService = (params:CreateCashflow) => Promise<CashflowDataResponse>

export interface GetCashflowReq extends Pick<Cashflow, 'id' >{
  accessToken?: string
  offset?: OffsetType
}

export interface DelCashflowReq extends Pick<Cashflow, 'id' >{
  accessToken?: string
}

export interface UpdCashflowReq extends Pick<Cashflow, 'amount' | 'category' | 'details' | 'id' >{
  accessToken?: string
}

export type GetCashflowService = (params:GetCashflowReq) => Promise<CashflowDataResponseRelated>
export type DelCashflowService = (params:DelCashflowReq) => Promise<CashflowDataResponseRelated>
export type UpdCashflowService = (params:UpdCashflowReq) => Promise<CashflowDataResponseRelated>
