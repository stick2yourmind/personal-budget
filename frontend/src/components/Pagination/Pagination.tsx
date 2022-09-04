import { useEffect, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { useSelector } from 'react-redux'
import { getPagination } from '../../api'
import { CashflowMutator } from '../component.reference'
import { RootState } from '../store.reference'
import { SuccessfulResponse, DataPaginationResponse } from '../ts.reference'
import PaginationStyle from './PaginationStyle'

const Pagination = () => {
  const [controller, setController] = useState<AbortController>()
  const accessToken = useSelector((state:RootState) => state.user.accessToken)
  const { isLoading, error, data }:UseQueryResult<SuccessfulResponse<DataPaginationResponse>, Error> =
  useQuery<SuccessfulResponse<DataPaginationResponse>, Error>(['pagination'],
    (ctrl) => getPagination({ accessToken, controllerSignal: ctrl?.signal }))

  const pageList = (records:DataPaginationResponse['records']) => {
    return (
    <ul className='record__list'>
      {
        records.map(record => <CashflowMutator key={record.id} cashflow={record} />)
      }
    </ul>)
  }
  useEffect(() => {
    const ctlr = new AbortController()
    setController(ctlr)

    return () => { controller && controller.abort() }
  }, [])

  return (
    <PaginationStyle>
      {isLoading && <p>Loading...</p>}
      {data && pageList(data.data.records)}
      {!isLoading && error &&
      <p className='errMsg'>
        {'An unexpected error has occurred, please try again later in order to get lastest data'}
      </p>
      }
    </PaginationStyle>
  )
}
export default Pagination
