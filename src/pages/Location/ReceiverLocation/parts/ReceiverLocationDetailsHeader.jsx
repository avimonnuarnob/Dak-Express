/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackButton from '../../../../components/atoms/BackButton';
import HeaderTitle from '../../../../components/atoms/HeaderTitle';

const RecieverLocationDetailsHeader = () => {
	const {t} = useTranslation();

	return (
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
			}}
		>
			<HeaderTitle label={t('location')} />
			<Chip label={t('receiver-locations')} color="secondary" sx={{ ml: 2, px: 2 }} />
			<BackButton
				redirectTo="/locations/receiver"
				label={t('back-to-receiver-locations')}
			/>
		</Box>
	);
};

export default RecieverLocationDetailsHeader;
