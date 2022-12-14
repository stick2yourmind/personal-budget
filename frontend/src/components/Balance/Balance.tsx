import { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ChartProps, Pie } from 'react-chartjs-2'
import { DataDashboardResponse, SuccessfulResponse } from '../ts.reference'
import BalanceStyle from './BalanceStyle'
import { useSelector } from 'react-redux'
import { RootState } from '../store.reference'
import { useQuery, UseQueryResult } from 'react-query'
import { getBalance } from '../../api'

ChartJS.register(ArcElement, Tooltip, Legend)

const Balance = () => {
  const [amountIncome, setAmountIncome] = useState(0)
  const [amountExpense, setAmountExpense] = useState(0)
  const [dataPie, setDataPie] = useState<ChartProps<'pie'>['data']>()
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

  useEffect(() => {
    if (data?.data) {
      const amount = { expense: 0, income: 0 }
      for (let i = 0; i < data.data.length; i++)
        amount[data.data[i].type] = data.data[i].amount
      setAmountIncome(amount.income)
      setAmountExpense(amount.expense)
      setDataPie(() => {
        return {
          datasets: [
            {
              backgroundColor: [
                '#0d9488',
                '#be123c'
              ],
              borderColor: [
                '#134e4a',
                '#881337'
              ],
              borderWidth: 1,
              data: [amount.income, amount.expense],
              label: 'Balance data'
            }
          ],
          labels: ['Income', 'Expense']
        }
      })
    }
  }, [data])
  return (
    <BalanceStyle>
      {isLoading && <p>Loading...</p>}
      <h1 className='balance__title'>Balance</h1>
      <h2 className='balance__amount'>$ {amountIncome - amountExpense}</h2>
      {((amountExpense || amountIncome) && dataPie)
        ? <>
            <Pie data={dataPie} options={{
              color: 'whitesmoke',
              plugins: { legend: { labels: { font: { size: 15 } } }, tooltip: { bodyFont: { size: 15 } } }
            }} />
            <h3 className='balance__income'>Amount income: $ {amountIncome}</h3>
            <h3 className='balance__expense'>Amount expense: $ {amountExpense}</h3>
          </>
        : <h3 className='balance__empty'>No cashflow record could be found</h3>
      }
      {!isLoading && error &&
      <p className='errMsg'>
        {"An unexpected error has occurred, please try again later in order to get lastest balance's information"}
      </p>
      }
    </BalanceStyle>

  )
}
export default Balance
