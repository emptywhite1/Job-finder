import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

function HomeHeader(props) {

	const logout = () => {
		sessionStorage.removeItem("accessToken")
	}

	return (
		<div>
<<<<<<< HEAD
			<Box bgcolor="secondary.main" color="white">
				<Grid container justify="flex-end"  >
					<Grid item xs={2}>
						<Link to="/login" style={{ color: "white", textDecoration: "none" }}>
							<Typography style={{ marginTop: "10px", marginLeft: "55px" }}>Login</Typography>
=======
			{ <Box bgcolor="secondary.main" color="white">
				<Grid container justify="flex-end" spacing={5} >
					<Grid item xs={2}>
						<Link to="/login" style={{ color: "white", textDecoration: "none" }}>
							<Button variant = "contained" onClick={(logout)} style={{ marginTop: "10px" }}>Logout</Button>
>>>>>>> 788f9c1867eff7eed7401b589bae2a3ce8d2770c
						</Link>
					</Grid>
				</Grid>
			</Box> }
			<Box pt={5} pb={10} bgcolor="secondary.main" color="white">
				 <Grid container>
				{/* <Grid item xs={12}>
					<Typography>Logout</Typography>
				</Grid> */}

			</Grid> 
				<Grid container justify="center" >

					<Grid item xs={8}>
						<Typography variant="h4"> Job Finder </Typography>
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

				</Grid>
			</Box>
		</div>
	)
}

export default HomeHeader;