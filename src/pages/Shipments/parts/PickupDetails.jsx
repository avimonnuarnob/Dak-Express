/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	box: {
		padding: theme.spacing(4, 4),
		margin: theme.spacing(3, 0, 0, 0),
	},
	box__header: {
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.sec}`,
		margin: theme.spacing(0, 0, 3, 0),
		padding: theme.spacing(0, 0, 3, 0),
		alignItems: 'center',
		justifyContent: 'space-between',

		'& h5': {
			color: theme.palette.status.pending,
			// margin: theme.spacing(0, 0, 3, 0),
		},
	},
	card: {
		display: 'grid',
		gridTemplateColumns: '1fr',

		border: '1px solid #E5EBF0',
		marginTop: '1.5rem',
		borderRadius: '0.5rem',
		overflow: 'scroll',

		[theme.breakpoints.up('md')]: {
			// gridTemplateColumns: '1fr',
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	},
	card__item: {
		borderBottom: '1px solid #E5EBF0',
		'&: last-child': {
			borderBottom: 0,
		},
	},

	button: {},
	button__edit: {
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},
}));

const PickupDetails = ({ edit }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.box}>
			<Box className={classes.box__header}>
				<Typography variant="h5" fontWeight="bold">
					Pickup Details
				</Typography>
				{edit && (
					<Button
						size="small"
						variant="outlined"
						className={classes.button__edit}
						startIcon={<EditOutlinedIcon />}
					>
						Edit
					</Button>
				)}
			</Box>

			<div className={classes.card}>
				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
				>
					Full Name
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{
						gridColumn: '2 / -1',
					}}
				>
					Md Rafez Hossain
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{
						gridColumn: '1',
					}}
				>
					Business Name
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{
						borderRight: {
							md: '1px solid #E5EBF0',
							sm: 0,
						},
					}}
				>
					Cityscape Global Ltd
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
				>
					Mobile Number
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
				>
					+880 1324 249011
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
				>
					Address
				</Typography>
				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{
						gridColumn: '2 / -1',
					}}
				>
					Cityscape Tower, 8th Floor, 53 Gulshan Avenue, Gulshan-1, Dhaka-1212,
					Bangladesh.
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{
						gridColumn: '1',
					}}
				>
					Pickup Date
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{
						borderRight: {
							md: '1px solid #E5EBF0',
							sm: 0,
						},
					}}
				>
					22 Dec 2021
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
				>
					Pickup Time
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
				>
					08:50 PM
				</Typography>
			</div>
		</Paper>
	);
};

export default PickupDetails;
