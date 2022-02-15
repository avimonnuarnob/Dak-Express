/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Chip } from '@mui/material';
import BackButton from '../../../../components/atoms/BackButton';
import HeaderTitle from '../../../../components/atoms/HeaderTitle';

const RecieverLocationDetailsHeader = () => {
	return (
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
			}}
		>
			<HeaderTitle label="Location" />
			<Chip label="RECEIVER LOCATION" color="secondary" sx={{ ml: 2, px: 2 }} />
			<BackButton
				redirectTo="/locations/receiver"
				label="Back To Receiver Locations"
			/>
		</Box>
	);
};

export default RecieverLocationDetailsHeader;
