import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Layout/Header/Header";
import NewJobModal from "../Layout/Job/NewJobModal";

function PostJob() {
  return (
    <div>
      <NewJobModal/>
    </div>
  );
};

export default PostJob;