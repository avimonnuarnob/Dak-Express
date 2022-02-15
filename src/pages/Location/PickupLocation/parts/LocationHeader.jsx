/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BackButton from '../../../../components/atoms/BackButton';
import HeaderTitle from '../../../../components/atoms/HeaderTitle';

const LocationHeader = () => {
	return (
		<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
			<HeaderTitle label="Pickup Location" />

			<Link to="/locations/pickup/new" style={{ textDecoration: 'none' }}>
				<Button
					variant="outlined"
					color="secondary"
					sx={{ px: 3, py: 2, ml: 2, bgcolor: 'primary.white' }}
					startIcon={<AddOutlinedIcon />}
				>
					Add New Location
				</Button>
			</Link>
			<BackButton />
		</Box>
	);
};

export default LocationHeader;
