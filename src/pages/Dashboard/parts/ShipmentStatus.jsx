/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const FAKE__DATA = [
	{
		label: 'Complete Shipment',
		count: 95,
	},
	{ label: 'Shipments in transit', count: 12 },
	{ label: 'Failed Shipment', count: 5 },
];

const cards = [
	{
		backgroundColor: 'primary.greenish',
		icon: ListAltOutlinedIcon,
		iconColor: 'secondary.lighter',
		iconBgColor:
			'linear-gradient(135deg, rgba(104, 129, 40, 0) 0%, rgba(104, 129, 40, 0.64) 97.35%)',
	},
	{
		backgroundColor: 'primary.orangish',
		icon: ListAltOutlinedIcon,
		iconColor: 'status.pending',
		iconBgColor:
			'linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 97.35%)',
	},
	{
		backgroundColor: 'primary.redish',
		icon: PriorityHighIcon,
		iconColor: 'status.failed',
		iconBgColor:
			'linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 97.35%)',
	},
];

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',

		padding: '2rem 1.5rem',
		gap: '1.5rem',
		justifyContent: 'space-between',
		borderRadius: '0 !important',
	},
	icon: {
		width: '4rem',
		aspectRatio: '1',
		p: 1,
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		justifySelf: 'center',
	},

	card: {
		display: 'grid',
		gridTemplateColumns: '1fr auto',

		flex: 1,

		boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
		gap: 8,
		alignItems: 'center',
		color: theme.palette.typography.main,
		padding: '2rem 1.75rem',
		borderRadius: 6,
	},
}));

// Card component
const ShipmentCard = ({
	backgroundColor,
	iconColor,
	Icon,
	iconBgColor,
	label,
	count,
}) => {
	const classes = useStyles();
	return (
		<Box className={classes.card} sx={{ backgroundColor }}>
			<div>
				<Typography variant="h6" fontWeight={600} sx={{ py: 1 }}>
					{label}
				</Typography>
				<Typography variant="h4" fontWeight={600}>
					{count}
				</Typography>
			</div>

			<Box className={classes.icon} sx={{ background: iconBgColor }}>
				<Icon sx={{ color: iconColor }} />
			</Box>
		</Box>
	);
};

ShipmentCard.propTypes = {
	Icon: PropTypes.elementType.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	iconColor: PropTypes.string.isRequired,
	iconBgColor: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
};

const ShipmentStatus = () => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.container}>
			{FAKE__DATA.map((data, index) => (
				<ShipmentCard
					key={`card-${index.toString()}`}
					backgroundColor={cards[index].backgroundColor}
					label={data.label}
					count={data.count}
					Icon={cards[index].icon}
					iconBgColor={cards[index].iconBgColor}
					iconColor={cards[index].iconColor}
				/>
			))}
		</Paper>
	);
};

export default ShipmentStatus;
