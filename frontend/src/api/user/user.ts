import { SuccessfulResponse } from '../../ts/response'
import { DataLogin, EmailType } from '../../ts/user'
import api from '../axios'

export interface GetAuthParams{
  email: EmailType
  password: string
  signal: AbortController
}

export type GetAuth = (params:GetAuthParams) => Promise<SuccessfulResponse<DataLogin>>

export const getAuth = async ({ signal, email, password }:GetAuthParams) => {
  console.log('🚀 ~ file: user.ts ~ line 14 ~ getAuth ~ email', email)
  console.log('🚀 ~ file: user.ts ~ line 14 ~ getAuth ~ password', password)
  const authEndpoint = import.meta.env.VITE_API_USER_LOGIN
  const res = await api({ data: { email, password }, method: 'post', url: authEndpoint })
  console.log('🚀 ~ file: user.ts ~ line 18 ~ getAuth ~ res', res)
  return res.data
}

// class UserAPI {
//   async getAuth ({ email, password }:GetAuthParams):Response {
//     try {
//       const controller = new AbortController()
//       const endpoint = import.meta.env.VITE_API_USER_LOGIN
//       const res:AxiosResponse<SuccessfulResponse<DataLogin>> = await axiosInstance(endpoint, {
//         data: { email, password },
//         signal: controller.signal
//       })
//       return { abort: () => controller.abort(), response: res.data }
//     } catch (err) {
//       if (err instanceof AxiosError) {
//         if (err.response)
//           return {
//             data: err.response.data,
//             error: true,
//             statusCode: err.response.status
//           }
//         if (err.request)
//           return {
//             error: true,
//             message: 'Request error: ' + err.request
//           }
//       }
//       return {
//         error: true,
//         message: 'Error while trying to auth'
//       }
//     }
//   }
// }

// export default UserAPI
