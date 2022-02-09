import { Box } from '@mui/material';
import ProfileHeader from './parts/ProfileHeader';
import UserProfileBody from './parts/UserProfileBody';

const UserProfile = () => (
	<Box sx={{ py: 2, px: 3 }}>
		<ProfileHeader label="Profile" />
		<UserProfileBody />
	</Box>
);

export default UserProfile;
