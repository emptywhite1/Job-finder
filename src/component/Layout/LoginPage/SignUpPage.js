import React, { useState } from "react";
import { Box, OutlinedInput, Button, Container, Typography, Grid, makeStyles, Input,InputAdornment, IconButton  } from "@material-ui/core"
import {VisibilityOff, Visibility } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { Formik, Form } from "formik"
import * as Yup from "yup"
import axios from 'axios';
import FormButton from '../Job/NewJob/FormButton';
import FormTextField from '../Job/NewJob/FormTextField';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f2f2f2",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    }
}))

const INITIAL_FORM_STATE = {
    email: "",
    password: "",

};

const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),

})

const onSubmit = (data) => {
    axios.post("http://localhost:3001/account", data).then((response) => {
      console.log("IT WORKED");
    });
};


function SignUpPage() {
    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
                    <Formik initialValues={INITIAL_FORM_STATE}
                    validationSchema={FORM_VALIDATION}
                    onSubmit= {onSubmit}>
                    <Form>
                        <Typography variant='h6' style={{ marginTop: "5px" }}> Email </Typography>
                        <FormTextField name = "email" color="black" fullWidth></FormTextField>
                        <Typography variant='h6' style={{ marginTop: "10px" }}> Password </Typography>
                        <FormTextField name = "password" fullWidth
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
                            <FormButton>Submit</FormButton>
                        </Grid>
                        
                    </Form>
                    </Formik>
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