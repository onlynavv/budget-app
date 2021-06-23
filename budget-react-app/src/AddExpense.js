import React,{useState} from 'react'
import { useGlobalContext } from './context'

const AddExpense = () => {

    const [name,setName] = useState('')
    const [cost,setCost] = useState('')

    const {dispatch} = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newValue = {name,cost,id:new Date().getTime().toString()}
        dispatch({type:'ADD', payload:newValue})
    }

    return (
        <div>
            <h3>Add Expense</h3>
            <form>
                <div className='form-container'>
                    <label>Name</label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <label>Cost</label>
                    <input type='text' value={cost} onChange={(e)=>setCost(e.target.value)}></input>
                    <button onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
