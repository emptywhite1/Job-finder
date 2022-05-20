import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Layout/Header/Header";
import NewJobModal from "../Layout/Job/NewJobModal";

function PostJob() {
  return (
    <div>
      <NewJobModal/>
      <Link style = {{color: "black"}} to = "/">
        <h2>back to home</h2>
      </Link>
    </div>
  );
};

export default PostJob;