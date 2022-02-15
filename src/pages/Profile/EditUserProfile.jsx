import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import EditUserProfileBody from './parts/EditUserProfileBody';
import ProfileHeader from './parts/ProfileHeader';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Profile', link: 'profile' },
	{ title: 'Edit Profile', link: 'profile/edit', current: true },
];

const EditUserProfile = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<ProfileHeader label="Edit Profile" />
			<EditUserProfileBody />
		</Box>
	);
};

export default EditUserProfile;
