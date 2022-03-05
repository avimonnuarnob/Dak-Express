import { Box } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitlebar from '../../components/modecules/PageTitlebar';
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
			{ title: t('support'), link: 'supports' },
			{ title: t('get-support'), link: 'supports/new', current: true },
		],
		[t]
	);

	useEffect(() => {
		// window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch, breadcrumbs]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar title={t('get-support')} link="/supports" page={t('back-to-support')} />
			<CreateIssueForm />
		</Box>
	);
};

export default CreateIssue;
