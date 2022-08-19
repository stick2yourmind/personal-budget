import dotenv from 'dotenv'
dotenv.config()

const SERVER_CFG = {
  ALLOWED_ORIGINS: [
    process.env.ALLOWED_ORIGINS,
    process.env.ALLOWED_ORIGINS_ALTER,
    process.env.ALLOWED_ORIGINS_TESTING,
    process.env.ALLOWED_ORIGINS_TESTING_ALTER
  ],
  DB_URL: process.env.DATABASE_URL,
  HOST: process.env.HOST,
  MODE: process.env.MODE,
  PORT: Number(process.env.PORT)
}

export default SERVER_CFG
