import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({
    children
}) => {

    const user = false;
    const location = useLocation();

    if((location.pathname === "/user/all-links") && !user){
        return <Navigate to={"/login"} replace/>
    }

    if(!user){
        <Navigate to={"/"} replace/>
        return children;
    }

    return children;
  
}

export default ProtectedRoute