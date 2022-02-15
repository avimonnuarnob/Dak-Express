import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import UserProfileBody from './parts/UserProfileBody';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Profile', link: 'profile', current: true },
];

const UserProfile = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			{/* <ProfileHeader label="Profile" /> */}
			<UserProfileBody />
		</Box>
	);
};

export default UserProfile;
