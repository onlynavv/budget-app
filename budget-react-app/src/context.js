import React,{useContext,useState,useReducer} from 'react'

const AppContext = React.createContext();

const initialState = {
    budget:2000,
    expenses:[
        {id:1,name:'shopping',cost:50},
        {id:2,name:'canteen',cost:100},
        {id:3,name:'fuel',cost:200},
        {id:4,name:'hair cut',cost:80},
        {id:5,name:'electricity',cost:150}
    ]
}

const reducer = (state,action) => {
    if(action.type === 'ADD'){
        const newExpense = action.payload
        console.log(newExpense)
        return {...state,expenses:[...state.expenses,newExpense]}
    }
    if(action.type === 'DELETE'){
        const newList = state.expenses.filter((item)=>{
            return item.id !== action.payload
        })
        console.log(newList)
        return {...state,expenses:newList}
    }
}

const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer, initialState)
    return(
        <AppContext.Provider value={{...state,dispatch}}>{children}</AppContext.Provider>
    )
}

// custom hooks

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppProvider}