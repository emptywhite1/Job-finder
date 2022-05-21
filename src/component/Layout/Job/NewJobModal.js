import React from "react";
import { Box, OutlinedInput, Select, MenuItem, Container, Grid, Typography, makeStyles, Button, TextField } from "@material-ui/core"
import { Link } from 'react-router-dom';
import { Description } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
      backgroundColor: "#f2f2f2",
      height: "150vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

  },

  descriptionBox: {
    height: 200,
    fontSize: "3em"
  }
}))

function NewJobModal() {
  const classes = useStyles()
  return (
    <Container className={classes.container} maxWidth>
      <Box paddingTop={6} marginTop={3} >
          <Grid container justify="center">
              <Grid item xl>
                <Link style={{ color: "black", textDecoration: "none" }} to="/">
                  <Typography variant="h3">Job Finder</Typography>
                </Link>
              </Grid>
          </Grid>

        <Container maxWidth="xl" fullWidth style={{ marginTop: "25px" }}>
            <Box px={5} py={3} bgcolor="white" color="black" style={{ width: "450px", borderRadius: "10px" }}>
              <Grid container justify="center" style={{ marginBottom: "50px" }}>
                <Typography variant='h5' style={{ fontWeight: "600" }}> Fill in your Job details </Typography>
              </Grid>
              <OutlinedInput placeholder="Job title*" fullWidth style={{ marginTop: "15px" }} ></OutlinedInput>

              <OutlinedInput placeholder="Company name*" fullWidth style={{ marginTop: "15px" }}></OutlinedInput>

              <OutlinedInput placeholder="Company url*" fullWidth style={{ marginTop: "15px" }}></OutlinedInput>

              <OutlinedInput placeholder="Salary*" fullWidth style={{ marginTop: "15px" }}></OutlinedInput>

              <Select variant="filled" defaultValue={"Full time"} fullWidth disableUnderline style={{ marginTop: "15px" }}>
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </Select>

              <Select variant="filled" defaultValue={"Remote"} fullWidth disableUnderline style={{ marginTop: "15px" }} >
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
              </Select>

              <Select variant="filled" defaultValue={""} fullWidth disableUnderline style={{ marginTop: "15px" }} >
                <MenuItem value="12th Pass">12th Pass</MenuItem>
                <MenuItem value="No Degree">In-office</MenuItem>
              </Select>

              <OutlinedInput fullWidth multiline = "true" classname = {classes.descriptionBox} placeholder="Job Description" style={{ marginTop: "15px" }}></OutlinedInput>

              <OutlinedInput placeholder="Confirm your password*" fullWidth style={{ marginTop: "15px" }}></OutlinedInput>

              <Link style = {{color: "black"}} to = "/">
              <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px",borderRadius: "20px" }} disableElevation>Submit</Button>
              </Link>
              
            </Box>
          </Container>
        </Box>
    </Container>
  );
};

export default NewJobModal;
