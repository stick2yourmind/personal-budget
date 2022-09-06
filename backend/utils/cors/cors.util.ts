import * as Cors from 'cors'
import SERVER_CFG from '../../config/server.config'

const corsOptions:Cors.CorsOptions = {
  credentials: true,
  exposedHeaders: ['set-cookie'],
  optionsSuccessStatus: 200,
  origin: (origin, callback) => {
    console.log('🚀 ~ file: cors.util.ts ~ line 9 ~ origin', origin)
    console.log('🚀 ~ file: cors.util.ts ~ line 11 ~ SERVER_CFG.ALLOWED_ORIGINS', SERVER_CFG.ALLOWED_ORIGINS)
    if (SERVER_CFG.ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin)
      callback(null, true)
    else
      callback(new Error('Not allowed by CORS'))
  }
}

export default corsOptions
