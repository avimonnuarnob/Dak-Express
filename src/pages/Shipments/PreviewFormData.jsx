import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ParcelDetails from './parts/ParcelDetails';
import PickupDetails from './parts/PickupDetails';
import ReceiverDetails from './parts/ReceiverDetails';
import ShipmentDetailsCard from './parts/ShipmentDetailsCard';
import WhoWillPay from './parts/WhoWillPay';

const useStyles = makeStyles((theme) => ({
	preview: {},
	preview__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	preview__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	preview__actions: {
		// margin: '10px auto !important',
		marginLeft: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Create New Shipment', link: 'new-shipment' },
	{ title: 'Preview & Proceed', link: 'new-shipment/preview', current: true },
];

const PreviewFormData = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const classes = useStyles();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 2 }}>
			<PageTitlebar title="New Shipment" />

			<Box sx={{ py: 2, px: 3 }}>
				<PickupDetails edit />
				<ReceiverDetails edit />
				<ParcelDetails edit />
				<ShipmentDetailsCard edit />
				<WhoWillPay edit />

				<div className={classes.preview__actions}>
					<Button
						type="button"
						variant="outlined"
						disabled={false}
						sx={{ ml: 'auto !important' }}
						className={classes.preview__back__button}
					>
						Cancel
					</Button>

					<Button disabled={false} type="submit" variant="contained" className={classes.preview__button}>
						Submit
					</Button>
				</div>
			</Box>
		</Box>
	);
};

export default PreviewFormData;
