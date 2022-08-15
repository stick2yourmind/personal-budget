import dotenv from 'dotenv'
dotenv.config()

const CODIFICATION_CFG = {
  BCRYPT_SALT: process.env.BCRYPT_SALT
}

export default CODIFICATION_CFG
