import * as Yup from 'yup'

/* -------------------------------------------------------------------------- */
/*                          CREATE A CASHFLOW RECORD                          */
/* -------------------------------------------------------------------------- */

export interface CreateCashflowSchema{
  amount: number
  category: string
  details: string
  isExpense: string
}

export type CreateCashflowValidatorType = Yup.SchemaOf<CreateCashflowSchema>

export interface CreateCashflowInitType{
  amount: number
  category: string
  details: string
  isExpense: string
}
export const CreateCashflowValidator:CreateCashflowValidatorType = Yup.object({
  amount: Yup.number()
    .typeError('amount must be a number')
    .positive('amount must be a positive number')
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

export const CreateCashflowInit:CreateCashflowInitType = {
  amount: 0,
  category: '',
  details: '',
  isExpense: ''
}

export const EditCashflowInit = CreateCashflowInit

export const EditCashflowValidator = CreateCashflowValidator
