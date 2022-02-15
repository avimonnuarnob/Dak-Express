import { Box } from '@mui/material';
import { useEffect } from 'react';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import ReceiverLocationHeader from './parts/ReceiverLocationHeader';
import ReceiverLocationTable from './parts/ReceiverLocationTable';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Receiver Locations', link: 'locations/receiver', current: true },
];

const ReceiverLocations = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<ReceiverLocationHeader />
			<Box sx={{ mt: 5, borderRadius: 3, overflow: 'scroll' }}>
				<ReceiverLocationTable />
			</Box>
		</Box>
	);
};

export default ReceiverLocations;
