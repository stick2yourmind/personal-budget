import CashflowCreatorStyle from './CashflowCreatorStyle'
import { add } from '../img.reference'
import { useEffect, useState } from 'react'
import { FormikHelpers } from 'formik'
import { CreateCashflowInit, CreateCashflowValidator } from '../utils.reference'
import { CreateCashflowForm } from '../../ts/form/cashflow'
import { useMutation, useQueryClient } from 'react-query'
import { DataCreateCashflowResponse, DataCreateCashflowRequest } from '../ts.reference'
import { postCreateCashflow } from '../../api'
import { useSelector } from 'react-redux'
import { RootState } from '../store.reference'
import { CashflowForm } from '../CashflowForm'

const CashflowCreator = () => {
  const [newCashflow, setNewCashflow] = useState<boolean>(false)
  const [controller, setController] = useState<AbortController>()
  const accessToken = useSelector((state:RootState) => state.user.accessToken)
  const queryClient = useQueryClient()
  const {
    mutate: createCashflowRequest, isLoading, error
  } = useMutation<DataCreateCashflowResponse, unknown, DataCreateCashflowRequest>((dataMutated) => {
    return postCreateCashflow({
      accessToken,
      controllerSignal: controller?.signal,
      dataReq: dataMutated
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
    setController(ctlr)

    return () => { controller && controller.abort() }
  }, [])

  const onSubmitNewCashflow = (formValues:CreateCashflowForm, action:FormikHelpers<CreateCashflowForm>) => {
    createCashflowRequest({
      amount: Number(formValues.amount),
      category: formValues.category,
      details: formValues.details,
      isExpense: formValues.isExpense === 'expense'
    })
    action.resetForm()
    // setNewCashflow(false)
  }

  // const CustomInputComponent = (props:{name: string, placeholder?: string}) => (
  //   <input className="form__input" type="text" {...props} />
  // )
  return (
    <CashflowCreatorStyle>
      <>
      {!newCashflow &&
      <button className='add__btn'>
        <img className='add__img' src={add} alt="add cashflow" onClick={() => setNewCashflow(true)}/>
      </button>
      }
      {newCashflow &&
        <CashflowForm<CreateCashflowForm>
          init={CreateCashflowInit}
          validator={CreateCashflowValidator}
          submitDispatch={(formValues, action) => onSubmitNewCashflow(formValues, action)}
          btnText="Create"
        />
        //   <Formik
        //   initialValues={CreateCashflowInit}
        //   validationSchema={CreateCashflowValidator}
        //   onSubmit={(values, action) => onSubmitNewCashflow(values, action)}
        // >
        //   <Form className='form__body'
        //   >
        //     <Field label='amount' name='amount' placeholder="Amount" as={CustomInputComponent}/>
        //     <div className='error'>
        //       <ErrorMessage className='error__msg' name="amount" component="p" />
        //     </div>
        //     <Field label='category' name='category' placeholder="Category" as={CustomInputComponent}/>
        //     <div className='error'>
        //       <ErrorMessage className='error__msg' name="category" component="p" />
        //     </div>
        //     <Field label='details' name='details' placeholder="Details" as={CustomInputComponent}/>
        //     <div className='error'>
        //       <ErrorMessage className='error__msg' name="details" component="p" />
        //     </div>
        //     <Field className='form__select' name="isExpense" id="isExpense" as="select">
        //       <option hidden value="type">Type</option>
        //       <option value="expense">Expense</option>
        //       <option value="income">Income</option>
        //     </Field>
        //     <div className='error'>
        //       <ErrorMessage className='error__msg' name="isExpense" component="p" />
        //     </div>
        //     <button className='form__submit-btn' type='submit'>Create</button>
        //   </Form>
        // </Formik>
        }
      {!isLoading && error &&
      <p className='errMsg'>
        {'An unexpected error has occurred, please try again later in order to create new cashflow records'}
      </p>
      }
        </>
    </CashflowCreatorStyle>
  )
}
export default CashflowCreator
