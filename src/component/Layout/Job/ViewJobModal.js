import React from 'react'
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Typography, Button, IconButton, CircularProgress } from "@material-ui/core"
import {Close as CloseIcon} from "@material-ui/icons"
import {format} from "date-fns"

const useStyles = makeStyles({
    info:{
        '& > *': {
            margin: '5px'
        }
    }
})

export default (props) => {
    const classes = useStyles()
    return(
        <Dialog open = {!!Object.keys(props.job).length} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent = "space-between" alignItems = "center">
                    {props.job.title} @ {props.job.companyName} 
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent></DialogContent>
            <Box>
                <Box className = {classes.info} paddingLeft = {3} display="flex">
                    <Typography variant='h7' marginLeft = "50px">Posted On:</Typography>
                    <Typography variant='h7'> 
                    {props.job.postedOn && format(props.job.postedOn, "dd/MM/yyyy HH:MM")} 
                    </Typography>
                </Box>

                <Box className = {classes.info} paddingLeft = {3} display="flex">
                    <Typography variant='h7' marginLeft = "50px">Company Name:</Typography>
                    <Typography variant='h7'> {props.job.companyName} </Typography>
                </Box>

                <Box className = {classes.info} paddingLeft = {3} display="flex">
                    <Typography variant='h7' marginLeft = "50px">Company Website:</Typography>
                    <Typography variant='h7'> {props.job.companyUrl} </Typography>
                </Box>

                <Box className = {classes.info} paddingLeft = {3} display="flex">
                    <Typography variant='h7' marginLeft = "50px">Job Type:</Typography>
                    <Typography variant='h7'> {props.job.workType}, {props.job.workStyle}  </Typography>
                </Box>

                <Box className = {classes.info} paddingLeft = {3} display="flex">
                    <Typography variant='h7' marginLeft = "50px">Job Description:</Typography>
                    <Typography variant='h7'> {props.job.jobDescription}  </Typography>
                </Box>

                <Box className = {classes.info} paddingLeft = {3} display="flex">
                    <Typography variant='h7' marginLeft = "50px">Job Location:</Typography>
                    <Typography variant='h7'> {props.job.location} </Typography>
                </Box>
                
                <Box className = {classes.info} paddingLeft = {3} display="flex">
                    <Typography variant='h7' marginLeft = "50px">Job Requirement:</Typography>
                    <Typography variant='h7'> {props.job.degree} </Typography>
                </Box>

                <Box className = {classes.info} paddingLeft = {3} display="flex">
                    <Typography variant='h7' marginLeft = "50px">Job Salary:</Typography>
                    <Typography variant='h7'> {props.job.salary}VND </Typography>
                </Box>
            </Box>
            <DialogActions>
                <Button variant = "outlined" component = "a" href={props.job.companyUrl} target = "_Blank"> Apply </Button>
            </DialogActions>
        </Dialog>
    );
}