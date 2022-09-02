import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ChartProps, Pie } from 'react-chartjs-2'
import { DataDashboardResponse } from '../ts.reference'
import BalanceStyle from './BalanceStyle'

ChartJS.register(ArcElement, Tooltip, Legend)

export interface BalanceParams{
  balance: DataDashboardResponse[]
}

const Balance:React.FC<BalanceParams> = ({ balance }) => {
  const [amountIncome, setAmountIncome] = useState(0)
  const [amountExpense, setAmountExpense] = useState(0)
  const [dataPie, setDataPie] = useState<ChartProps<'pie'>['data']>()
  useEffect(() => {
    const amount = { expense: 0, income: 0 }
    for (let i = 0; i < balance.length; i++)
      amount[balance[i].type] = balance[i].amount
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
            label: '# of Votes'
          }
        ],
        labels: ['Income', 'Expense']
      }
    })
  }, [balance])
  return (
    <BalanceStyle>
      <h1>Balance</h1>
      <h2>{amountIncome - amountExpense}</h2>
      {((amountExpense || amountIncome) && dataPie)
        ? <>
            <Pie data={dataPie} />
            <h3>Amount income: {amountIncome}</h3>
            <h3>Amount expense: {amountExpense}</h3>
          </>
        : <h3>No cashflow record could be found</h3>
      }
    </BalanceStyle>

  )
}
export default Balance
