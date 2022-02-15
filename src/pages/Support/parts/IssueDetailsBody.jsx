/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Chip, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import IssueDetailsCard from './IssueDetailsCard';
import ReplayMessage from './ReplayMessage';

const useStyles = makeStyles((theme) => ({
	box: {
		padding: theme.spacing(2, 2),
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
	box__header__chip: {
		backgroundColor: `${theme.palette.status.success} !important`,
		color: `${theme.palette.primary.white} !important`,
		padding: `${theme.spacing(0, 5)} !important`,
		fontWeight: '600',
	},
}));

const IssueDetailsBody = ({ data }) => {
	const classes = useStyles();

	return (
		<>
			<Paper className={classes.box}>
				<Box className={classes.box__header}>
					<Typography variant="h5" fontWeight="bold">
						Issue Details
					</Typography>
					<Box sx={{ ml: 'auto' }}>
						<Chip label="Solved" className={classes.box__header__chip} />
					</Box>
				</Box>

				<IssueDetailsCard data={data} />
			</Paper>

			<ReplayMessage />
		</>
	);
};

export default IssueDetailsBody;
