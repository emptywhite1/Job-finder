import { Box, CircularProgress, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Layout/Header/HomeHeader";
import JobCard from "../Layout/Job/JobCard";
import ViewJobModal from "../Layout/Job/ViewJobModal";
import SearchBar from "../Layout/SearchBar/SearchBar";


function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewJob, setViewJob] = useState({});

  const fetchJobsMySql = async () => {
    axios.get("http://localhost:3001/jobs")
    .then((response) => {
      const tempJobs = response.data.map((job) => ({...job, createdAt: new Date(job.createdAt)}))
      setJobs(tempJobs)
      
    })
    
    setLoading(false)
  }

  const handleSearch = (value) => {
    axios.post("http://localhost:3001/jobs/search", value)
    .then((response) => {
      const tempJobs = response.data.map((job) => ({...job, createdAt: new Date(job.createdAt)}))
      setJobs(tempJobs)
      
    })
    console.log(value)
  }
  

  useEffect(() => {
    
    fetchJobsMySql()
  }, [])
  return (
    <div>
      <Header></Header>
      <ViewJobModal job={viewJob} closeModal={() => setViewJob({})} />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar onChange = {(value) => handleSearch(value)} />
          {
            
            loading ? <Box display={"flex"} justifyContent={"center"}><CircularProgress /></Box>
              :
              jobs.map(job => <JobCard open={() => setViewJob(job)} key={job.id} {...job} />)
          }



        </Grid>

      </Grid>
    </div>
  );
};

export default Home;