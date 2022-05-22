import React from "react";
import { Link } from 'react-router-dom';

import SubHeader from "../Layout/Header/SubHeader";
import NewJobModal from "../Layout/Job/NewJob/NewJobModal";

function PostJob() {
  return (
    <div>
      <SubHeader/>
      <NewJobModal/>
    </div>
  );
};

export default PostJob;