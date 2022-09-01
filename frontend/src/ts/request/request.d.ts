export interface FailedRequest{
  error: boolean
  message: string
}

export interface DataRegUserRequest{
  email: string
  name: string
  password: string
}

export interface DataLoginUserRequest{
  email: string
  password: string
}
