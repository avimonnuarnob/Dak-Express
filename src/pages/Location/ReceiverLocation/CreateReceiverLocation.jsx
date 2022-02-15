/* eslint-disable prettier/prettier */
import { Box } from '@mui/material';
import { useEffect } from 'react';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import AddReceiverLocationForm from './parts/AddReceiverLocationForm';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Receiver Locations', link: 'locations/receiver' },
	{
		title: 'Add New Receiver Location',
		link: 'locations/receiver/new',
		current: true,
	},
];

const CreateReceiverLocation = () => {
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
				<HeaderTitle label="ADD NEW LOCATION" />
				<BackButton
					redirectTo="/locations/receiver"
					label="Back To Receiver Locations"
				/>
			</Box>
			<AddReceiverLocationForm />
		</Box>
	);
};

export default CreateReceiverLocation;
