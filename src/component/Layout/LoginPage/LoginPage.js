import React, { useState } from "react";
import { Box, OutlinedInput, Button, Container, Typography, Grid, makeStyles, Input,InputAdornment, IconButton, TextField  } from "@material-ui/core"
import {VisibilityOff, Visibility } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useHistory} from "react-router-dom"
import {setLogin} from "../../../Redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import Login from './../../Pages/Login';



const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f2f2f2",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    loginButton: {
        marginTop: "20px",
        borderRadius: "20px"
    }

}))

function LoginPage() {
    
    
    const dispatch = useDispatch()

    let history = useHistory();
    const classes = useStyles()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = () => {
        const data = {email : email, password : password}
        axios.post("http://localhost:3001/account/login", data).then((response) => {
            if(response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.getItem("accessToken", response.data);
                dispatch(setLogin())
                history.push("/")
                
            }
            
        });
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    return (

        <Container className={classes.container} maxWidth="xl">
            <Box paddingTop={6} marginTop={3} >
                <Grid container justify="center">
                    <Grid item xl>
                        <Link style={{ color: "black", textDecoration: "none" }} to="/login">
                            <Typography variant="h3">Job Finder</Typography>
                        </Link>

                    </Grid>
                </Grid>

                <Container maxWidth="xl" fullWidth style={{ marginTop: "25px" }}>
                    <Box px={5} py={3} bgcolor="white" color="black" style={{ width: "450px", borderRadius: "10px" }}>

                        <Grid container justify="center" style={{ marginBottom: "50px" }}>
                            <Typography variant='h5' style={{ fontWeight: "600" }}> Sign In </Typography>
                        </Grid>
                    {/* {email}    */}
                        <Typography variant='h6' style={{ marginTop: "5px" }}> Email </Typography>
                        <TextField variant = "outlined" type = "text" onChange = {(event) => {setEmail(event.target.value)}} color="black" fullWidth>
                        </TextField>
                    {/* {password}    */}
                        <Typography variant='h6' style={{ marginTop: "10px" }}> Password </Typography>
                        <TextField variant = "outlined"  onChange = {(event) => {setPassword(event.target.value)}} fullWidth
                        type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                        InputProps={{ 
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            )
                        }}

                        />

                            <Grid container justify="center"  >
                                <Button onClick={(login)} variant="contained" color="primary" fullWidth
                                    className={classes.loginButton} disableElevation>
                                    Login
                                </Button>
                            </Grid>

    

                        <Container maxWidth="sm">
                            <Box bgcolor="white" color="black" style={{ marginTop: "50px" }}>
                                <Grid container justify="center" >
                                    <Typography style={{ marginTop: "10px" }}>Haven't got an account? <Link to="/signup" style={{ color: "blue", textDecoration: "none" }}>
                                        <Typography style={{ marginBottom: "10px", fontWeight: "600" }}>Create a new one now!</Typography> </Link>
                                    </Typography>
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box>
        </Container>

    );
};

export default LoginPage;