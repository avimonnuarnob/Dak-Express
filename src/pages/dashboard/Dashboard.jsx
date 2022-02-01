import { Box, Typography } from '@mui/material';
import SearchBar from '../../components/atoms/SearchBar';
import QuickLinks from './components/QuickLinks';
import ShipmentChartStats from './components/ShipmentChartStats';
import ShipmentStatus from './components/ShipmentStatus';
import ShipmentTable from './components/ShipmentTable';

const Dashboard = () => (
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
					<ShipmentTable />
				</Box>
			</Box>
		</Box>
	</>
);

export default Dashboard;
