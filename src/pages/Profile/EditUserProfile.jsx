import { Box } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import EditUserProfileBody from './parts/EditUserProfileBody';

const EditUserProfile = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('links-profile'), link: 'profile' },
			{ title: t('edit-profile'), link: 'profile/edit', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			{/* <ProfileHeader label="Edit Profile" /> */}
			<EditUserProfileBody />
		</Box>
	);
};

export default EditUserProfile;
