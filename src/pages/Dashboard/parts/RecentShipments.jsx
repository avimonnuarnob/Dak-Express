/* eslint-disable arrow-body-style */
import { Box, Typography } from '@mui/material';
import SearchBar from '../../../components/atoms/SearchBar';
import ShipmentTable from './ShipmentsTable';

const RecentShipments = () => {
	return (
		<Box sx={{ mt: 3, color: (theme) => theme.palette.typography.main }}>
			<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
				<Typography
					sx={{
						typography: { sm: 'h5', xs: 'h6' },
						fontWeight: '600 !important',
					}}
				>
					Recent Shipment
				</Typography>

				<Box sx={{ ml: 'auto', marginTop: { xs: 2, sm: 0 } }}>
					<SearchBar />
				</Box>
			</Box>

			<Box sx={{ mt: 3 }}>
				<ShipmentTable />
			</Box>
		</Box>
	);
};

export default RecentShipments;
