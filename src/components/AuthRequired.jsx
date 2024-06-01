import React from 'react'
import { Outlet,  Navigate, useLocation } from 'react-router-dom'

const AuthRequired = () => {
    const isLoggedIn = localStorage.getItem("loggedin")
    const {pathname} = useLocation()

    
    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                state={{message: "You must log in first", from: pathname}}
                replace
            />)
    }
    return <Outlet />
}


export default AuthRequired