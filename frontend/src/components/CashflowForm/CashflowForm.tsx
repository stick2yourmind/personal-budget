import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik, FormikConfig } from 'formik'

export interface CashflowFormProps<K=unknown>{
  btnText: string
  cashflow?:K
  init: K
  submitDispatch: FormikConfig<K>['onSubmit']
  validator: Yup.SchemaOf<K>
}

function CashflowForm<K> ({ submitDispatch, validator, init, btnText, cashflow }:CashflowFormProps<K>) {
  const CustomInputComponent = (props:{name: string, placeholder?: string}) => (
    <input className="form__input" type="text" {...props} />
  )

  return (
    <Formik<K>
    initialValues={cashflow || { ...init, amount: '' }}
    validationSchema={validator}
    onSubmit={(values, action) => submitDispatch(values, action) }
  >
    <Form className='form__body'
    >
      {/* using input instead of Field to avoid it to be set as 0 when initilizing. In order to be able to show placeholder */}
      <Field name='amount' placeholder="Amount" type="text" as={CustomInputComponent} />
      <div className='error'>
        <ErrorMessage className='error__msg' name="amount" component="p" />
      </div>
      <Field label='category' name='category' placeholder="Category" as={CustomInputComponent} />
      <div className='error'>
        <ErrorMessage className='error__msg' name="category" component="p" />
      </div>
      <Field label='details' name='details' placeholder="Details" as={CustomInputComponent} />
      <div className='error'>
        <ErrorMessage className='error__msg' name="details" component="p" />
      </div>
      <Field className='form__select' name="isExpense" id="isExpense" as="select"
        disabled={cashflow}>
        <option hidden value="type">Type</option>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </Field>
      <div className='error'>
        <ErrorMessage className='error__msg' name="isExpense" component="p" />
      </div>
      <button className='form__submit-btn' type='submit'>{btnText}</button>
    </Form>
  </Formik>
  )
}
export default CashflowForm
