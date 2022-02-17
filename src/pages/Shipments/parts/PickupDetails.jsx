/* eslint-disable import/no-extraneous-dependencies */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

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

const PickupDetails = ({ edit, pickup, setPreviewData }) => {
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
						onClick={() => setPreviewData(false)}
					>
						Edit
					</Button>
				)}
			</Box>

			<div className={classes.card}>
				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					Full Name
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ gridColumn: '2 / -1' }}
				>
					{pickup?.firstName || ' '} {pickup?.lastName || ' '}
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ gridColumn: '1' }}
				>
					Business Name
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ borderRight: { md: '1px solid #E5EBF0', sm: 0 } }}
				>
					{pickup?.businessName || 'N/A'}
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					Mobile Number
				</Typography>

				<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
					{`+${pickup?.phone}` || 'N/A'}
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					Address
				</Typography>
				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ gridColumn: '2 / -1' }}
				>
					{`${pickup?.address || ' '}, ${pickup?.city || ' '}, ${pickup?.district || ' '}-${
						pickup?.zipcode || ' '
					}, Bangladesh`}
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ gridColumn: '1' }}
				>
					Pickup Date
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ borderRight: { md: '1px solid #E5EBF0', sm: 0 } }}
				>
					{new Date(pickup?.pickupDate)?.toLocaleDateString('bn-BD') || 'N/A'}
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					Pickup Time
				</Typography>

				<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
					{new Date(pickup?.pickupDate)?.toLocaleTimeString('bn-BD') || 'N/A'}
				</Typography>
			</div>
		</Paper>
	);
};

PickupDetails.propTypes = {
	edit: PropTypes.bool,
	pickup: PropTypes.objectOf(PropTypes.any),
	setPreviewData: PropTypes.func,
};

PickupDetails.defaultProps = {
	edit: false,
	pickup: {},
	setPreviewData: () => {},
};

export default PickupDetails;
