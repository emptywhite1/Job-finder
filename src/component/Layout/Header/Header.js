import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";

export default props => (	
  	<Box py={10} bgcolor="secondary.main" color="white">
      <Grid container justify="center">

        <Grid item xs ={8}>
          	<Typography variant="h4"> Job Finder </Typography>	
        </Grid>

			<Grid item xs ={1}>
				<Button variant="contained" color="primary" disableElevation>My job</Button>
			</Grid>

			<Grid item xs ={1}>
				<Button variant="contained" color="primary" disableElevation>Post job</Button>
			</Grid>

      </Grid>
    </Box>
);