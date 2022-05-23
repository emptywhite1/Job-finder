import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Home from './component/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./component/Pages/Login";
import MyJob from './component/Pages/MyJob';
import PostJob from './component/Pages/PostJob';
import SignUp from './component/Pages/SignUp'
import PrivateRoute from './component/Route/PrivateRoute';


function App() {

  return (
  
  <ThemeProvider theme={theme}>
    
    <Router>
      <Switch>
        <Route path={"/login"} component={Login} />
        <PrivateRoute path={"/signup"} component={SignUp}/>
        <PrivateRoute path={"/"} exact component={Home} />
        <PrivateRoute path={"/myjobs"} component={MyJob} />
        <PrivateRoute path={"/postjob"} component={PostJob} />
      </Switch>
    </Router>
  </ThemeProvider>
  );
};

export default App;
