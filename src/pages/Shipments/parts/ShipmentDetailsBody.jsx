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

const FAKE_DATA = {
  "type": "Send",
  "pickup": {
    "firstName": "Avimonnu",
    "lastName": "Arnob",
    "businessName": "hello how are you",
    "phone": "8801798920355",
    "district": "Dhaka",
    "city": "Moghbazar",
    "zipcode": "1217",
    "address": "Moghbazar",
    "pickupDate": "2022-02-06T18:00:00.000Z",
    "pickupTime": null,
    "save": false
  },
  "receiver": {
    "type": "Personal",
    "firstName": "Avimonnu",
    "lastName": "Arnob",
    "businessName": "",
    "phone": "880122222222222",
    "district": "Dhaka",
    "city": "Moghbazar",
    "zipcode": "1217",
    "address": "Moghbazar",
    "save": false
  },
  "products": [
    {
      "productTitle": "asxs",
      "unitType": "oz",
      "weight": "5",
      "quantity": "4",
      "height": "",
      "width": "",
      "length": ""
    }
  ],
  "message": "Hello darkness my old friend",
  "noDangerousGoods": true,
  "courier": {
    "id": "3533317170362683",
    "courierImage": "http://dummyimage.com/117x100.png/ff4444/ffffff",
    "deliveryDate": "11/16/2022",
    "cost": 4
  }
}

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
			<ShipmentStatus/>
			<PickupDetails pickup={FAKE_DATA.pickup} />
			<ReceiverDetails receiver={FAKE_DATA.receiver} />
			<ParcelDetails products={FAKE_DATA.products}/>
			<ShipmentDetailsCard courier={FAKE_DATA.courier} />
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
