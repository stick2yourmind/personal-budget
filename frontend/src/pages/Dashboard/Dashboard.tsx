import { Balance, Pagination } from '../component.reference'
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
    </DashboardStyle>
  )
}
export default Dashboard
