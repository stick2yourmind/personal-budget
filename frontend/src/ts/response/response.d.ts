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
