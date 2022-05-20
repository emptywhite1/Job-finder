import React from "react";
import { Box, OutlinedInput, Button, Container, Typography, Grid } from "@material-ui/core"
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <Box px = {5} py = {10} bgcolor = "silver" color = "black">
                <Grid container justify="flex-end">
                    <Grid item xs={7}>
                    <Typography variant="h2">Job Finder</Typography>
                    </Grid>
                </Grid>
             
                <Container maxWidth="sm" style = {{marginTop: "50px"}}>
                    <Box px = {5} bgcolor="white" color="black">
                        <Grid container justify="center" style = {{marginBottom: "50px"}}>  
                            <Typography variant='h5' style = {{ fontWeight: "600" }}> Sign In </Typography> 
                        </Grid>
                        <Typography variant='h6' style = {{marginTop: "5px"}}> Email </Typography>
                        <OutlinedInput color = "black" fullWidth></OutlinedInput>
                        <Typography variant='h6' style = {{marginTop: "10px"}}> Password </Typography>
                        <OutlinedInput color = "black" fullWidth></OutlinedInput>

                        <Link style = {{color: "black", textDecoration: "none"}} to = "/">
                            <Grid container justify="center"  >
                                <Button variant="contained" color="primary" style={{ marginTop: "10px" }} disableElevation>Login</Button>
                            </Grid>
                        </Link>

                        <Link style = {{color: "black", textDecoration: "none"}} to = "/">
                            <Grid container justify="center" style={{ marginTop: "10px" }} >
                                <Button variant="contained" color="primary" disableElevation>Return to Home Page</Button>
                            </Grid>
                        </Link>
                        
                        <Container maxWidth="sm">
                            <Box bgcolor="white" color="black" style={{ marginTop: "50px" }}>
                                <Grid container justify="center" > 
                                    <Typography style={{ marginTop: "10px" }}>Haven't got an account? <Link to = "/signup" style = {{color: "blue", textDecoration: "none"}}>
                                        <Typography style={{ marginBottom: "10px", fontWeight: "600" }}>Create a new one now!</Typography> </Link> 
                                    </Typography>
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box> 
        </div>
    );
  };
  export default LoginPage;