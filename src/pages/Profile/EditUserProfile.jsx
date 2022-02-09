import { Box } from '@mui/material';
import EditUserProfileBody from './parts/EditUserProfileBody';
import ProfileHeader from './parts/ProfileHeader';

const EditUserProfile = () => (
	<Box sx={{ py: 2, px: 3 }}>
		<ProfileHeader label="Edit Profile" />
		<EditUserProfileBody />
	</Box>
);

export default EditUserProfile;
