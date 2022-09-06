import React, { useEffect, useState } from 'react'
import {
  CashflowMutatorProps, DataEditCashflowResponse, DataEditCashflowRequest,
  DataDeleteCashflowResponse
} from '../ts.reference'
import CashflowMutatorStyle from './CashflowMutatorStyle'
import { edit, remove } from '../img.reference'
import { CashflowForm } from '../CashflowForm'
import { EditCashflowForm } from '../../ts/form/cashflow'
import { EditCashflowInit, EditCashflowValidator } from '../utils.reference'
import { FormikHelpers } from 'formik'
import { useSelector } from 'react-redux'
import { useMutation, useQueryClient } from 'react-query'
import { RootState } from '../store.reference'
import { EditCashflow, deleteCashflowById } from '../../api'

const CashflowMutator:React.FC<CashflowMutatorProps> = ({ cashflow }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [controller, setController] = useState<AbortController>()
  const [deleteController, setDeleteController] = useState<AbortController>()
  const [deleteInProgress, setDeleteInProgress] = useState<boolean>(false)
  const accessToken = useSelector((state:RootState) => state.user.accessToken)
  const queryClient = useQueryClient()
  const {
    mutate: editCashflowRequest, isLoading, isSuccess
  } = useMutation<DataEditCashflowResponse, unknown, DataEditCashflowRequest>((dataMutated) => {
    return EditCashflow({
      accessToken,
      controllerSignal: controller?.signal,
      dataReq: dataMutated,
      id: cashflow.id
    })
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['pagination'])
      queryClient.invalidateQueries(['balance'])
    }
  })
  const {
    mutate: deleteCashflowRequest,
    isIdle: deleting
  } = useMutation<DataDeleteCashflowResponse, unknown, void>(() => {
    return deleteCashflowById({
      accessToken,
      controllerSignal: deleteController?.signal,
      id: cashflow.id
    })
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['pagination'])
      queryClient.invalidateQueries(['balance'])
    }
  })
  useEffect(() => {
    const ctlr = new AbortController()
    const deleteCtlr = new AbortController()
    setController(ctlr)
    setDeleteController(deleteCtlr)

    return () => {
      controller?.signal && controller.abort()
      deleteController?.signal && deleteController.abort()
    }
  }, [])
  useEffect(() => {
    if (isSuccess)
      setIsEdit(false)
  }, [isSuccess])
  const onSubmitNewCashflow = (formValues:EditCashflowForm, action:FormikHelpers<EditCashflowForm>) => {
    editCashflowRequest({
      amount: Number(formValues.amount),
      category: formValues.category,
      details: formValues.details
    })
    action.resetForm()
  }
  return (
    <CashflowMutatorStyle>
      {!isEdit &&
      <>{cashflow.id}
        <p className='record__amount'>amount: {cashflow.amount}</p>
        <p className='record__category'>category: {cashflow.category}</p>
        <p className='record__details'>details: {cashflow.details}</p>
        <p className='record__type'>type: {cashflow.isExpense ? 'Expense' : 'Income'}</p>
        <div className="record__mutation">
          <img className='record__edit-img' src={edit} alt="edit record" onClick={() => setIsEdit(true)}/>
          <img className='record__remove-img' src={remove} alt="remove record"
          onClick={() => {
            if (!deleteInProgress)
              deleteCashflowRequest()
            setDeleteInProgress(true)
          }}/>
        </div>
      </>
      }
      {isEdit &&
        <CashflowForm<EditCashflowForm>
          init={EditCashflowInit}
          validator={EditCashflowValidator}
          submitDispatch={(formValues, action) => onSubmitNewCashflow(formValues, action)}
          btnText="Edit"
          cashflow={{ ...cashflow, isExpense: cashflow.isExpense ? 'expense' : 'income' }}
          />
      }
      {isLoading && <p>Updating...</p>}
    </CashflowMutatorStyle>
  )
}
export default CashflowMutator
