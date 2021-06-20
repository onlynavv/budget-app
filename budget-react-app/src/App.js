import React from 'react'
import BudgetDisplay from './BudgetDisplay.js'
import BudgetList from './BudgetList.js'
import AddExpense from './AddExpense'

function App() {
  return (
    <div className="App">
      <BudgetDisplay />
      <BudgetList />
      <AddExpense />
    </div>
  );
}

export default App;
