import { EmailType, NameType } from './models'
/* -------------------------------------------------------------------------- */
/*                              CONTROLLER'S TYPE                             */
/* -------------------------------------------------------------------------- */
export interface UserDataResponse{
  email: EmailType
  name: NameType
}
export interface UserDataNullResponse{
  email: EmailType | undefined
  name: NameType | undefined
}
