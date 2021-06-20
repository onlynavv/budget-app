import React,{useState} from 'react'

const AddExpense = () => {

    const [name,setName] = useState()
    const [cost,setCost] = useState()

    return (
        <div>
            <h3>Add Expense</h3>
            <form>
                <div className='form-container'>
                    <label>Name</label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <label>Cost</label>
                    <input type='text' value={cost} onChange={(e)=>setCost(e.target.value)}></input>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
