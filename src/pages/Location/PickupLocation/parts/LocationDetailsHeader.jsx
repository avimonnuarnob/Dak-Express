/* eslint-disable arrow-body-style */
import { Box, Chip } from '@mui/material';
import BackButton from '../../../../components/atoms/BackButton';
import HeaderTitle from '../../../../components/atoms/HeaderTitle';

const LocationDetailsHeader = () => {
	return (
		<Box
			sx={{
				display: {
					xs: 'block',
					sm: 'flex',
				},
				alignItems: 'center',
			}}
		>
			<HeaderTitle label="Location" />
			<Chip
				label="PICKUP LOCATION"
				sx={{
					ml: 2,
					fontSize: '10px',
					color: 'primary.white',
					bgcolor: 'secondary.main',
				}}
			/>
			<BackButton />
		</Box>
	);
};

export default LocationDetailsHeader;
