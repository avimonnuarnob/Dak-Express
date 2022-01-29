/* eslint-disable arrow-body-style */
import { Box } from '@mui/material';
import LocationHeader from './components/LocationHeader';
import LocationTable from './components/LocationTable';

const PickupLocation = () => {
	return (
		<Box
			sx={{
				py: 2,
				px: 3,
			}}
		>
			<LocationHeader />
			<LocationTable />
		</Box>
	);
};

export default PickupLocation;
