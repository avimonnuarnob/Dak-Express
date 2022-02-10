import { Box } from '@mui/material';
import TransactionHistoryDetailsBody from './parts/TransactionHistoryDetailsBody';
import TransactionHistoryDetailsHeader from './parts/TransactionHistoryDetailsHeader';

const TransactionHistoryDetails = () => (
	<Box
		sx={{
			p: 3,
		}}
	>
		<TransactionHistoryDetailsHeader />
		<TransactionHistoryDetailsBody />
	</Box>
);

export default TransactionHistoryDetails;
