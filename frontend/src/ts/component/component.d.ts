export interface AccordionProps{
  content: string,
  title: string
}

export interface RoleGuardProps{
  allowedRoles: number[]
}
/* -------------------------------------------------------------------------- */
/*                          CASHFLOWMUTATOR COMPONENT                         */
/* -------------------------------------------------------------------------- */
export interface CashflowMutatorProps {
  cashflow:{
    amount: number
    category: string
    details: string
    id: number
    isExpense: boolean
  }
}
