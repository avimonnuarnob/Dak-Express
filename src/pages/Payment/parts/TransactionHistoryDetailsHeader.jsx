import { Box, Typography } from '@mui/material';
import BackButton from '../../../components/atoms/BackButton';

const TransactionHistoryDetailsHeader = () => (
	<Box
		sx={{
			display: {
				xs: 'block',
				sm: 'flex',
			},
			alignItems: 'center',
		}}
	>
		<Typography
			variant="h4"
			fontWeight="bold"
			sx={{
				color: 'typography.main',
			}}
		>
			Shipment ID:{' '}
			<Typography
				variant="span"
				sx={{
					color: 'secondary.main',
				}}
			>
				KLM7642138
			</Typography>
		</Typography>
		<BackButton />
	</Box>
);

export default TransactionHistoryDetailsHeader;
