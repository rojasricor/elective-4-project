import CreditSection from './CreditSection'
import ExpensesAndIncomes from './ExpensesAndIncomes'
import SavingSection from './SavingSection'

export default function FinancialEducation () {
  return (
    <div className='py-20'>
      <SavingSection />
      <CreditSection />
      <ExpensesAndIncomes />
    </div>
  )
}
