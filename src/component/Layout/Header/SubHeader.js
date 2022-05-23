import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogout } from "../../../Redux/actions"

function SubHeader(props) {
  const dispatch = useDispatch()
  
  const logout = () => {
		sessionStorage.removeItem("accessToken")
		
	}
  return (
    <div>

      <Box py={1} bgcolor="secondary.main" color="white">
        <Grid container>
				

			</Grid>
        <Grid container justify="center" >

          <Grid item xs={9}>
            <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
              <Typography variant="h4" > Job Finder </Typography>
            </Link>
          </Grid>

          

          <Grid item xs={1}>
            <Link to="/postjob" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" disableElevation>Post job</Button>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button onClick={function(event){ logout(); dispatch(setLogout())}} style={{color: "white", marginLeft: "40px" }} >Logout</Button>
            </Link> 
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default SubHeader;