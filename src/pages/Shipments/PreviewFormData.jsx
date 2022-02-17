import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BackButton from '../../components/atoms/BackButton';
import HeaderTitle from '../../components/atoms/HeaderTitle';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ParcelDetails from './parts/ParcelDetails';
import PickupDetails from './parts/PickupDetails';
import ReceiverDetails from './parts/ReceiverDetails';
import ShipmentDetailsCard from './parts/ShipmentDetailsCard';
import WhoWillPay from './parts/WhoWillPay';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Create New Shipment', link: 'new-shipment' },
	{ title: 'Preview & Proceed', link: 'new-shipment/preview', current: true },
];

const PreviewFormData = ({ setPreviewData }) => {
	// eslint-disable-next-line no-unused-vars
	const [shipmentData, setShipmentData] = useState(() => JSON.parse(localStorage.getItem('previewShipmentData')));
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch]);

	// if (!shipmentData) return <CircularProgress color="secondary" />;

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<HeaderTitle label="New Shipment" />
				<BackButton redirectTo="/shipments" label="Back to shipments" />
			</Box>
			<Box sx={{ mt: 3 }}>
				<PickupDetails pickup={shipmentData?.pickup} setPreviewData={setPreviewData} edit />
				<ReceiverDetails receiver={shipmentData?.receiver} setPreviewData={setPreviewData} edit />
				<ParcelDetails products={shipmentData?.products} setPreviewData={setPreviewData} edit />
				<ShipmentDetailsCard courier={shipmentData?.courier} setPreviewData={setPreviewData} edit />
				<WhoWillPay edit />
			</Box>
		</Box>
	);
};

export default PreviewFormData;
