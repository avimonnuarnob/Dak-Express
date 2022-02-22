/* eslint-disable arrow-body-style */
import { Box, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';

const ShipmentDetailsHeader = () => {
	const { t } = useTranslation();

	return (
		<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
			<HeaderTitle label={`${t('shipment-details')} : KLM7642138`} />
			<Chip
				label={t('send-a-package')}
				sx={{ ml: 2, fontSize: '12px', px: 2, color: 'primary.white', bgcolor: 'secondary.main' }}
			/>
			<BackButton redirectTo="/shipments" label={t('back-to-shipments')} />
		</Box>
	);
};

export default ShipmentDetailsHeader;
