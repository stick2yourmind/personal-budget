import * as Yup from 'yup'

/* -------------------------------------------------------------------------- */
/*                          CREATE A CASHFLOW RECORD                          */
/* -------------------------------------------------------------------------- */

export const CreateCashflowValidator = Yup.object({
  amount: Yup.number()
    .typeError('amount must be a number')
    .required('amount is required'),
  category: Yup.string()
    .typeError('category must be an string of characters')
    .required('category is required'),
  details: Yup.string()
    .typeError('details must be an string of characters')
    .required('details are required'),
  isExpense: Yup.string()
    .oneOf(['expense', 'income'], "Type must be 'expense' or 'income'")
    .required('Type is required')
})

export const CreateCashflowInit = {
  amount: '',
  category: '',
  details: '',
  isExpense: ''
}
