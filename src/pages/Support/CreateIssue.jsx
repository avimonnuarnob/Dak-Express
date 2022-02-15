import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import BackButton from '../../components/atoms/BackButton';
import HeaderTitle from '../../components/atoms/HeaderTitle';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import CreateIssueForm from './parts/CreateIssueForm';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Supports', link: 'supports' },
	{ title: 'Get Support', link: 'supports/new', current: true },
];

const CreateIssue = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
				<HeaderTitle label="Get Support" />
				<BackButton redirectTo="/supports" label="Back to supports" />
			</Box>
			<CreateIssueForm />
		</Box>
	);
};

export default CreateIssue;
