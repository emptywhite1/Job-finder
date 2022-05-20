import React from "react";
import { Box, Grid, Typography, Button, makeStyles} from "@material-ui/core"
import {differenceInCalendarDays} from "date-fns"
import { Link } from "react-router-dom";

const skills = ["Javascript", "React.js", "Node.js"]

const useStyles = makeStyles((theme) => ({
	wrapper: {
		border: "1px solid black",
		cursor: "pointer",
		transition: "0.3s",

		"&:hover": {
			boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
			borderLeft: "6px solid blue"
		}
	},

	companyName: {
		fontSize: "13px",
		backgroundColor: "cyan",
		padding: theme.spacing(0.75),
		borderRadius: "5px",
		display: "inline-block",
		fontWeight: 550
	},

	locationName: {
		fontSize: "13px",
		backgroundColor: "violet",
		padding: theme.spacing(0.75),
		borderRadius: "5px",
		display: "inline-block",
		margin: "3px",
		fontWeight: 550
	},

	salary: {
		fontSize: "13px",
		backgroundColor: "lightgreen",
		padding: theme.spacing(0.75),
		borderRadius: "5px",
		display: "inline-block",
		margin: "3px",
		fontWeight: 550
	},

	jobTag: {
		margin: theme.spacing(0.5),
		padding: theme.spacing(0.75),
		fontSize: "14px",
		borderRadius: "5px",
		marginTop: "35px",
		transistion: ".3s",
		cursor: "pointer",
		fontWeight: 550,
		backgroundColor: "black",
		color: "white",
	},
}))


function JobCard(props) {
	
	const classes = useStyles()
	return (
		<Box p={2} className={classes.wrapper} mt={1}>
			<Grid container alignItems="center">
				<Grid item xs={5}>
					<Typography variant="h6" >{props.title}</Typography>
					<Typography variant="subtitle2" className={classes.companyName}>{props.companyName}</Typography>
					<Typography variant="subtitle2" className={classes.locationName}>{props.location}</Typography>
					<Typography variant="subtitle2" className={classes.salary}>{Number(props.salary).toLocaleString()} VND</Typography>
				</Grid>

				<Grid item container xs={5}>
					<Grid item className={classes.jobTag}> {props.workType}  </Grid>
					<Grid item className={classes.jobTag}> {props.workStyle}  </Grid>
					<Grid item className={classes.jobTag}> {props.degree}  </Grid>
				</Grid>

				<Grid item container direction="column" alignItems="flex-end" xs>
					<Grid item>
						<Typography variant="caption">
							{differenceInCalendarDays(Date.now(), props.postedOn)} day ago
						</Typography>
					</Grid>
					<Grid item>
						<Box mt={2}>
								<Button variant="outlined" onClick={props.open}>Check</Button>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default JobCard;