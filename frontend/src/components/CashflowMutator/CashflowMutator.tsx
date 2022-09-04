import React from 'react'
import { CashflowMutatorProps } from '../ts.reference'
import CashflowMutatorStyle from './CashflowMutatorStyle'

const CashflowMutator:React.FC<CashflowMutatorProps> = ({ cashflow }) => {
  return (
    <CashflowMutatorStyle>
          <p className='record__amount'>amount: {cashflow.amount}</p>
          <p className='record__category'>category: {cashflow.category}</p>
          <p className='record__details'>details: {cashflow.details}</p>
          <p className='record__type'>type: {cashflow.isExpense ? 'Expense' : 'Income'}</p>
    </CashflowMutatorStyle>
  )
}
export default CashflowMutator
