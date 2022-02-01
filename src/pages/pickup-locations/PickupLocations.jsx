/* eslint-disable arrow-body-style */
import { Box } from '@mui/material';
import LocationHeader from './components/LocationHeader';
import LocationTable from './components/LocationTable';

const PickupLocations = () => {
	return (
		<Box
			sx={{
				py: 2,
				px: 3,
			}}
		>
			<LocationHeader />
			<Box
				sx={{
					mt: 5,
					borderRadius: 3,
					overflow: 'scroll',
				}}
			>
				<LocationTable />
			</Box>
		</Box>
	);
};

export default PickupLocations;
