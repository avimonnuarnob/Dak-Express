/* eslint-disable arrow-body-style */
import { Box, Chip } from '@mui/material';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';

const ShipmentDetailsHeader = () => {
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
			<HeaderTitle label="Shipment Detail: KLM7642138" />
			<Chip
				label="SEND A PACKAGE"
				sx={{
					ml: 2,
					fontSize: '12px',
					px: 2,
					color: 'primary.white',
					bgcolor: 'secondary.main',
				}}
			/>
			<BackButton redirectTo="/shipments" label="Back to shipments" />
		</Box>
	);
};

export default ShipmentDetailsHeader;
