import React, { useContext }from "react";
import { Context } from '../contexts/auth'
import { Navigate, Outlet } from 'react-router-dom';

const privateRoute = () => {
    const auth = CustomRoute(); 

    if(auth)
        return <Outlet /> ;

    return <Navigate to="/" />
}

function CustomRoute() {
  const { authenticated } = useContext(Context);
  return authenticated;
}

export default privateRoute;