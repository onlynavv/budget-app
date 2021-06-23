import React from 'react'
import { useGlobalContext } from './context'

const ExpenseTotal = () => {
    const {expenses} = useGlobalContext();

    let expensesTotal = expenses.reduce((total,item)=>{
        return total = total + item.cost
    },0)
    return (
        <div>
            <p>Spent so far: {expensesTotal}</p>
        </div>
    )
}

export default ExpenseTotal
