/* eslint-disable arrow-body-style */
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import ActionButton from '../../../../components/atoms/ActionButton';
import BackButton from '../../../../components/atoms/BackButton';

const ReceiverLocationHeader = () => {
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
			<Typography
				variant="h4"
				fontWeight="bold"
				sx={{
					color: 'typography.main',
				}}
			>
				Receiver Location
			</Typography>
			<ActionButton
				label="ADD NEW LOCATION"
				Icon={AddIcon}
				color="typography.sec"
				sx={{
					p: 2,
					ml: 2,
				}}
			/>
			<BackButton />
		</Box>
	);
};

export default ReceiverLocationHeader;
