import { Box } from '@mui/material';
import TransactionHistoryHeader from './parts/TransactionHistoryHeader';
import TransactionHistoryTable from './parts/TransactionHistoryTable';

const TransactionHistories = () => (
	<>
		<Box
			sx={{
				p: 3,
			}}
		>
			<TransactionHistoryHeader />
		</Box>
		<Box
			sx={{
				mt: 3,
				borderRadius: 3,
				overflow: 'scroll',
				px: 3,
			}}
		>
			<TransactionHistoryTable />
		</Box>
	</>
);

export default TransactionHistories;
