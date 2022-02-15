import { Box, Typography } from '@mui/material';
import BackButton from '../../../components/atoms/BackButton';
import CopyToClipboard from '../../../components/modecules/CopyToClipboard';

const TransactionHistoryDetailsHeader = () => (
	<Box
		sx={{
			display: { xs: 'block', sm: 'flex' },
			alignItems: 'center',
			gap: 1,
		}}
	>
		<Typography variant="h4" fontWeight="bold" color="primary">
			Shipment ID:
		</Typography>
		<CopyToClipboard copyText="KLM7642138">
			<Typography variant="h4" fontWeight="bold" color="secondary">
				KLM7642138
			</Typography>
		</CopyToClipboard>

		<BackButton redirectTo="/transactions" label="Back to transactions" />
	</Box>
);

export default TransactionHistoryDetailsHeader;
