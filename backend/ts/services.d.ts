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

export interface GetCashflowReq extends Pick<Cashflow, 'accessToken'>{
  id?: CashflowIdType,
  offset?: OffsetType
}

export type GetCashflowService = (params:GetCashflowReq) => Promise<CashflowDataResponseRelated>
