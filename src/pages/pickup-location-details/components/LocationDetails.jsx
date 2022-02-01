/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import EditIcon from '@mui/icons-material/Edit';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ActionButton from '../../../components/atoms/ActionButton';

const useStyles = makeStyles((theme) => ({
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
}));

const LocationDetails = () => {
	const classes = useStyles();
	return (
		<Paper
			sx={{
				p: 2,
				mt: 3,
			}}
		>
			<Box
				sx={{
					py: 3,
					display: 'flex',
					borderBottom: (theme) => `1px solid ${theme.palette.secondary.main}`,
				}}
			>
				<Typography
					fontSize="24px"
					fontWeight="bold"
					sx={{
						color: 'status.pending',
					}}
				>
					Pickup Details
				</Typography>
				<Box
					sx={{
						ml: 'auto',
					}}
				>
					<ActionButton label="EDIT" color="status.pending" Icon={EditIcon} />
				</Box>
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
			</div>
		</Paper>
	);
};

export default LocationDetails;
