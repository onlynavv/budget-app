import React,{useContext,useState,useReducer} from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return(
        <AppContext.Provider value='hello'>{children}</AppContext.Provider>
    )
}

// custom hooks

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppProvider}