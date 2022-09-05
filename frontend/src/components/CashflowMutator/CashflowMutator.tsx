import React, { useState } from 'react'
import { CashflowMutatorProps } from '../ts.reference'
import CashflowMutatorStyle from './CashflowMutatorStyle'
import { edit, remove } from '../img.reference'

const CashflowMutator:React.FC<CashflowMutatorProps> = ({ cashflow }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  return (
    <CashflowMutatorStyle>
      {!isEdit &&
      <>
        <p className='record__amount'>amount: {cashflow.amount}</p>
        <p className='record__category'>category: {cashflow.category}</p>
        <p className='record__details'>details: {cashflow.details}</p>
        <p className='record__type'>type: {cashflow.isExpense ? 'Expense' : 'Income'}</p>
      </>
      }
      <div className="record__mutation">
        <img className='record__edit-img' src={edit} alt="edit record" />
        <img className='record__remove-img' src={remove} alt="remove record" />
      </div>
    </CashflowMutatorStyle>
  )
}
export default CashflowMutator
