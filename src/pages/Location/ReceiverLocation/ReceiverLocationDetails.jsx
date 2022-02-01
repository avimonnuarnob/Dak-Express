/* eslint-disable arrow-body-style */
import { Box } from '@mui/material';
import ReceiverLocationDetailsBody from './parts/ReceiverLocationDetailsBody';
import ReceiverLocationDetailsHeader from './parts/ReceiverLocationDetailsHeader';

const ReceiverLocationDetails = () => {
	return (
		<Box
			sx={{
				py: 2,
				px: 3,
			}}
		>
			<ReceiverLocationDetailsHeader />
			<ReceiverLocationDetailsBody />
		</Box>
	);
};

export default ReceiverLocationDetails;
