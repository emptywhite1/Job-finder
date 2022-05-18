import React from "react";
import { Link } from 'react-router-dom';

function PostJob() {
  return (
    <div>
      <h1>Post your job</h1>
      <Link style = {{color: "black"}} to = "/">
        <h2>back to home</h2>
      </Link>
    </div>
  );
};

export default PostJob;