import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

function SubHeader(props) {
  return (
    <div>

      <Box py={1} bgcolor="secondary.main" color="white">
        {/* <Grid container>
				<Grid item xs={12}>
					<Typography>Logout</Typography>
				</Grid>

			</Grid> */}
        <Grid container justify="center" >

          <Grid item xs={8}>
            <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
              <Typography variant="h4" > Job Finder </Typography>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Link to="/myjobs" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" disableElevation>My job</Button>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Link to="/postjob" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" disableElevation>Post job</Button>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Typography style={{ marginTop: "6px", color: "white", marginLeft: "40px" }} >Login</Typography>
            </Link>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default SubHeader;