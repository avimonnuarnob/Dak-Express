import { Box } from '@mui/material';
import ShipmentDetailsBody from './parts/ShipmentDetailsBody';
import ShipmentDetailsHeader from './parts/ShipmentDetailsHeader';

const ShipmentDetails = () => (
	<Box
		sx={{
			py: 2,
			px: 3,
		}}
	>
		<ShipmentDetailsHeader />
		<ShipmentDetailsBody />
	</Box>
);

export default ShipmentDetails;
