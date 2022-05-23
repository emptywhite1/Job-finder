import React from "react";
import { Box, OutlinedInput, Select, MenuItem, Container, Grid, Typography, makeStyles, Button, TextField } from "@material-ui/core"
import { Link } from 'react-router-dom';
import FormTextField from "./FormTextField";
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormSelect from "./FormSelect";
import FormButton from './FormButton';
import axios from 'axios';
import {useHistory} from "react-router-dom"
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
  },

  formContainer: {
    width: "700px"

  }
}))

function NewJobModal() {
  const classes = useStyles()

  const WorkStyleList = {
    "In-office": "In-office",
    "Remote": "Remote"
  }

  const WorkTypeList = {
    "Full time": "Full time",
    "Part time": "Part time",
    "Contract": "Contract"
  }

  const DegreeList = {
    "No degree": "No degree",
    "12th pass": "12th pass",
    "Diploma": "Diploma",
    "Bachelor": "Bachelor"
  }

  const INITIAL_FORM_STATE = {
    title: "",
    workType: "",
    workStyle: "",
    location: "",
    companyName: "",
    salary: "",
    degree: "",
    companyUrl: "",
    jobDescription: ""
  };

  const FORM_VALIDATION = Yup.object().shape({
     title: Yup.string().required("Required"),
     workType: Yup.string().required("Required"),
     workStyle: Yup.string().required("Required"),
     location: Yup.string().required("Required"),
    companyName: Yup.string().required("Required"),
    salary: Yup.string().required("Required"),
    degree: Yup.string().required("Required"),
    companyUrl: Yup.string().required("Required"),
    jobDescription: Yup.string().required("Required")
  })
  let history = useHistory();
  const onSubmit = (data, actions) => {
    axios.post("http://localhost:3001/jobs", data, {
    }).then((response) => {
    }).then(alert("Job posted successfully"));
    
  };

  return (
    <Container className={classes.container} maxWidth>
      <Box >
        <Container maxWidth="md" fullWidth style={{ marginTop: "25px" }}>
          <Box px={5} py={3} bgcolor="white" color="black" style={{ width: "md", borderRadius: "10px" }}>

            <Grid container justify="center" style={{ marginBottom: "50px" }}>
              <Typography variant='h5' style={{ fontWeight: "600" }}> Fill in your Job details </Typography>
            </Grid>

            <Formik initialValues={INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit= {onSubmit}>
              <Form>
                <FormTextField name="title" placeholder="Job title*" />

                <FormTextField name="companyName" placeholder="Company name*" style={{ marginTop: "15px" }} />

                <FormTextField name="location" placeholder="Location*" style={{ marginTop: "15px" }} />

                <FormTextField name="companyUrl" placeholder="Company url*" style={{ marginTop: "15px" }} />

                <FormTextField name="salary" placeholder="Salary VND*" style={{ marginTop: "15px" }} />

                <Grid container direction="row" spacing={1} style={{ marginTop: "15px" }}>
                  <Grid item xs>
                    <FormSelect name="workType" label="Work Type" options={WorkTypeList} />
                  </Grid>

                  <Grid item xs>
                    <FormSelect name="workStyle" label="Work Style" options={WorkStyleList} />
                  </Grid>

                  <Grid item xs>
                    <FormSelect name="degree" label="Degree" options={DegreeList} />
                  </Grid>
                </Grid>

                <FormTextField name="jobDescription"
                  multiline="true"
                  classname={classes.descriptionBox}
                  placeholder="Job Description"
                  style={{ marginTop: "15px" }} />
                <FormButton>Submit </FormButton>
              </Form>
            </Formik>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default NewJobModal;
