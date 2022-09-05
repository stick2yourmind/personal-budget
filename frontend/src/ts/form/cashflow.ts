export interface CreateCashflowForm{
  amount: number
  category: string
  details: string
  isExpense: string
}

export type EditCashflowForm = CreateCashflowForm
