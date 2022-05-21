import React from "react";
import { Box, OutlinedInput, Button, Container, Typography, Grid, makeStyles, Input,InputAdornment, IconButton  } from "@material-ui/core"
import {VisibilityOff, Visibility } from "@material-ui/icons"
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f2f2f2",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    }
}))


function SignUpPage() {
    const classes = useStyles()

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    return (
        <Container className={classes.container} maxWidth="xl">
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
                        <Typography variant='h5' style={{ fontWeight: "600" }}> Sign Up </Typography>
                    </Grid>
                    <Typography variant='h6' style={{ marginTop: "5px" }}> Email </Typography>
                    <OutlinedInput color="black" fullWidth></OutlinedInput>
                    <Typography variant='h6' style={{ marginTop: "10px" }}> Password </Typography>
                    <OutlinedInput fullWidth
                            type={values.showPassword ? "text" : "password"}
                            onChange={handlePasswordChange("password")}
                            value={values.password}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    <Typography variant='h6' style={{ marginTop: "10px" }}> Confirm Password </Typography>
                    <OutlinedInput fullWidth
                            type={values.showPassword ? "text" : "password"}
                            onChange={handlePasswordChange("password")}
                            value={values.password}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />

                    <Link style={{ color: "black", textDecoration: "none" }} to="/login">
                        <Grid container justify="center"  >
                            <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px",borderRadius: "20px" }} disableElevation>Submit</Button>
                        </Grid>
                    </Link>

                    <Container maxWidth="sm">
                            <Box bgcolor="white" color="black" style={{ marginTop: "50px" }}>
                                <Grid container justify="center" >
                                    <Link to="/login" style={{ color: "blue", textDecoration: "none" }}>
                                        <Typography style={{ marginBottom: "10px", fontWeight: "600" }}>Return to login</Typography> 
                                    </Link>
                                </Grid>
                            </Box>
                        </Container>
                </Box>
            </Container>
        </Box>
    </Container>

    );
  };
  export default SignUpPage;