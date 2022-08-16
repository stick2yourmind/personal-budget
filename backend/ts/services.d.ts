import { UserDataResponse } from '../ts/controllers'
import { CreateUser, GetUser, PasswordType } from '../ts/models'

/* -------------------------------------------------------------------------- */
/*                               SERVICE'S TYPES                              */
/* -------------------------------------------------------------------------- */

export interface LoginUserS extends GetUser{
  password: PasswordType
}

export type CreateUserS = CreateUser

export type LoginUserService = (params:LoginUserS) => Promise<UserDataResponse>

export type CreateUserService = (params:CreateUser) => Promise<UserDataResponse>
