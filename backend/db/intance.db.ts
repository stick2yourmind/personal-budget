import { PrismaClient } from '@prisma/client'
import createUserMiddleware from '../middlewares/users/register.middeware'
import { PrismaClientType } from '../ts/db'

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

export default dbInstance
