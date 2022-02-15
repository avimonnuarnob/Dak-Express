/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Chip } from '@mui/material';

import HeaderTitle from '../../../../components/atoms/HeaderTitle';
import BackButton from '../../../../components/atoms/BackButton';

const LocationDetailsHeader = () => {
	return (
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
			}}
		>
			<HeaderTitle label="Location" />
			<Chip label="PICKUP LOCATION" color="secondary" sx={{ ml: 2, px: 2 }} />
			<BackButton
				redirectTo="/locations/pickup"
				label="Back To Pickup Locations"
			/>
		</Box>
	);
};

export default LocationDetailsHeader;
