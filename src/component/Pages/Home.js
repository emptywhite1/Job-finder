import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import JobCard from "../Layout/Job/JobCard";
import SearchBar from "../Layout/SearchBar/SearchBar";
import Header from "../Layout/Header/HomeHeader";
import jobData from "../../dummyData";
import { firestore } from "../../firebase/config";
import ViewJobModal from "../Layout/Job/ViewJobModal";
import axios from "axios";


function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewJob, setViewJob] = useState({});

  const fetchJobsMySql = async () => {
    axios.get("http://localhost:3001/jobs")
    .then((response) => {
      const tempJobs = response.data.map((job) => ({...job, createdAt: new Date(job.createdAt)}))
      setJobs(tempJobs)
      console.log(tempJobs)
    })
    
    setLoading(false)
  }

  const fetchJobs = async () => {
    const req = await firestore.collection("jobs")
      .orderBy("postedOn", "desc")
      .get()
    const tempJobs = req.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() }));
    console.log(tempJobs)
    setJobs(tempJobs);
    setLoading(false);
  }

  useEffect(() => {
    
    //fetchJobs()
    fetchJobsMySql()
  }, [])
  return (
    <div>
      <Header></Header>
      <ViewJobModal job={viewJob} closeModal={() => setViewJob({})} />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar jobs />
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