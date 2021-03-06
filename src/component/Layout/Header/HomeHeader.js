import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogout } from "../../../Redux/actions"
import { useSelector } from 'react-redux';

function HomeHeader(props) {
	const isLogged = useSelector(state => state.isLogged)
	const dispatch = useDispatch()

	const logout = () => {
		sessionStorage.removeItem("accessToken")
		
	}

	return (
		<div>
			{<Box bgcolor="secondary.main" color="white">
				<Grid container justify="flex-end" spacing={5} >
					<Grid item xs={2}>
						{isLogged ?
							<Link to="/login" style={{ color: "white", textDecoration: "none" }}>
								<Button onClick={function(event){ logout(); dispatch(setLogout())}} style={{ marginTop: "10px", color: "white" }}>Logout</Button>
							</Link>

							:

							<Link to="/login" style={{ color: "white", textDecoration: "none" }}>
								<Button style={{ marginTop: "10px", color: "white" }}>Login</Button>
							</Link>
						}


					</Grid>
				</Grid>
			</Box>}
			<Box pt={5} pb={10} bgcolor="secondary.main" color="white">
				<Grid container>
					{/* <Grid item xs={12}>
					<Typography>Logout</Typography>
				</Grid> */}

				</Grid>
				<Grid container justify="center" >

					<Grid item xs={9}>
						<Typography variant="h4"> Job Finder </Typography>
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