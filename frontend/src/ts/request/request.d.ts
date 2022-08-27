export interface FailedRequest{
  error: boolean
  message: string
}

export interface DataRegUserRequest{
  email: string
  name: string
  password: string
}

export interface DataLogUserRequest{
  email: string
  password: string
}
