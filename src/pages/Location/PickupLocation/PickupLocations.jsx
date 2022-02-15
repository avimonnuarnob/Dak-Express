import { Box } from '@mui/material';
import { useEffect } from 'react';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import LocationHeader from './parts/LocationHeader';
import LocationTable from './parts/LocationTable';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Pickup Locations', link: 'locations/pickup', current: true },
];

const PickupLocations = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<LocationHeader />
			<Box sx={{ mt: 5, borderRadius: 3 }}>
				<LocationTable />
			</Box>
		</Box>
	);
};

export default PickupLocations;
