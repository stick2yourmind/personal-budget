import * as Yup from 'yup'

const onlyNumbers = /^[0-9]+$/
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
  isExpense: Yup.boolean()
    .typeError('isExpense must be a boolean')
    .required('isExpense is required'),
  userId: Yup.number()
    .typeError('userId must be a number')
    .required('userId is required')
})

/* -------------------------------------------------------------------------- */
/*                        GET CASHFLOW RECORD FROM BY ID                      */
/* -------------------------------------------------------------------------- */
export const getCashflowValidator = Yup.object({
  id: Yup.string()
    .matches(onlyNumbers, 'id must be a positive number')
    .required('id is required'),
  offset: Yup.string()
    .matches(onlyNumbers, 'id must be a positive number')
})
