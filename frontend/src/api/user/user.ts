import { SuccessfulResponse } from '../../ts/response'
import { DataLogin, EmailType } from '../../ts/user'
import api from '../axios'

export interface LoginParams{
  controllerSignal?: AbortController['signal']
  email: EmailType
  password: string
}

export interface RegisterParams{
  controllerSignal?: AbortController['signal']
  email: EmailType
  name: string
  password: string
}

export type Login = (params:LoginParams) => Promise<SuccessfulResponse<DataLogin>>

export const login = async ({ controllerSignal, email, password }:LoginParams) => {
  const authEndpoint = import.meta.env.VITE_API_USER_LOGIN
  const res = await api({
    data: { email, password },
    method: 'post',
    signal: controllerSignal,
    url: authEndpoint
  })
  return res.data
}

export const register = async ({ controllerSignal, email, password, name }:RegisterParams) => {
  const authEndpoint = import.meta.env.VITE_API_USER_REGISTER
  const res = await api({
    data: { email, name, password },
    method: 'post',
    signal: controllerSignal,
    url: authEndpoint
  })
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
