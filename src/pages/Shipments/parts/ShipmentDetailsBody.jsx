/* eslint-disable prettier/prettier */
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import ParcelDetails from './ParcelDetails';
import PickupDetails from './PickupDetails';
import ReceiverDetails from './ReceiverDetails';
import ShipmentDetailsCard from './ShipmentDetailsCard';
import ShipmentStatus from './ShipmentStatus';
import WhoWillPay from './WhoWillPay';

const useStyles = makeStyles((theme) => ({
	get__issue: {},
	get__issue__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	get__issue__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	get__issue__actions: {
		margin: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const ShipmentDetailsBody = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	return (
		<>
			<ShipmentStatus />
			<PickupDetails />
			<ReceiverDetails />
			<ParcelDetails />
			<ShipmentDetailsCard />
			<WhoWillPay />

			<div className={classes.get__issue__actions}>
				<Button
					type="button"
					variant="outlined"
					disabled={false}
					onClick={() => navigate(-1)}
					sx={{ ml: 'auto !important' }}
					className={classes.get__issue__back__button}
				>
					Cancel
				</Button>
				<Link
					to="/supports/new"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					<Button
						disabled={false}
						type="submit"
						variant="contained"
						className={classes.get__issue__button}
					>
						Any Issue? Get Support
					</Button>
				</Link>
			</div>
		</>
	);
};

export default ShipmentDetailsBody;
