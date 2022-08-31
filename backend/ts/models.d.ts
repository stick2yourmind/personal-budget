import { User, Cashflow } from '@prisma/client'
/* -------------------------------------------------------------------------- */
/*                                MODEL'S TYPES                               */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- USER ---------------------------------- */
export type EmailType = User['email']
export type PasswordType = User['password']
export type NameType = User['name']
export type RefreshTokenType = User['refreshToken']
export type AccessTokenType = User['refreshToken']

export interface CreateUser {
  email: EmailType
  name: NameType
  password: PasswordType
}

export interface GetUser {
  email: EmailType
}
export interface GetUserById {
  id: User['id']
}
export interface UpdateUserByEmailLogin {
  email: EmailType
  refreshToken: refreshTokenType
}

/* -------------------------------- CASHFLOW -------------------------------- */
export type AmountType = Cashflow['amount']
export type CategoryType = Cashflow['category']
export type CreatedAtType = Cashflow['createdAt']
export type DetailsType = Cashflow['details']
export type IsExpenseType = Cashflow['isExpense']
export type UpdatedAtType = Cashflow['updatedAt']
export type UserIdType = Cashflow['userId']
export type CashflowIdType = Cashflow['id']

export interface CreateCashflow{
  accessToken?: AccessTokenType
  amount: AmountType
  category: CategoryType
  details: DetailsType
  isExpense: IsExpenseType
  userId?: UserIdType
}
export interface GetCashflow extends Pick<Cashflow, 'id'>{
  offset?: number
  userId: UserIdType
}
export interface GetBalanceCashflow {
  userId: UserIdType
}
export interface UpdateCashflow {
  data: {
    amount?: AmountType
    category?: CategoryType,
    details?: DetailsType
  }
  id: CashflowIdType
  userId: UserIdType
}

export type DeleteCashflow = Pick<Cashflow, 'id' | 'userId'>
export type CashflowRelated = Cashflow[]
export interface ModelName {
  Cashflow: 'Cashflow'
  User: 'User'
}
export interface BalanceGroup{
  _sum?:{amount: AmountType}
  isExpense?: IsExpenseType
}
export type CashflowBalanceGrouped = BalanceGroup[]
