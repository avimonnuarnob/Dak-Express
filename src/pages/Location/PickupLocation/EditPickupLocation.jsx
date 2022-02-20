import { Box } from '@mui/material';
import { useEffect } from 'react';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import PickupLocationForm from './parts/PickupLocationForm';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Pickup Locations', link: 'locations/pickup' },
	{
		title: 'Add New Pickup Location',
		link: 'locations/pickup/new',
		current: true,
	},
];

const EditPickupLocation = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 5 }}>
			<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
				<HeaderTitle label="EDIT PICKUP LOCATION" />
				<BackButton redirectTo="/locations/pickup" label="Back To Pickup Locations" />
			</Box>
			<PickupLocationForm isEditable />
		</Box>
	);
};

export default EditPickupLocation;