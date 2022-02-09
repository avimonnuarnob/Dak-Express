/* eslint-disable prettier/prettier */
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import { Box, Button, Chip, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ApiTokenOverviewCard from './ApiTokenOverviewCard';

const useStyles = makeStyles((theme) => ({
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
	box__header__chip: {
		backgroundColor: `${theme.palette.status.success} !important`,
		color: `${theme.palette.primary.white} !important`,
		padding: `${theme.spacing(0, 5)} !important`,
		fontWeight: '600',
	},
	box__header__button: {
		marginRight: '15px !important',
		padding: `${theme.spacing(0.5, 2)} !important`,
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},
}));

const ApiTokenOverViewBody = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.box}>
			<Box className={classes.box__header}>
				<Typography variant="h5" fontWeight="bold">
					API Token
				</Typography>
				<Box sx={{ ml: 'auto' }}>
					<Button
						size="small"
						variant="outlined"
						startIcon={<ToggleOnOutlinedIcon />}
						className={classes.box__header__button}
					>
						Revoke
					</Button>
					<Chip label="Active" className={classes.box__header__chip} />
				</Box>
			</Box>
			<ApiTokenOverviewCard />
		</Paper>
	);
};

export default ApiTokenOverViewBody;
