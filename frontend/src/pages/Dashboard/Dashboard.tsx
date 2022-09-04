import { Balance, Pagination, CashflowCreator } from '../component.reference'
import DashboardStyle from './DashboardStyle'

export interface Balance{
  amount: number
  type: string
}

const Dashboard = () => {
  return (
    <DashboardStyle>
      <Balance />
      <Pagination />
      <CashflowCreator />
    </DashboardStyle>
  )
}
export default Dashboard
