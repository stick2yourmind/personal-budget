import { PrismaClient } from '@prisma/client'
import createUserMiddleware from '../middlewares/users/register.middeware'

export type PrismaClientType = InstanceType< typeof PrismaClient> | undefined
type SetInstance = () => InstanceType< typeof PrismaClient> | undefined

let dbIsInstanced = false
let dbInstance: PrismaClientType

const setInstance:SetInstance = () => {
  if (dbIsInstanced !== true) {
    dbIsInstanced = true
    dbInstance = new PrismaClient()
    createUserMiddleware(dbInstance)
  }
  return dbInstance
}

setInstance()

export default setInstance()
