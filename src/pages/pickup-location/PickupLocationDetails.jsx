/* eslint-disable arrow-body-style */
import { Box } from '@mui/material';
import LocationDetails from './components/LocationDetails';
import LocationDetailsHeader from './components/LocationDetailsHeader';

const PickupLocationDetails = () => {
	return (
		<Box
			sx={{
				py: 2,
				px: 3,
			}}
		>
			<LocationDetailsHeader />
			<LocationDetails />
		</Box>
	);
};

export default PickupLocationDetails;
