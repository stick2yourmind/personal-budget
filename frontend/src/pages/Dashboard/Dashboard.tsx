import { useEffect, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { useSelector } from 'react-redux'
import { getBalance } from '../api.reference'
import { Balance } from '../component.reference'
import { RootState } from '../store.reference'
import { DataDashboardResponse, SuccessfulResponse } from '../ts.reference'
import DashboardStyle from './DashboardStyle'

export interface Balance{
  amount: number
  type: string
}

const Dashboard = () => {
  const [controller, setController] = useState<AbortController>()
  const accessToken = useSelector((state:RootState) => state.user.accessToken)
  const { isLoading, error, data }:UseQueryResult<SuccessfulResponse<DataDashboardResponse[]>, Error> =
  useQuery<SuccessfulResponse<DataDashboardResponse[]>, Error>(['balance'],
    (ctrl) => getBalance({ accessToken, controllerSignal: ctrl?.signal }))

  useEffect(() => {
    const ctlr = new AbortController()
    setController(ctlr)

    return () => { controller && controller.abort() }
  }, [])

  return (
    <DashboardStyle>
      <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error</p>}
      {data && <Balance balance={data.data}/>}
      </>
    </DashboardStyle>
  )
}
export default Dashboard
