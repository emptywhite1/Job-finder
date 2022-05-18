import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import JobCard from "../Layout/Job/JobCard";
import SearchBar from "../Layout/SearchBar/SearchBar";
import Header from "../Layout/Header/Header";
import jobData from "../../dummyData";


function Home() {
  return (
    <div>
      <Header/>
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />

          {jobData.map(job => <JobCard key={job.id} {...job}/>)} 

          
        </Grid>

      </Grid>
    </div>
  );
};

export default Home;