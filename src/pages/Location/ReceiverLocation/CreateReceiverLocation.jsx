import { Box } from '@mui/material';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import AddReceiverLocationForm from './parts/AddReceiverLocationForm';

/* eslint-disable arrow-body-style */
const CreateReceiverLocation = () => {
	return (
		<Box
			sx={{
				py: 2,
				px: 5,
			}}
		>
			<Box
				sx={{
					display: {
						xs: 'block',
						sm: 'flex',
					},
					alignItems: 'center',
				}}
			>
				<HeaderTitle label="ADD NEW LOCATION" />
				<BackButton />
			</Box>
			<AddReceiverLocationForm />
		</Box>
	);
};

export default CreateReceiverLocation;
