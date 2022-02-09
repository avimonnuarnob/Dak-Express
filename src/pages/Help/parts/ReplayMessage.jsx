/* eslint-disable prettier/prettier */
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { alpha, Box, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import ReplyMessageForm from './ReplyMessageForm';

const useStyles = makeStyles((theme) => ({
	button: {},
	box: {
		padding: theme.spacing(4, 4),
		margin: theme.spacing(3, 0, 0, 0),
	},
	box__header: {
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
		margin: theme.spacing(0, 0, 3, 0),

		'& h5': {
			color: theme.palette.status.pending,
			margin: theme.spacing(0, 0, 3, 0),
		},
	},
	button__replay: {
		backgroundColor: `${alpha(theme.palette.secondary.light, 0.08)} !important`,
		color: `${theme.palette.typography.sec} !important`,
		padding: '0.875rem 2rem !important',
		marginLeft: 'auto !important',
	},
	button__support: {
		backgroundColor: `${theme.palette.secondary.light} !important`,
		color: `${theme.palette.primary.white} !important`,
		padding: '0.875rem 2rem !important',
	},
}));

const ReplayMessage = () => {
	const classes = useStyles();
	const [showMessageForm, setShowMessageForm] = useState(false);

	const toggleMessageForm = () => setShowMessageForm((curState) => !curState);

	return (
		<>
			<Paper className={classes.box}>
				<Box className={classes.box__header}>
					<Typography variant="h5" fontWeight="bold">
						Replay Message
					</Typography>
				</Box>

				<Grid container sx={{ mt: 3 }}>
					<Grid item md={3}>
						<Typography fontWeight="600">Message</Typography>
					</Grid>
					<Grid item md={8}>
						<Typography>
							Dear Mr. Hossain, Greetings from Cityscape Global Ltd and thank
							you for your e-mail. Please do not hesitate to contact us at our
							Contact Centre number 16240 (accessible from within Bangladesh) or
							+88 096127 16240 (accessible from overseas) from 9 AM to 9 PM
							(except public holidays) or email us at
							servicequalitydak@cityscapeglobal.net for any further information
							regarding any query. Assuring you of our best services always.
							Thanking you, Cityscape Global Ltd
						</Typography>
					</Grid>
				</Grid>
			</Paper>

			{!showMessageForm ? (
				<Box sx={{ display: 'flex', my: 3, gap: 2 }}>
					<Button
						variant="contained"
						startIcon={<ReplyAllIcon />}
						onClick={toggleMessageForm}
						className={classes.button__replay}
					>
						Reply
					</Button>

					<Button variant="contained" className={classes.button__support}>
						Get Another Support
					</Button>
				</Box>
			) : (
				<ReplyMessageForm toggleMessageForm={toggleMessageForm} />
			)}
		</>
	);
};

export default ReplayMessage;
