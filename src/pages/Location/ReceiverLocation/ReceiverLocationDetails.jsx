import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import ReceiverLocationDetailsBody from './parts/ReceiverLocationDetailsBody';
import ReceiverLocationDetailsHeader from './parts/ReceiverLocationDetailsHeader';

const ReceiverLocationDetails = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = [
		{ title: 'Dashboard', link: 'dashboard' },
		{ title: 'Receiver Locations', link: 'locations/receiver' },
		{ title: id, link: `locations/receiver/${id}`, current: true },
	];

	useEffect(() => {
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<ReceiverLocationDetailsHeader />
			<ReceiverLocationDetailsBody />
		</Box>
	);
};

export default ReceiverLocationDetails;
