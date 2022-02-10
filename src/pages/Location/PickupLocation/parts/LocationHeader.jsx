/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ActionButton from '../../../../components/atoms/ActionButton';
import BackButton from '../../../../components/atoms/BackButton';
import HeaderTitle from '../../../../components/atoms/HeaderTitle';

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

			<Link to="/locations/pickup/new" style={{ textDecoration: 'none' }}>
			<ActionButton
				label="ADD NEW LOCATION"
				Icon={AddIcon}
				color="typography.sec"
				sx={{
					p: 2,
					ml: 2,
				}}
			/>
			</Link>

			<BackButton />
		</Box>
	);
};

export default LocationHeader;
