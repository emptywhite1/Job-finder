import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

function PrivateRoute({Component,...rest}) {
  const isLogged = useSelector(state => state.isLogged)
  return (
      isLogged ? 
      
      <Route {...rest} render={(props)=><Component {...props}/>} />
      :
      <Redirect to='/login' />
  );
}

export default PrivateRoute;