import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./component/Layout/Header/Header";
import SearchBar from "./component/Layout/SearchBar/SearchBar";
import JobCard from "./component/Layout/Job/JobCard";
import Home from './component/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./component/Pages/Login";
import MyJob from './component/Pages/MyJob';
import PostJob from './component/Pages/PostJob';
import SignUp from './component/Pages/SignUp'

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={SignUp}/>
        <Route path={"/"} exact component={Home} />
        <Route path={"/myjobs"} component={MyJob} />
        <Route path={"/postjob"} component={PostJob} />
      </Switch>
    </Router>
  </ThemeProvider>
  );
};

export default App;
