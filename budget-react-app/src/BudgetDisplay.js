import React from 'react'
import { useGlobalContext } from './context'

const BudgetDisplay = () => {
    const {budget} = useGlobalContext()
    return (
        <div className='display-row'>
            <div>
                <p>Budget: {budget}</p>
            </div>
        </div>
    )
}

export default BudgetDisplay
