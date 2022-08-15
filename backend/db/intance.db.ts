import { PrismaClient } from '@prisma/client'

type SetInstance = () => InstanceType< typeof PrismaClient> | undefined

let dbIsInstanced = false
let dbInstance: InstanceType< typeof PrismaClient> | undefined

const setInstance:SetInstance = () => {
  if (dbIsInstanced !== undefined) {
    dbIsInstanced = true
    dbInstance = new PrismaClient()
  }
  return dbInstance
}

setInstance()

export default dbInstance
