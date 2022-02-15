import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import SearchBar from '../../components/atoms/SearchBar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import QuickLinks from './parts/QuickLinks';
import ShipmentChartStats from './parts/ShipmentChartStats';
import ShipmentsTable from './parts/ShipmentsTable';
import ShipmentStatus from './parts/ShipmentStatus';

const breadcrumbs = [{ title: 'Dashboard', link: 'dashboard', current: true }];

const Dashboard = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ShipmentStatus />

			<Box sx={{ p: 2, mx: 1 }}>
				<ShipmentChartStats />

				<QuickLinks />

				<Box
					sx={{
						mt: 3,
						color: (theme) => theme.palette.typography.main,
					}}
				>
					<Box
						sx={{
							display: {
								xs: 'block',
								sm: 'flex',
							},
							alignItems: 'center',
						}}
					>
						<Typography
							sx={{
								typography: { sm: 'h5', xs: 'h6' },
								fontWeight: '600 !important',
							}}
						>
							Recent Shipment
						</Typography>
						<Box
							sx={{
								ml: 'auto',
								marginTop: {
									xs: 2,
									sm: 0,
								},
							}}
						>
							<SearchBar />
						</Box>
					</Box>

					<Box
						sx={{
							mt: 3,
							borderRadius: 3,
							overflow: 'scroll',
						}}
					>
						<ShipmentsTable />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Dashboard;
