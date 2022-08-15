import bcrypt from 'bcrypt'
import CODIFICATION_CFG from '../../config/codification.config'
import CustomError from '../../utils/error/customError.utils'
import STATUS from '../../utils/constants/httpStatus.utils'
import { PrismaClientType } from '../../db/intance.db'

/**
 *Creates a salt to be used for encryptation
 *
 * @return {string} salt - Generated salt
 */
const salt = async () => {
  if (CODIFICATION_CFG.BCRYPT_SALT)
    return await bcrypt.genSalt(Number(CODIFICATION_CFG.BCRYPT_SALT))
  else throw new CustomError(
    'Error while trying to register an user',
    { modelErr: "Bcrypt's salt has not been defined" },
    STATUS.SERVER_ERROR
  )
}

/**
 *Encrypt password
 *
 * @param {string} password
 * @retuen {string} hash - Encrypted password
 */
const hashPassword = async (password:string) => await bcrypt.hash(password, await salt())

/**
 *Encrypts password in order to save a secure password at database
 *
 * @param {PrismaClientType} prisma
 */
const createUserMiddleware = (prisma: PrismaClientType) => {
  prisma?.$use(async (params, next) => {
    try {
      // Check incoming model
      if (params.model === 'User')
      // Check incoming query type
        if (params.action === 'create')
        // Change action to an update
          params.args.data = { ...params.args.data, password: await hashPassword(params.args.data.password) }
    } catch (err) {
      console.log(err)
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return next(params)
    }
  })
}

export default createUserMiddleware
