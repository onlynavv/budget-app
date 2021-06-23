import React from 'react'
import ExpenseItem from './ExpenseItem'
import {useGlobalContext} from './context'

const BudgetList = () => {

    const {expenses} = useGlobalContext()

    return (
        <div>
            <h3>Expenses</h3>
            <ul>
                {expenses.map((item)=>{
                    return <ExpenseItem key={item.id} {...item} />
                })}
            </ul>
        </div>
    )
}

export default BudgetList
