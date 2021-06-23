import React from 'react'
import { useGlobalContext } from './context'

const Remaining = () => {
    const {expenses,budget} = useGlobalContext()

    let totalExpenses = expenses.reduce((total,item)=>{
        return total = total + item.cost
    },0)
    return (
        <div className='row'>
            <p>Remaining: {budget - totalExpenses}</p>
        </div>
    )
}

export default Remaining
