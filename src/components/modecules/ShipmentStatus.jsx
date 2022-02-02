import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	status: {},
	status__transit: {
		background: `${theme.palette.status.pending} !important`,
		color: `${theme.palette.typography.white} !important`,
	},
	status__delivered: {
		background: `${theme.palette.status.success} !important`,
		color: `${theme.palette.typography.white} !important`,
	},
	status__failed: {
		padding: '11px !important',
		background: `${theme.palette.status.failed} !important`,
		color: `${theme.palette.typography.white} !important`,
	},
}));

const ShipmentStatus = ({ label = 'none' }) => {
	const classes = useStyles();

	const handleClick = () => null;

	switch (label) {
		case 'intransit':
			return <Chip className={classes.status__transit} label="In Transit" onClick={handleClick} />;

		case 'delivery':
			return <Chip className={classes.status__delivered} label="Delivered" onClick={handleClick} />;

		case 'failed':
			return <Chip className={classes.status__failed} label="Failed" onClick={handleClick} />;

		default:
			return <Chip className={classes.status} label="None" onClick={handleClick} />;
	}
};

export default ShipmentStatus;
