import { Box } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import BackButton from '../../components/atoms/BackButton';
import HeaderTitle from '../../components/atoms/HeaderTitle';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import CreateIssueForm from './parts/CreateIssueForm';

const CreateIssue = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('links-support'), link: 'supports' },
			{ title: t('get-support'), link: 'supports/new', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch, breadcrumbs]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
				<HeaderTitle label={t('get-support')} />
				<BackButton redirectTo="/supports" label="Back to supports" />
			</Box>
			<CreateIssueForm />
		</Box>
	);
};

export default CreateIssue;
