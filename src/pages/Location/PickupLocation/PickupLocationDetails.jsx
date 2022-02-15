import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import LocationDetails from './parts/LocationDetails';
import LocationDetailsHeader from './parts/LocationDetailsHeader';

const PickupLocationDetails = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = [
		{ title: 'Dashboard', link: 'dashboard' },
		{ title: 'Pickup Locations', link: 'locations/pickup' },
		{ title: id, link: `locations/pickup/${id}`, current: true },
	];

	useEffect(() => {
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<LocationDetailsHeader />
			<LocationDetails />
		</Box>
	);
};

export default PickupLocationDetails;
