import React from "react";
import { Link } from 'react-router-dom';

function MyJob() {
  return (
    <div>
      <h1>My saved jobs and applied jobs</h1>
      <Link style = {{color: "black"}} to = "/">
        <h2>go back home</h2>
      </Link>
    </div>
  );
};

export default MyJob;