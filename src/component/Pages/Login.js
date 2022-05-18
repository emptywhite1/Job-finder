import React from "react";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <Link style = {{color: "black"}} to = "/">
        <h2>go to home</h2>
      </Link>
    </div>
  );
};

export default Login;