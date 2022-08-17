import { CustomError } from './../error/customError.utils'
import jwt from 'jsonwebtoken'
import { AccessTokenType, UserIdType } from '../../ts/models'
import JWT_CFG from '../../config/jwt.config'
import STATUS from '../constants/httpStatus.utils'

type JwtVerifier = ({ accessToken }:{accessToken:AccessTokenType}) => { id:UserIdType }
interface DecodedJWT {id:string}

export const accessTokenVerifier:JwtVerifier = ({ accessToken }) => {
  if (typeof accessToken === 'string' && typeof JWT_CFG.ACCESS_TOKEN_SECRET === 'string') {
    const decoded = jwt.verify(
      accessToken,
      JWT_CFG.ACCESS_TOKEN_SECRET
    )
    return { id: Number((decoded as DecodedJWT).id) }
  }
  throw new CustomError(
    JWT_CFG.ACCESS_TOKEN_SECRET ? 'Missing accessToken' : 'Error while verifiying access token',
    { detailMsg: 'Missing access token or access token secret' },
    JWT_CFG.ACCESS_TOKEN_SECRET ? STATUS.UNAUTHORIZED : STATUS.SERVER_ERROR)
}
