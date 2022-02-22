import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import ReceiverLocationHeader from './parts/ReceiverLocationHeader';
import ReceiverLocationTable from './parts/ReceiverLocationTable';

const ReceiverLocations = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('receiver-locations'), link: 'locations/receiver', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<ReceiverLocationHeader />

			<Box sx={{ mt: 3 }}>
				<ReceiverLocationTable />
			</Box>
		</Box>
	);
};

export default ReceiverLocations;
