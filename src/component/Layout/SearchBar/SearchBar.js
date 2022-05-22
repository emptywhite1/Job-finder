import React from "react";
import { Box, Button, Select, MenuItem, makeStyles, Grid, FilledInput } from '@material-ui/core'

import SearchInput from "./SearchInput";

const useStyles = makeStyles({
	wrapper: {
		backgroundColor: "white",
		display: "flex",
		boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
		borderRadius: "5px",
		"& > *": {
			flex: 1,
			height: "45px",
			margin: "8px",
		},
	},
})

export default props => {
	const classes = useStyles()
	return (
		<Box p={2} mt={-5} mb={2} className={classes.wrapper}>
			<Grid container>

				<Grid item xs={6}>
					<SearchInput placeholder={"Search for job title"} props />
					
				</Grid>

				<Grid item xs={4}>
					<Select variant="filled" defaultValue={"Remote"} fullWidth disableUnderline >
						<MenuItem value="Remote">Remote</MenuItem>
						<MenuItem value="In-office">In-office</MenuItem>
					</Select>
				</Grid>

				<Grid item xs={2}>
					<Button variant="contained" color="primary" fullWidth disableElevation style={{ minHeight: '49px', marginLeft: "5px" }}>
						Search
					</Button>
				</Grid>

			</Grid>
		</Box>
	)
}