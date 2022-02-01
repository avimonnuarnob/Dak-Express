/* eslint-disable arrow-body-style */
import { Box } from '@mui/material';
import ReceiverLocationHeader from './components/ReceiverLocationHeader';
import ReceiverLocationTable from './components/ReceiverLocationTable';

const ReceiverLocations = () => {
	return (
		<Box
			sx={{
				py: 2,
				px: 3,
			}}
		>
			<ReceiverLocationHeader />
			<Box
				sx={{
					mt: 5,
					borderRadius: 3,
					overflow: 'scroll',
				}}
			>
				<ReceiverLocationTable />
			</Box>
		</Box>
	);
};

export default ReceiverLocations;
