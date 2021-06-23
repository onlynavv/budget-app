import React from 'react'
import { useGlobalContext } from './context'

const ExpenseItem = ({id,name,cost}) => {

    const {dispatch} = useGlobalContext()

    const removeItem = () => {
        dispatch({type:'DELETE', payload:id})
    }

    return (
        <li>
            <div>
                <p>{name}</p>
                <span>{cost}</span>
                <button onClick={removeItem}>close</button>
            </div>
        </li>
    )
}

export default ExpenseItem
