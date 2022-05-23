import React, { useState, useEffect } from "react";
import { Box, Button, makeStyles, Grid, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import axios from "axios";


const useStyles = makeStyles({

	wrapper: {
		backgroundColor: "white",
		display: "flex",
		boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
		borderRadius: "5px",
		
	},
})




function SearchBar(props) {
	const classes = useStyles()

	const [titleValue, setTitleValue] = useState("")
	const [locationValue, setLocationValue] = useState("")
	const [jobs, setJobs] = useState([])
	const [location, setLocation] = useState([])

	const fetchData = async () => {
		axios.get("http://localhost:3001/jobs")
			.then((response) => {
				const tempJobs = response.data.map((job) => ({ ...job, createdAt: new Date(job.createdAt) }))
				setJobs(tempJobs)
				const tempLocation = [
					...new Map(tempJobs.map((item) => [item.location, item])).values(),
				];

				setLocation(tempLocation)
			})


	}

	useEffect(() => {
		fetchData()

	}, [])


	return (

		<Box p={2} mt={-5} mb={2} className={classes.wrapper}>


			<Grid container spacing={2}>
				<Grid item xs={5} >
					<div>
						<Autocomplete
							id="title"
							onChange={(event, value) => {
								if (value != null) {
									setTitleValue(value.title)
								}
								else setTitleValue("")
							}}
							options={jobs}
							getOptionLabel={(option) => option.title}
							popupIcon={""}
							fullWidth
							renderInput={(params) => <TextField {...params} label="Job title" variant="outlined" />}
						/>
						
					</div>
				</Grid>

				<Grid item xs={5} >
					<div>
						<Autocomplete
							id="location"
							onChange={(event, value) => {
								if (value != null) {
									setLocationValue(value.location)
								}
								else setLocationValue("")
							}}
							options={location}
							getOptionLabel={(option) => option.location}
							popupIcon={""}
							fullWidth
							renderInput={(params) => <TextField {...params} label="Location" variant="outlined" />}
							
						/>
					</div>
				</Grid>


				<Grid item xs={2}>
					<Button
						onClick={() => props.onChange({locationValue, titleValue})}
						variant="contained"
						color="primary"
						fullWidth
						disableElevation
						style={{ minHeight: '55px' }}>
						Search
					</Button>
				</Grid>

			</Grid>
		</Box>
	)
}
export default SearchBar;