import { AccessTokenType, RefreshTokenType } from './models.d'
import { Cashflow } from '@prisma/client'
import { UserDataResponse, CashflowDataResponse, OffsetType, CashflowType } from '../ts/controllers'
import { CreateUser, GetUser, PasswordType, CreateCashflow } from '../ts/models'

/* -------------------------------------------------------------------------- */
/*                               SERVICE'S TYPES                              */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- USER ---------------------------------- */
export interface LoginUserS extends GetUser{
  password: PasswordType
}
export interface RefreshUserS {
  refreshToken: RefreshTokenType
}

export type CreateUserS = CreateUser

export type LoginUserService = (params:LoginUserS) => Promise<UserDataResponse>

export type RefreshAuthService = (params:RefreshUserS) => Promise<UserDataResponse>

export type CreateUserService = (params:CreateUser) => Promise<UserDataResponse>

/* -------------------------------- CASHFLOW -------------------------------- */

export type CreateCashflowService = (params:CreateCashflow) => Promise<CashflowDataResponse>

export interface GetCashflowByIdReq extends Pick<Cashflow, 'id' >{
  accessToken?: string
  offset?: OffsetType
}
export interface GetCashflowReq {
  accessToken: string
  cashflowType?: CashflowType
  limit: string | number
  page: string | number
}
export interface DelCashflowReq extends Pick<Cashflow, 'id' >{
  accessToken?: string
}

export interface UpdCashflowReq extends Pick<Cashflow, 'amount' | 'category' | 'details' | 'id' >{
  accessToken?: string
}

export interface GetBalanceCashflowReq {
  accessToken?: AccessTokenType
}

export type GetCashflowByIdService = (params:GetCashflowByIdReq) => Promise<CashflowDataResponseRelated>
export type GetCashflowService = (params:GetCashflowReq) => Promise<CashflowDataResponseRelated>
export type DelCashflowService = (params:DelCashflowReq) => Promise<CashflowDataResponseRelated>
export type UpdCashflowService = (params:UpdCashflowReq) => Promise<CashflowDataResponseRelated>
export type GetBalanceCashflowService = (params:GetBalanceCashflowReq) => Promise<CashflowDataResponseRelated>
