import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({Component,...rest}) {
  return (
      isAuth ? 
      
      <Route {...rest} render={(props)=><Component {...props}/>} />
      :
      <Redirect to='/login' />
  );
}

export default PrivateRoute;