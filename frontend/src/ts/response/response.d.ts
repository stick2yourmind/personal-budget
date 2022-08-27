export interface SuccessfulResponse <T>{
  data: T
  error: boolean
  statusCode: number
}
export interface FailedResponse{
  error: boolean
  message: string
  statusCode: number
}

export interface DataRegUserResponse{
  _id: string
  address: string
  email: string
  name: string
  phone: number
  registered: boolean
}
