import { useEffect, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { useSelector } from 'react-redux'
import { getPagination } from '../../api'
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
        records.map(record =>
          <li key={record.id} className="record__item">
          <p className='record__amount'>amount: {record.amount}</p>
          <p className='record__category'>category: {record.category}</p>
          <p className='record__details'>details: {record.details}</p>
          <p className='record__type'>type: {record.isExpense ? 'expense' : 'income'}</p>
        </li>)
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
      {error && <p>error</p>}
      {data && pageList(data.data.records)}
    </PaginationStyle>
  )
}
export default Pagination
