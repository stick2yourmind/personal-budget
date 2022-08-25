import { Role } from '../roles'

export type AccessTokenType = string
export type EmailType = string
export type NameType = string
export type RoleType = Role
export type IdType = number

export interface UserInfo {
  accessToken?: AccessTokenType
  email?: EmailType
  id?: IdType
  name?: NameType
  role: RoleType
}

export interface DataLogin{
  accessToken: AccessTokenType
  email: EmailType
  name: NameType
  role: RoleType
  userId: IdType
}
