import api from '../axios'

export interface BalanceParams{
  accessToken?: string
  controllerSignal?: AbortController['signal']
}

export const getBalance = async ({ controllerSignal, accessToken }:BalanceParams) => {
  const balanceEndpoint = import.meta.env.VITE_API_CASHFLOW_BALANCE
  const res = await api({
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`
    },
    method: 'get',
    signal: controllerSignal,
    url: balanceEndpoint
  })
  return res.data
}

export const getPagination = async ({ controllerSignal, accessToken }:BalanceParams) => {
  const balanceEndpoint = import.meta.env.VITE_API_CASHFLOW_PAGINATION
  const res = await api({
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`
    },
    method: 'get',
    signal: controllerSignal,
    url: balanceEndpoint
  })
  return res.data
}
