import { User } from '@prisma/client'
/* -------------------------------------------------------------------------- */
/*                                MODEL'S TYPES                               */
/* -------------------------------------------------------------------------- */

export type EmailType = string
export type PasswordType = string
export type NameType = string
export type refreshTokenType = string

export interface CreateUser {
  email: User['email']
  name: User['name']
  password: User['password']
}

export interface GetUser {
  email: User['email']
}

export interface UpdateUserByEmailLogin {
  email: User['email']
  refreshToken: User['refreshToken']
}

export interface ModelName {
  Cashflow: 'Cashflow'
  User: 'User'
}
