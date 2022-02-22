import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackButton from '../../../components/atoms/BackButton';
import CopyToClipboard from '../../../components/modecules/CopyToClipboard';

const TransactionHistoryDetailsHeader = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
				gap: 1,
			}}
		>
			<Typography variant="h4" fontWeight="bold" color="primary">
				{t('shipment-id')}:
			</Typography>
			<CopyToClipboard copyText="KLM7642138">
				<Typography variant="h4" fontWeight="bold" color="secondary">
					KLM7642138
				</Typography>
			</CopyToClipboard>

			<BackButton redirectTo="/transactions" label={t('back-to-transactions')} />
		</Box>
	);
};

export default TransactionHistoryDetailsHeader;
