import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBar from '../../components/atoms/SearchBar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import QuickLinks from './parts/QuickLinks';
import ShipmentChartStats from './parts/ShipmentChartStats';
import ShipmentsTable from './parts/ShipmentsTable';
import ShipmentStatus from './parts/ShipmentStatus';

const Dashboard = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const breadcrumbs = [{ title: t('dashboard'), link: 'dashboard', current: true }];

	useEffect(() => {
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ShipmentStatus />

			<Box sx={{ px: 3, py: 2 }}>
				<ShipmentChartStats />
				<QuickLinks />

				<Box sx={{ mt: 3, color: (theme) => theme.palette.typography.main }}>
					<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
						<Typography sx={{ typography: { sm: 'h5', xs: 'h6' }, fontWeight: '600 !important' }}>
							{t('dashboard-recent-shipments')}
						</Typography>
						<Box sx={{ ml: 'auto', marginTop: { xs: 2, sm: 0 } }}>
							<SearchBar />
						</Box>
					</Box>

					<Box sx={{ mt: 3 }}>
						<ShipmentsTable />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Dashboard;
