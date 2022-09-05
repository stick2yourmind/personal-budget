import { DataCreateCashflowRequest, DataEditCashflowRequest } from '../../ts'
import api from '../axios'

export interface BalanceParams{
  accessToken?: string
  controllerSignal?: AbortController['signal']
}
export interface CreateParams{
  accessToken?: string
  controllerSignal?: AbortController['signal']
  dataReq: DataCreateCashflowRequest
}
export interface DeleteParams{
  accessToken?: string
  controllerSignal?: AbortController['signal']
  id: number
}
export interface EditParams{
  accessToken?: string
  controllerSignal?: AbortController['signal']
  dataReq: DataEditCashflowRequest
  id: number
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

export const postCreateCashflow = async ({ controllerSignal, accessToken, dataReq }:CreateParams) => {
  const balanceEndpoint = import.meta.env.VITE_API_CASHFLOW_CREATE
  const res = await api({
    data: dataReq,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`
    },
    method: 'post',
    signal: controllerSignal,
    url: balanceEndpoint
  })
  return res.data
}

export const deleteCashflowById = async ({ controllerSignal, accessToken, id }:DeleteParams) => {
  const endpoint = import.meta.env.VITE_API_CASHFLOW_DELETE
  const res = await api({
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`
    },
    method: 'delete',
    signal: controllerSignal,
    url: endpoint + id
  })
  return res.data
}

export const EditCashflow = async ({ controllerSignal, accessToken, dataReq, id }:EditParams) => {
  const endpoint = import.meta.env.VITE_API_CASHFLOW_EDIT
  const res = await api({
    data: dataReq,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`
    },
    method: 'put',
    signal: controllerSignal,
    url: endpoint + id
  })
  return res.data
}
