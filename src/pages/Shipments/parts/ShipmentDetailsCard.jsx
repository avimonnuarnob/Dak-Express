/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
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
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	},
	card__item: {
		borderBottom: '1px solid #E5EBF0',
		'&:nth-last-child(-n+2)': {
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

const ShipmentDetailsCard = ({ edit, courier, setPreviewData }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.box}>
			<Box className={classes.box__header}>
				<Typography variant="h5" fontWeight="bold">
					Shipment Details
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
					Courier
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ gridColumn: '2 / -1' }}
				>
					<img src={courier?.courierImage} alt={courier?.id} width={60} />
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ borderBottom: 0 }}
				>
					Estimited Delivery Timeline
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ borderRight: { md: '1px solid #E5EBF0', sm: 0 }, borderBottom: 0 }}
				>
					{new Date(courier?.deliveryDate)?.toLocaleTimeString('bn-BD') || 'N/A'}
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					Shipping Fee
				</Typography>

				<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
					{`BDT ${courier?.cost || 'N/A'}`}
				</Typography>
			</div>
		</Paper>
	);
};

ShipmentDetailsCard.propTypes = {
	edit: PropTypes.bool,
	courier: PropTypes.objectOf(PropTypes.any),
	setPreviewData: PropTypes.func,
};

ShipmentDetailsCard.defaultProps = {
	edit: false,
	courier: {},
	setPreviewData: () => {},
};

export default ShipmentDetailsCard;
