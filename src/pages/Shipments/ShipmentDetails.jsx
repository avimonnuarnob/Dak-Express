import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ShipmentDetailsBody from './parts/ShipmentDetailsBody';
import ShipmentDetailsHeader from './parts/ShipmentDetailsHeader';

const ShipmentDetails = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = [
		{ title: 'Dashboard', link: 'dashboard' },
		{ title: 'Shipments', link: 'shipments' },
		{ title: id, link: `shipments/${id}`, current: true },
	];

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<ShipmentDetailsHeader />
			<ShipmentDetailsBody />
		</Box>
	);
};

export default ShipmentDetails;
