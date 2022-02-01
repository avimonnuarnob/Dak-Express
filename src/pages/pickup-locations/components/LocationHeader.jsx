/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import ActionButton from '../../../components/atoms/ActionButton';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';

const LocationHeader = () => {
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
			<HeaderTitle label="Pickup Location" />

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

export default LocationHeader;
