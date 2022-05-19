import React from "react";
import { Box, OutlinedInput, Select, MenuItem, Container, Modal, Typography } from "@material-ui/core"


function NewJobModal() {
  return (
    <Container>
      <Typography variant='h4'>
        PostJob page
      </Typography>

      <OutlinedInput placeholder="Job title*" fullWidth style={{ marginTop: "15px" }} ></OutlinedInput>

      <OutlinedInput placeholder="Company name*" fullWidth style={{ marginTop: "15px" }}></OutlinedInput>

      <OutlinedInput placeholder="Company url*" fullWidth style={{ marginTop: "15px" }}></OutlinedInput>

      <OutlinedInput placeholder="Salary*" fullWidth style={{ marginTop: "15px" }}></OutlinedInput>

      <Select variant="filled" defaultValue={"Full time"} fullWidth disableUnderline style={{ marginTop: "15px" }}>
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>

      <Select variant="filled" defaultValue={"Remote"} fullWidth disableUnderline style={{ marginTop: "15px" }} >
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
      </Select>

      <Select variant="filled" defaultValue={"12th Pass"} fullWidth disableUnderline style={{ marginTop: "15px" }} >
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
      </Select>



    </Container>
  );
};

export default NewJobModal;
