import React from 'react'
import BudgetDisplay from './BudgetDisplay'
import BudgetList from './BudgetList'
import AddExpense from './AddExpense'
import Remaining from './Remaining'
import ExpenseTotal from './ExpenseTotal'

function App() {
  return (
    <div className="App">
      <BudgetDisplay />
      <Remaining />
      <ExpenseTotal />
      <BudgetList />
      <AddExpense />
    </div>
  );
}

export default App;
